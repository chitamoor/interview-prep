---
name: star-response
description: Converts rough personal notes into a polished STAR-format behavioral interview response and writes it to the corresponding _response.md file. Supports multiple examples per question. Use when the user says "create STAR response", "write my STAR answer", "add another example", "add a second story", or wants to populate a response file for a behavioral interview question.
---

# STAR Response Generator

Turns rough notes into a polished personal STAR response for a behavioral interview question.
Supports multiple STAR examples per question — each is appended as a numbered entry.

> This skill works in **Cursor** (`.cursor/skills/`) and **Claude Code** (`.claude/skills/`).
> Both are included in this repo. No changes to the skill file are needed — just use whichever assistant you prefer.

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

### Step 2 — Identify the response file and check existing content

The response file is in the **same directory** as the question file. Replace `.md` with `_response.md`:

```
q01_prioritize_tasks.md  →  q01_prioritize_tasks_response.md
q03_handle_conflict.md   →  q03_handle_conflict_response.md
```

Read the existing response file and determine its state:

| State | How to detect | Action |
|---|---|---|
| **Empty / blank template** | No `## Example` headings present | Write Example 1 as the full file |
| **Has one example** | Contains `## Example 1` | Append `## Example 2` after the last line |
| **Has N examples** | Contains `## Example N` | Append `## Example N+1` after the last line |

**Never overwrite or remove existing examples.** When appending, read the full file first, then write the complete file with (existing content + new example block). Do not write only the new example — that would overwrite and lose existing content.

### Step 3 — Generate the STAR response

Using the user's rough notes + question context, write a polished first-person STAR response:

- **Situation**: Specific context — company stage, team size, what was happening, what was at stake. 2-4 sentences.
- **Task**: The user's specific responsibility or challenge. 1-2 sentences.
- **Action**: Detailed, first-person actions the user took. Use "I" not "we". Be specific — name tools, frameworks, conversations, decisions. 3-6 sentences. This is the most important section.
- **Result**: Concrete outcome. Use numbers/metrics wherever the notes hint at them. 2-3 sentences. End with a learning or insight if natural.
- **Notes**: Follow-up points, alternative angles, or metrics to add before the interview.

### Step 4 — Quality check

Before writing, verify the response:
- Directly answers the specific question asked (check "Why This Is Asked")
- Covers the key points listed in the question file
- Uses "I" throughout (not "we" or "the team")
- Has a concrete, measurable result
- Avoids the pitfalls listed in Tips

### Step 5 — Write the response file

**If the file is empty or has only a blank template**, write the full file:

```markdown
# My Response: [question text here]

## Example 1

| | |
|---|---|
| **Company / Team** | _[fill in]_ |
| **Scenario** | _[one-line summary of the situation, e.g. "Two engineers debating MFE dependency strategy"]_ |

### Situation
[polished situation paragraph]

### Task
[polished task paragraph]

### Action
[polished action paragraph]

### Result
[polished result paragraph]

### Notes
[follow-up points, metrics to add, alternative angles]
```

**If the file already has examples**, append after the last line:

```markdown

---

## Example 2

| | |
|---|---|
| **Company / Team** | _[fill in]_ |
| **Scenario** | _[one-line summary of the situation]_ |

### Situation
[polished situation paragraph]

### Task
[polished task paragraph]

### Action
[polished action paragraph]

### Result
[polished result paragraph]

### Notes
[follow-up points, metrics to add, alternative angles]
```

Confirm to the user what was written, which example number it is, and which file was updated.

## Tone and Style

- First person, conversational but professional
- Specific and concrete — no vague platitudes
- Honest — stay true to the user's notes, don't invent facts
- Engineering management voice — talks about teams, systems, stakeholders, trade-offs
- If the notes are thin, ask one clarifying question before writing rather than fabricating detail

## Examples

**Adding a first response:**
> "create STAR response for @q01_prioritize_tasks.md — my notes: had 3 competing projects, used OKRs to rank them, killed the lowest one, shipped the other two on time"

→ Writes Example 1 to `q01_prioritize_tasks_response.md`

**Adding a second response to the same question:**
> "create STAR response for @q01_prioritize_tasks.md — my notes: different story, at previous company, two orgs competing for same team, had to split capacity 60/40"

→ Reads existing file, sees Example 1, appends Example 2
