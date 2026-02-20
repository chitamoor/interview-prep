---
name: star-response
description: Converts rough personal notes into a polished STAR-format behavioral interview response and writes it to the corresponding _response.md file. Use when the user says "create STAR response", "write my STAR answer", "fill in my response", or wants to populate a response file for a behavioral interview question.
---

# STAR Response Generator

Turns rough notes into a polished personal STAR response for a behavioral interview question.

## Inputs

1. **The question file** — explicitly `@`-referenced in the request (e.g., `@q01_prioritize_tasks.md`). If not explicitly referenced, fall back to the currently focused file shown in context. If ambiguous, ask the user which question they want to answer before proceeding.
2. **The user's rough notes** — provided inline in the request

## Workflow

### Step 1 — Read the question file

Read the question file to extract:
- The question text (the `# heading`)
- **Why This Is Asked** — what the interviewer is looking for
- **Key Points to Cover** — what a strong answer must include
- **Tips** — pitfalls to avoid

### Step 2 — Identify the response file

The response file is in the **same directory** as the question file. Replace the `.md` extension with `_response.md`:

```
q01_prioritize_tasks.md  →  q01_prioritize_tasks_response.md
q03_handle_conflict.md   →  q03_handle_conflict_response.md
```

Read the existing response file to see if there's anything already there worth preserving.

### Step 3 — Generate the STAR response

Using the user's rough notes + question context, write a polished first-person STAR response:

- **Situation**: Specific context — company stage, team size, what was happening, what was at stake. 2-4 sentences.
- **Task**: The user's specific responsibility or challenge. 1-2 sentences.
- **Action**: Detailed, first-person actions the user took. Use "I" not "we". Be specific — name tools, frameworks, conversations, decisions. 3-6 sentences. This is the most important section.
- **Result**: Concrete outcome. Use numbers/metrics wherever the notes hint at them. 2-3 sentences. End with a learning or insight if natural.
- **Notes**: Capture any follow-up points, variations, or alternative stories from the rough notes that didn't fit the main response.

### Step 4 — Quality check

Before writing, verify the response:
- Directly answers the specific question asked (check "Why This Is Asked")
- Covers the key points listed in the question file
- Uses "I" throughout (not "we" or "the team")
- Has a concrete, measurable result
- Avoids the pitfalls listed in Tips

### Step 5 — Write the response file

Write the completed response to the `_response.md` file using this exact template:

```markdown
# My Response: [question text here]

## Situation
[polished situation paragraph]

## Task
[polished task paragraph]

## Action
[polished action paragraph]

## Result
[polished result paragraph]

## Notes
[any additional context, follow-up points, or alternative stories from the rough notes]
```

Confirm to the user what was written and which file was updated.

## Tone and Style

- First person, conversational but professional
- Specific and concrete — no vague platitudes
- Honest — stay true to the user's notes, don't invent facts
- Engineering management voice — talks about teams, systems, stakeholders, trade-offs
- If the notes are thin, ask one clarifying question before writing rather than fabricating detail

## Example

**User says:** "create STAR response for @q01_prioritize_tasks.md — my notes: we had 3 competing projects, I used OKRs to rank them, killed the lowest one, team was relieved, shipped the other two on time"

**Skill does:**
1. Reads `q01_prioritize_tasks.md` (currently open)
2. Identifies response file: `q01_prioritize_tasks_response.md`
3. Generates a polished STAR response from the rough notes
4. Writes to `q01_prioritize_tasks_response.md`
