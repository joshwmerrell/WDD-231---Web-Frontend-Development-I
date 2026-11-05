---
name: contract-evidence-index
description: Create or update a WDD 231 learning contract's evidence index, add timestamped notes, and reconcile its linked evidence files. Use when a student asks to document contract evidence or refresh its evidence index.
---

# Contract Evidence Index

Maintain one `index.md` in each `evidence/cNN/` folder. It is the folder's landing page on GitHub Pages and the index of notes and evidence files. Keep the student's evidence intact; update the index to represent what is actually in the folder.

## Identify the contract and request

Read `README.md`, the relevant contract, and the contents of the matching evidence folder.

- If the user names a contract, use it.
- If no contract is named, identify likely active contracts from the README index and contract/review status, then ask the user to confirm the intended contract before editing.
- If more than one contract remains plausible, ask which one. Never assume the most recent contract is intended solely from its number.
- If the request does not say whether to add a note or another kind of content, ask what they want added. If they only asked to create or refresh the index, proceed with index maintenance and do not invent a note.

## Create or reconcile the index

For contract `cNN.md`, use `evidence/cNN/index.md`. Preserve existing notes and the `Evidence Summary` when updating the file. If the index does not exist, create it with Jekyll front matter that gives it the evidence folder's landing URL, for example:

```yaml
---
permalink: /evidence/cNN/
---
```

Use the contract's actual number in the permalink. Jekyll transforms Markdown pages with front matter; `index.md` at this permalink makes `/evidence/cNN/` open the index on a Jekyll-based GitHub Pages site. Follow an explicit site base path or permalink convention already present in the workspace.

The index should include, in this order:

1. A title naming the evidence index and contract number.
2. Links to the matching learning contract and peer review, with the review marked pending until its file exists.
3. An `Evidence Summary` section near the top, initially marked not yet summarized. When the peer review is complete, the peer-review skill fills it with a summary of all notes and evidence for the contract, plus the review findings and follow-up actions.
4. A timestamped notes timeline.
5. A reconciled evidence-file list linking to files currently present under `evidence/cNN/`, excluding `index.md` itself. Include nested files with paths relative to the evidence folder.

Compare the complete current folder contents with the evidence-file list each time the index is created or updated. Add links for unlisted files and remove stale links for files that no longer exist; do not delete, move, or rename evidence. Preserve the `Evidence Summary` and notes timeline while reconciling the file list. Do not list directories as evidence files.

When the index is created or its contract/review links change, update the corresponding row in the README project index and the matching contract and review files when they exist. Add a visible evidence-index link in the contract and review. The index itself must link back to its contract and matching review. Keep multiple contracts under one project represented as separate entries in that project's row. Do not fabricate a review record when it has not been created; the planned relative review link may be marked pending until the peer-review workflow creates it.

## Add a note

When the user asks to add a note, write a concise, faithful summary of the information they provide in the notes timeline. Preserve earlier notes and order entries newest first. Format each entry as a list item with the creation timestamp followed by the note, for example `- **2026-11-05T14:30:00-07:00** — [note summary]`. Each entry must include its creation date and time in ISO 8601 format with an explicit timezone offset, for example `2026-11-05T14:30:00-07:00`.

If the user has not said whether they used AI for the project or whether they want that use documented, ask whether they used AI and whether they would like to include it in this note or add a separate note. If they want to document AI use, ask what they asked the AI and how it helped. Record only what they choose to share; do not infer AI use or press them to include it. Wait for their answer before writing the note when the answer affects its contents.

Use the timezone supplied by the user's current context when available. Otherwise use UTC and label it explicitly. Obtain the current time from an available clock source; do not invent or backdate timestamps. If the user supplies an event date different from the note creation time, keep it as note content and still timestamp when the note was recorded.

After adding the note, reconcile the evidence-file list and update links in README and the matching contract/review files as described above. Report the index path and entry added. Do not claim the contents were published to GitHub Pages unless deployment was actually observed.

## Other requested index content

If the user asks to add something other than a note, clarify placement when needed, preserve the existing structure, and label the material so it is distinct from timestamped notes. Never attribute a note or review summary to a person who did not provide it.
