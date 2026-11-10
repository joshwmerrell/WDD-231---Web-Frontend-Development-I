# WDD 231 Learning Workspace

This workspace supports the WDD 231 learning-contract and competency pass-off process. The goal is to build and explain your own work, collect evidence of learning, and track peer reviews and instructor or TA pass-offs.

## Course workflow

1. Choose one primary competency. By default, plan to work on all slices listed for that competency in the guide; decide explicitly which slices, if any, to defer. Add related slices from other competencies only when they support the contract. A contract may cover several slices, but it does not certify an entire competency.
2. Build a small increment, test it, investigate what happens, and record evidence of what you learned.
3. Review each slice with a peer. Record the evidence and resolve any gaps.
4. When every slice in a competency has been reviewed and the work is ready, meet with the instructor or TA for the whole-competency pass-off.
5. Record the pass-off result and next step in `competency-progress-tracker.md`. Use that result to plan the next contract.

Pass-off results are **Passed**, **Pass with next step**, or **Not yet**. A “Not yet” result identifies the smallest next step to address before another attempt.

## Responsible AI use

This workspace was created with AI assistance. AI may also help draft or update learning contracts, peer-review records, and evidence indexes; this is standard course documentation support. Record that documentation assistance briefly in the matching evidence index's `AI use` section, separately from any AI assistance with the assessed project work.

AI can help you understand a competency, clarify a contract objective, explain concepts, ask guiding questions, offer hints, suggest debugging investigations, or give feedback on work you wrote. AI may create a new starter or template page for you to build on, provided it leaves the code for your assessed slice for you to write.

AI must not generate or complete the code that demonstrates a slice you are working on for a contract. Use AI to support your understanding and learning, not to do the assessed work. When AI supports assessed project work, record what you asked, what guidance you used or rejected, and how you independently checked your work. Be ready to explain the final implementation without depending on the AI conversation.

Debugging and evidence-based troubleshooting are part of every contract and pass-off. Record the symptom, your hypothesis, the evidence you gathered, the fix or conclusion, and how you verified it.

## Workspace map

- `contracts/` — learning contracts and the [blank contract template](contracts/template.md).
- `reviews/` — peer review records and the [blank review template](reviews/template.md). A review record may cover multiple slices; record the peer feedback and status for each slice separately.
- `projects/` — your project code, organized by project. The README project index below connects each project to one or more contracts, evidence folders, and peer reviews.
- `evidence/` — screenshots, test notes, investigation records, and other evidence, organized by contract. Each contract folder uses `index.md` as its GitHub Pages landing page and evidence index.
- [`competency-progress-tracker.md`](competency-progress-tracker.md) — peer-reviewed slice records and whole-competency instructor or TA pass-off results. All progress starts blank.
- [Learning contract builder skill](.agents/skills/learning-contract-builder/SKILL.md) — interviews you, plans the project within the AI policy, and reminds you to collect evidence.
- [Contract peer-review skill](.agents/skills/contract-peer-review/SKILL.md) — creates or resumes the matching `reviews/rNN.md` and checkpoints the review as you and your peer respond.
- [Contract evidence index skill](.agents/skills/contract-evidence-index/SKILL.md) — creates and maintains timestamped evidence notes and the linked evidence index for each contract.
- `.old_code_before_restart/` — archived prior work retained as reference; it is not carried forward as completed progress.

## Project index

Keep this table current as contracts and peer reviews are created. A project may have multiple contracts over time, so append each related contract, evidence folder, and peer review to the same project row. A pending review is intentionally shown as not yet created; do not add a review link until the corresponding review record exists.

| Project | Contracts | Evidence folders | Peer reviews | Focus/status |
| --- | --- | --- | --- | --- |
| [Personal portfolio](projects/personal-portfolio/) | [c01](contracts/c01.md), [c02](contracts/c02.md) | [c01 evidence index](evidence/c01/), [c02 evidence index](evidence/c02/) | [r01](reviews/r01.md) — complete; r02 — pending/not yet created | c01: Semantic and accessible HTML — review complete; c02: Responsive CSS and inclusive visual design — review checkpoint November 12, 2026 |

## Course references

- [WDD 231 Competency Guide](https://byui-cse.github.io/wdd231-course/resources/competencies/)
- [Model the First Learning Contract](https://byui-cse.github.io/wdd231-course/ponder/model-first-learning-contract/)
- [Competency Pass-Off](https://byui-cse.github.io/wdd231-course/ponder/competency-pass-off-new/)
