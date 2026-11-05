---
name: contract-peer-review
description: "Conduct or resume a step-by-step WDD 231 peer review of a learning contract, recording student explanations and peer feedback for every included slice in the matching reviews/rNN.md file. Use when a student asks to review, continue, or complete a contract peer review."
---

# Contract Peer Review

Guide the student and peer through a contract review, one question at a time, and maintain a recoverable review record. A peer review evaluates and discusses the contract's slices. It does not certify a whole competency or replace the instructor/TA pass-off.

## Read the contract and workspace

Read `README.md`, `reviews/template.md`, the contract being reviewed, and any related evidence the student points to. `reviews/template.md` is read-only: never edit or overwrite it. Use existing review files to find prior answers and determine whether a review is complete or needs to resume. Do not treat `.old_code_before_restart/` as current progress unless the student explicitly asks to review an archived contract.

Choose the contract as follows:

- If the student names a contract, use it.
- If they ask to continue a review, find the matching `reviews/rNN.md` that is marked in progress or has unanswered prompts, unreviewed slices, or missing student/peer feedback. If exactly one needs continuation, resume it. If several do, ask which one.
- If no contract is named and only one current contract needs review, use that. If more than one is possible, ask which contract before starting.

Do not review slices that the contract explicitly deferred. Include every slice the contract says it will work on, including agreed supporting slices. If the contract does not clearly identify its included slices, ask the student to clarify before proceeding.

## Create or resume the review file before review questions

Map contract `cNN.md` to review `rNN.md` using the same number, with at least two digits (for example, `c01.md` → `r01.md`). For a legacy contract with a shorter number such as `c1.md`, format the numeric value with at least two digits (`r01.md`).

Before asking substantive review questions:

1. If `reviews/rNN.md` does not exist, create it immediately by copying the structure of `reviews/template.md` into a new file. Never change the template itself.
2. Fill in facts already known from the contract, such as the student, contract link, competencies, and one table row for each included slice. Mark each slice `Not yet reviewed`.
3. Add a progress header with `Review progress: In progress`, the contract filename, and `Next question to ask: [specific question or participant]`.
4. Add a `Review checkpoints` section for the questions and answers. Save the initial file before asking the first review question.

If the matching review file already exists and is incomplete, continue editing that file; do not create a duplicate. If its next prompt is recorded, ask that prompt first. If it lacks a clear next prompt, inspect the unanswered fields and slice rows, record the next question, save, and then ask it.

When a target contract cannot be determined, it is acceptable to ask which contract the student means first. Create the corresponding review file immediately after the target is known and before asking review-content questions.

## Conduct the review with both student and peer

Ask one question at a time. Direct each question to the student or peer by role. Before each question, write the exact pending question in the progress header and save the review file. After the person answers, record the question, the speaker's role, and a concise faithful summary of the answer in `Review checkpoints`; update the relevant template section or slice row and the next pending question; save before asking anything else. Never replace earlier answers with guesses. This checkpoint sequence lets a later invocation continue after interruption or error without repeating completed steps.

Proceed through the review in manageable steps:

1. Confirm the student and peer reviewer names and that both are participating. If the peer is absent, continue only with student preparation, leave peer fields pending, and explain that the review cannot be completed or marked peer-reviewed until the peer contributes. Do not invent or attribute feedback to an absent peer.
2. For each included slice, ask the student to point to the artifact/evidence and explain what they did, the important decision, and how they verified it. Ask a focused follow-up about a gap, challenge, or small change when needed.
3. For that slice, ask the peer what they observed, what was clear, and whether they noticed a question or unresolved gap. Record the peer's feedback in that slice's table row.
4. Ask the student how they understand or will respond to the feedback. Record a concrete next step if one is needed.
5. Repeat for every included slice, then ask both participants for any overall pattern or final next step needed by the template.

Keep questions tied to the contract's stated slices and evidence. Help the student explain their own work; do not generate, rewrite, or fix code for an assessed slice. Use the workspace AI policy in `README.md`.

For each slice, set its status to `Reviewed` when the student has explained it, the peer has discussed it, and any feedback is recorded. Set it to `Follow-up needed` when a gap remains and record the specific next step. A follow-up need does not prevent the review conversation itself from being complete, but the record must make the gap visible.

## Resume and complete

When asked to continue a review, inspect `reviews/rNN.md` first. Continue from `Next question to ask` and the first unanswered slice or template field. Do not repeat answered questions unless a response is unclear or the student asks to revisit it. After each new answer, checkpoint and save before proceeding.

Set `Review progress: Complete` only when:

- every included slice has its own artifact/evidence, student explanation, peer feedback, and slice status;
- the template's overall demonstration, peer feedback, and student response/next step sections are filled;
- no question remains unanswered.

If there are unresolved gaps, mark the affected rows `Follow-up needed` and record those steps while marking the review conversation complete only after all required participants and sections are covered. Leave the review `In progress` if the peer has not participated or required answers are still pending.

If the student requests another review of a contract whose `rNN.md` is already complete, continue in that same file as a dated follow-up section; do not create a second file with the same name or mark the competency passed.

When done, summarize the slice statuses and next steps. Tell the student to keep evidence linked in the contract's matching `evidence/cNN/` folder. Leave `competency-progress-tracker.md` unchanged: the instructor or TA whole-competency pass-off happens after every slice has been peer-reviewed.
