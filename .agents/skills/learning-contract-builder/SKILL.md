---
name: learning-contract-builder
description: "Interview a WDD 231 student to plan a focused learning contract, create or extend its project scaffold within the workspace AI policy, and remind them to collect evidence. Use when a student asks to draft, plan, or revise a WDD 231 learning contract."
---

# Learning Contract Builder

Help the student create a focused, honest WDD 231 learning contract and ensure it has a project context and an evidence plan. The student owns all code that demonstrates the competency slices in the contract.

## Read the workspace first

From the active WDD 231 workspace, read `README.md`, `contracts/template.md`, and `competency-progress-tracker.md`. `contracts/template.md` is a read-only reference: never edit or overwrite it. Review existing contract and peer-review records and inspect `projects/` and `evidence/` to understand current work. Do not treat `.old_code_before_restart/` as completed progress; it is an archive. Use archived work only if the student explicitly asks to reuse or reference a particular project.

Use the tracker and the official competency guide linked in `README.md` to discuss competency choices and indicator slices. Treat the student's experience, interests, and stated priorities as primary. Do not impose an old suggested contract sequence.

Before asking the student to settle on a primary competency, identify competencies that have been worked on but are not yet passed off. A competency counts as **worked on** when a non-archived contract names it as a primary or supporting competency, a review discusses one or more of its slices, or the tracker records slice activity or evidence. A competency is still **incomplete** if it has no whole-competency **Passed** result in the tracker, or its result is **Pass with next step** or **Not yet**. Treat a missing result as incomplete when there is evidence of work; do not mistake an untouched competency with blank rows for a worked-on one.

Present any such competencies with the evidence that led you to identify them (for example, a contract name, reviewed slice, or pass-off result), then ask whether the student wants to focus primarily on one of them in this contract. If they already suggested another primary competency, ask whether they want to keep that choice or switch to the incomplete one. Do not assume they must continue prior work; honor their choice. Do not count `.old_code_before_restart/` toward current progress unless the student explicitly asks to reuse or reference it.

## Interview the student

Ask concise, specific questions that fill the sections in `contracts/template.md`. Ask in small groups, usually no more than three questions at once. Do not write the contract or project until the student has supplied or confirmed the information needed. Keep questions conversational; do not ask them to repeat information already present in workspace files or the conversation.

Cover these points:

- **Focus:** First surface any worked-on but incomplete competencies as described above and ask whether the student wants one of them as the primary focus. Then confirm one primary competency. Consult the guide and tracker, then show the student all listed slices for that competency. Ask directly whether they want to work on all of them in this contract (the default), and which slices, if any, they want to defer for now. Do not silently narrow the default scope. Explain that the student may defer other competencies entirely. Add supporting slices from other competencies only when useful to the primary focus, and ask which ones they want to include. If the full default set seems too large for the student's time or project, explain the scope concern and ask which slices or competencies to defer. Keep one primary focus and do not imply that the contract itself certifies a whole competency.
- **Starting point:** What can they already do in these slices, what evidence or experience supports that, and what do they still need to understand or improve?
- **Guiding question:** What question should their practice help answer?
- **Project choice:** Inspect `projects/`. If a project exists, ask which one to build on or whether they want a new one. If none exists, a project must be started as part of this contract; ask for a theme or purpose and a suitable project name. If the student wants a new project despite existing projects, start a separate project rather than overwriting prior work.
- **Plan and resources:** What increment will they build, what resources do they want to use, and what milestone/date fits their schedule? Suggest relevant official course resources or documentation when useful. Ask whether they want suggestions if their resource plan is unclear.
- **Challenge and evidence:** What change, edge case, input, viewport, or behavior can challenge their understanding? Plan evidence appropriate to the chosen slices: a working increment, an explanation of decisions, checks or experiments, a debugging investigation where applicable, and a small transfer/adaptation task. Ask what support or risks they anticipate.
- **AI use:** Ask how they expect to use AI, if at all, and how they will check their work independently. Apply the policy below.
- **Contract details:** Ask for any missing student name, contract date, or target review date; never invent these. Name new files `contracts/cNN.md` and matching evidence folders `evidence/cNN/`, with at least two digits (for example, `c01.md` and `c14.md`). Choose the next unused number after the highest existing numbered contract; never overwrite an existing contract.

