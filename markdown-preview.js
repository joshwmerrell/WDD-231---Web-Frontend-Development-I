const readmeContent = document.querySelector("#readme-content");
const loadStatus = document.querySelector("#load-status");
const themeToggle = document.querySelector("#theme-toggle");
const themeColor = document.querySelector('meta[name="theme-color"]');
const rootUrl = new URL("/", window.location.origin);
const requestedFile = new URLSearchParams(window.location.search).get("file") || "README.md";

function applyTheme(theme, savePreference = false) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeColor.setAttribute("content", isDark ? "#0d1117" : "#f6f8fa");

  if (savePreference) {
    try {
      localStorage.setItem("wdd231-markdown-theme", isDark ? "dark" : "light");
    } catch {
      // The selected theme remains active for this page when storage is unavailable.
    }
  }
}

applyTheme(document.documentElement.dataset.theme);
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme, true);
});

function getMarkdownUrl(path) {
  if (!path || path.startsWith("/") || path.includes("\\")) {
    throw new Error("Choose a Markdown file inside this workspace.");
  }

  const pathParts = path.split("/");
  const isAgentSkill = pathParts[0] === ".agents" && pathParts[1] === "skills";
  const hasDisallowedSegment = pathParts.some((part) =>
    !part ||
    part === "." ||
    part === ".." ||
    (part.startsWith(".") && !(part === ".agents" && isAgentSkill)) ||
    part === "node_modules" ||
    part === ".old_code_before_restart",
  );
  if (hasDisallowedSegment) {
    throw new Error("That Markdown file is outside the published workspace documents.");
  }

  if (!path.toLowerCase().endsWith(".md")) {
    throw new Error("The preview route only accepts Markdown files.");
  }

  const url = new URL(path, rootUrl);
  if (url.origin !== rootUrl.origin || !url.pathname.startsWith(rootUrl.pathname)) {
    throw new Error("Choose a Markdown file inside this workspace.");
  }

  return url;
}

function viewerUrlFor(path, hash = "") {
  const url = new URL("/", rootUrl);
  url.searchParams.set("file", path.replace(/^\/+/, ""));
  url.hash = hash;
  return url;
}

function updateRenderedLinks(sourceUrl) {
  for (const element of readmeContent.querySelectorAll("a[href], img[src]")) {
    const attribute = element.tagName === "A" ? "href" : "src";
    const value = element.getAttribute(attribute);
    if (!value || value.startsWith("#")) continue;

    let resolved;
    try {
      resolved = new URL(value, sourceUrl);
    } catch {
      continue;
    }

    if (resolved.origin !== rootUrl.origin) continue;

    const decodedPath = decodeURIComponent(resolved.pathname);
    if (element.tagName === "A") {
      let markdownTarget = decodedPath;
      if (/\/evidence\/c\d+\/$/i.test(markdownTarget)) {
        markdownTarget += "index.md";
      }

      if (markdownTarget.toLowerCase().endsWith(".md")) {
        element.href = viewerUrlFor(markdownTarget, resolved.hash).href;
      } else {
        element.href = resolved.href;
      }
    } else {
      element.src = resolved.href;
    }
  }
}

async function getMarkdownText(fileUrl) {
  const response = await fetch(fileUrl.href);
  if (!response.ok) {
    throw new Error(`${fileUrl.pathname} could not be loaded (${response.status}).`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("text/html")) {
    throw new Error(`${fileUrl.pathname} is not available as raw Markdown from this server.`);
  }

  return response.text();
}

async function renderMarkdown() {
  try {
    const fileUrl = getMarkdownUrl(requestedFile);
    document.title = `${fileUrl.pathname.split("/").at(-1).replace(/\.md$/i, "")} | WDD 231`;

    if (!window.marked || !window.DOMPurify) {
      throw new Error("The Markdown renderer could not be loaded.");
    }

    let markdown;
    try {
      markdown = await getMarkdownText(fileUrl);
    } catch (localError) {
      const repoPath = fileUrl.pathname.replace(/^\/+/, "");
      const rawUrl = new URL(
        `https://raw.githubusercontent.com/joshwmerrell/WDD-231---Web-Frontend-Development-I/main/${repoPath}`,
      );
      const response = await fetch(rawUrl);
      if (!response.ok) throw localError;
      markdown = await response.text();
    }

    markdown = markdown.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");
    const rendered = window.marked.parse(markdown);
    readmeContent.innerHTML = window.DOMPurify.sanitize(rendered);
    updateRenderedLinks(fileUrl);
    readmeContent.setAttribute("aria-busy", "false");
    readmeContent.setAttribute("aria-label", `Rendered Markdown: ${fileUrl.pathname.split("/").at(-1)}`);
    loadStatus.hidden = true;
  } catch (error) {
    loadStatus.textContent = `${error.message} You can open the Markdown source directly.`;
    const sourceLink = document.createElement("a");
    try {
      sourceLink.href = getMarkdownUrl(requestedFile).href;
    } catch {
      sourceLink.href = "README.md";
    }
    sourceLink.textContent = "Open Markdown source";
    loadStatus.append(" ", sourceLink);
    readmeContent.setAttribute("aria-busy", "false");
  }
}

renderMarkdown();
