# How do you handle technical debt while delivering new features?

## Why This Is Asked

Interviewers want to see that you can balance short-term delivery with long-term health. They're looking for a pragmatic approach—neither ignoring debt nor letting it block progress—and evidence that you communicate trade-offs to stakeholders.

## Key Points to Cover

- Making technical debt visible (tracking, prioritizing, quantifying risk)
- Allocating capacity for debt reduction alongside feature work
- Tying debt paydown to business outcomes when possible
- Setting boundaries on when debt is acceptable vs. when it must be addressed

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

- Describe a time when you negotiated with product or leadership to carve out time for debt
- Avoid framing debt as "bad"—show you understand when it's a deliberate trade-off

## Example Response

**Situation:** At a fintech startup, my team owned a payments service that had grown organically—lots of copy-paste, inconsistent error handling, and no integration tests. We were shipping features, but each release carried risk. Incidents were increasing, and we'd had two production outages in three months. Product wanted more features; I knew we had to invest in debt or things would get worse.

**Task:** I needed to make technical debt visible, quantify the risk, and negotiate capacity for paydown without blocking delivery.

**Action:** I created a simple debt register: each item had impact (e.g., "causes 2–3 incidents/quarter"), effort (story points), and a proposed slot. I presented it to product and leadership with a clear ask: 20% of our capacity for the next two quarters, or we'd continue to have reliability issues. I tied debt to business outcomes—"reducing payment failures" rather than "refactoring code." I also identified quick wins we could do alongside feature work: adding integration tests for critical paths, extracting shared utilities. We agreed on a 80/20 split: 80% features, 20% debt. I tracked progress in our sprint reviews.

**Result:** Over two quarters, we reduced incidents by 60% and cut deployment-related rollbacks from 4 to 1 per quarter. We still shipped our committed features. Product appreciated the transparency. I learned that framing debt in business terms and proposing a concrete plan makes it easier to get buy-in—and that small, continuous investment beats big rewrites.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Insist on Highest Standards, Frugality — "How do you balance tech debt and delivery?" |
| Google | Technical depth, long-term thinking |
| Meta | Scale, moving fast, reliability |
| Microsoft | Execution, quality |
| Stripe | Building reliable systems, technical judgment |
| Uber | Building for scale, results orientation |
