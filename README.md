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

AI can help you understand a competency, clarify a contract objective, explain concepts, ask guiding questions, offer hints, suggest debugging investigations, or give feedback on work you wrote. AI may create a new starter or template page for you to build on, provided it leaves the code for your assessed slice for you to write.

AI must not generate or complete the code that demonstrates a slice you are working on for a contract. Use AI to support your understanding and learning, not to do the assessed work. When you use AI, record what you asked, what guidance you used or rejected, and how you independently checked your work. Be ready to explain the final implementation without depending on the AI conversation.

Debugging and evidence-based troubleshooting are part of every contract and pass-off. Record the symptom, your hypothesis, the evidence you gathered, the fix or conclusion, and how you verified it.

## Workspace map

- `contracts/` — learning contracts and a blank contract template.
- `reviews/` — peer review records and a blank review template. A review record may cover multiple slices; record the peer feedback and status for each slice separately.
- `projects/` — your project code, organized by project. The README project index below connects each project to one or more contracts, evidence folders, and peer reviews.
- `evidence/` — screenshots, test notes, investigation records, and other evidence, organized by contract.
- [`competency-progress-tracker.md`](competency-progress-tracker.md) — peer-reviewed slice records and whole-competency instructor or TA pass-off results. All progress starts blank.
- `.agents/skills/learning-contract-builder/` — the WDD 231 contract-building skill, which interviews you, plans the project within the AI policy, and reminds you to collect evidence.
- `.agents/skills/contract-peer-review/` — the WDD 231 peer-review skill, which creates or resumes the matching `reviews/rNN.md` and checkpoints the review as the student and peer respond.
- `.old_code_before_restart/` — archived prior work retained as reference; it is not carried forward as completed progress.

## Project index

Keep this table current as contracts and peer reviews are created. A project may have multiple contracts over time, so append each related contract, evidence folder, and peer review to the same project row. A pending review is intentionally shown as not yet created; do not add a review link until the corresponding review record exists.

| Project | Contracts | Evidence folders | Peer reviews | Focus/status |
| --- | --- | --- | --- | --- |
| [Personal portfolio](projects/personal-portfolio/) | [c01](contracts/c01.md) | [c01 evidence](evidence/c01/) | Not yet created (`r01.md` planned) | Semantic and accessible HTML — c01 in progress |

## Course references

- [WDD 231 Competency Guide](https://byui-cse.github.io/wdd231-course/resources/competencies/)
- [Model the First Learning Contract](https://byui-cse.github.io/wdd231-course/ponder/model-first-learning-contract/)
- [Competency Pass-Off](https://byui-cse.github.io/wdd231-course/ponder/competency-pass-off-new/)