You may propose wording, steps, milestone criteria, resources, and evidence based on the student's answers. Distinguish proposals from facts about the student's experience. Do not invent test results, completed work, peer reviews, or pass-off outcomes. If a field is unknown, ask or mark it clearly as undecided rather than fabricating an answer. List every included slice explicitly in the contract, including supporting slices, and list any deferred slices or competencies so their absence is intentional.

## AI-use boundary for contract and project work

Follow `README.md`'s responsible AI policy. AI may explain the objective and concepts, ask guiding questions, give conceptual hints, suggest debugging investigations, or review code the student wrote. AI may create a new project or template page as a starting point, but it must leave the code for every slice in the current contract for the student to implement.

Before creating or changing project files, identify the contract's assessed slices and keep their implementation out of the scaffold. Do not generate, complete, rewrite, or provide directly usable code for those slices, including as a “sample,” patch, or solution. If a scaffold would necessarily implement an assessed slice, create only the project directory and neutral empty files or ask the student how they want to proceed. Scaffolding for unrelated, unassessed setup may be created when it does not do the student's assessed work. Do not overwrite existing project work; create a new project directory when requested.

When tutoring on an assessed slice, use explanations, questions, and graduated hints that help the student reason it out. Do not respond to a debugging request by supplying the finished implementation for that slice. Ask the student to explain the code and choices in their own words.

## Create the contract and project

When the interview is complete:

1. Use `contracts/template.md` as a read-only structure and create a separate contract file in the student's first-person voice, adapted to their actual answers. Include one primary competency with all its guide-listed slices by default, except those the student explicitly defers; add only agreed supporting slices from other competencies. Also include an honest starting point, guiding question, learning steps and resources, first milestone, a meaningful prediction-and-check challenge, evidence and readiness criteria, support and risks, and the AI-use plan if relevant. Never write the new contract into or over `contracts/template.md`.
2. Preserve the template's AI boundary in the new contract. Do not broaden the slices or claim certification.
3. If using an existing project, reference its path and make only agreed changes outside the assessed implementation. If starting a new project, create `projects/<project-name>/` with a minimal, useful scaffold matched to the student's project choice and contract. Keep all assessed slice code for the student. Do not install dependencies or add frameworks unless the student and course requirements call for them.
4. Determine the next unused contract number and format it with at least two digits (for example, `01`, `14`, or `100`). Create the matching `evidence/cNN/` folder, where `NN` is the same formatted number as the contract. Keep it ready for the student's evidence; do not fabricate or prefill evidence.
5. Save the new contract as `contracts/cNN.md`, using the same number as its evidence folder, and link to the project and evidence paths where relevant. Leave both templates, peer-review records, and the competency tracker unchanged until the student actually completes those steps.
6. Update the workspace `README.md` project index for the new or extended project. A project may have multiple contracts over time: keep one project row when practical and append the new contract link, matching evidence-folder link, focus, and review status to that project's entries. Show the matching peer review as pending/not yet created until `reviews/rNN.md` exists. Do not claim peer-review completion or pass-off in the README.

When revising an existing contract or continuing work on its project, keep the corresponding README project-index row accurate if the project path, contract relationship, evidence location, focus, or status changes. If the project already has other contracts, preserve their links and statuses and append or update only the relevant contract entry. Do not overwrite unrelated README content.

## Remind the student about evidence

After saving the contract, clearly remind the student to add evidence under the matching `evidence/cNN/` folder as they work, not just at the end. Explain that useful evidence may include:

- a link or path to the working artifact and the relevant files;
- screenshots or notes showing relevant viewport, keyboard, interaction, or API behavior;
- tests, experiments, predictions and observations, or measurements appropriate to the slices;
- an explanation of important decisions and a small change they can handle independently;
- for debugging, the expected and actual behavior, hypothesis, evidence, fix, and verification;
- an AI-use note stating what they asked, what they accepted or rejected, and how they checked the result.

Tell them to update the contract's evidence links/notes and to create a peer-review record in `reviews/` after the review. One record may cover several slices, but the review table must give each slice its own evidence note, peer feedback, and status. Explain that only after every slice in a competency has been peer-reviewed should they request the instructor/TA whole-competency pass-off and update the tracker.

## Finish

Summarize the contract focus, project decision, target review date, and evidence folder. Point out any decisions the student still needs to make. Do not claim the contract or project is a pass-off, and do not mark progress in the tracker.
