const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-navigation");

function setNavigationOpen(isOpen) {
  menuButton.setAttribute("aria-expanded", String(isOpen));
  navigation.classList.toggle("is-open", isOpen);
}

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setNavigationOpen(!isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) setNavigationOpen(false);
});

window.addEventListener("resize", () => {
  if (window.matchMedia("(min-width: 651px)").matches) setNavigationOpen(false);
});
