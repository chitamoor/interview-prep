# How do you balance speed of delivery with engineering quality?

## Why This Is Asked

Interviewers want to see that you make intentional trade-offs rather than defaulting to "move fast" or "do it right." They're looking for context-aware judgment—knowing when to invest in quality and when to ship quickly with a plan to iterate.

## Key Points to Cover

- Assessing context (criticality, longevity, team capacity)
- Defining "good enough" for different scenarios
- Building in quality practices that don't slow you down
- Being explicit about trade-offs with stakeholders

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

- Give examples of when you prioritized speed vs. quality and your reasoning
- Show you avoid false dichotomies—often you can have both with the right practices

## Example Response

**Situation:** At a marketplace startup, we had a 6-week window to launch a new category before a competitor. The product was defined, but the technical approach had trade-offs: we could build a minimal version that reused existing infrastructure (fast, some tech debt) or design a proper scalable solution (slower, cleaner). Leadership wanted speed; the team wanted to do it right.

**Task:** I needed to make an intentional trade-off and communicate it clearly—and ensure we had a plan to address the debt we'd incur.

**Action:** I assessed the context: the new category was experimental—we didn't know if it would take off. Building for 10x scale upfront would be over-engineering. I proposed we ship the minimal version in 5 weeks, with clear boundaries: we'd accept some duplication and a smaller feature set, but we'd maintain our quality bar for correctness and security. I documented the trade-off in an ADR and committed to a "Phase 2" refactor if the category succeeded—with a trigger (e.g., 10K orders/month). I also ensured we had monitoring so we'd know when to invest. We shipped on time; the category grew. We did the refactor 4 months later when we hit the trigger.

**Result:** We captured market share and validated the category. The refactor was straightforward because we'd planned for it. I learned that speed vs. quality isn't binary—you can ship fast with clear boundaries and a plan to improve. The key is being explicit about the trade-off and having a trigger for when to invest more.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Bias for Action, Deliver Results — "How do you balance speed and quality?" |
| Google | Technical excellence, structuring unclear situations |
| Meta | Moving fast, scale |
| Microsoft | Execution under pressure |
| Stripe | Moving fast in ambiguity, reliable systems |
| Uber | Results orientation, moving fast |
