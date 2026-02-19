# How do you ensure code quality and maintainability across your team?

## Why This Is Asked

Interviewers want to see that you have systems and practices in place—not just good intentions. They're looking for concrete mechanisms: code review, standards, testing, tooling, and how you enforce and evolve them.

## Key Points to Cover

- Code review practices and expectations
- Standards, style guides, and linting
- Testing (unit, integration, e2e) and CI/CD
- How you balance rigor with velocity

## STAR Method Answer Template

### Situation
_[Describe the context - what was happening, what team/company, what was at stake]_

### Task
_[What was your specific responsibility or challenge?]_

### Action
_[What specific steps did you take? Be detailed about YOUR actions]_

### Result
_[What was the outcome? Use metrics where possible. What did you learn?]_

## Tips

- Reference specific tools or practices (e.g., PR templates, automated checks)
- Include how you onboard new team members to quality expectations

## Example Response

**Situation:** At a Series B startup, I joined as the first engineering manager. The codebase had grown without consistent standards—mixed styles, minimal tests, and code reviews were sporadic and inconsistent. We were scaling the team from 5 to 15, and I knew we'd have quality and velocity problems if we didn't establish practices early.

**Task:** I needed to put systems in place for code quality and maintainability that would scale with the team and not slow us down.

**Action:** I introduced a PR template with checkboxes: tests added, docs updated, no new lint errors. I set up pre-commit hooks for linting and formatting (ESLint, Prettier) so style debates moved out of reviews. I established a code review SLA: all PRs reviewed within 24 hours, with at least one approval from a senior engineer. I created a lightweight style guide and ran a team session to align on expectations. For new hires, I added a "first PR" guide to our onboarding doc that explained our review expectations. I also allocated 10% of sprint capacity for "quality improvements"—tests, refactors, docs—so it wasn't an afterthought.

**Result:** Within three months, our test coverage went from 35% to 65%. PR cycle time dropped because reviews were more focused. New hires ramped faster with the explicit expectations. I learned that automation and clear expectations reduce friction—and that quality practices need dedicated capacity, not just good intentions.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Insist on Highest Standards — "How do you ensure code quality?" |
| Google | Technical excellence, collaboration |
| Meta | Scale, high-performing teams |
| Microsoft | Execution, quality |
| Stripe | Building reliable systems |
| Apple | Craft and quality, attention to detail |
