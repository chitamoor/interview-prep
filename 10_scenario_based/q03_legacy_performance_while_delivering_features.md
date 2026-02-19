# You need to improve the performance of a legacy system while delivering new features. How do you approach this?

## Why This Is Asked

Interviewers want to see how you balance competing demands—keeping the business moving while addressing technical debt and performance. They're assessing your ability to sequence work, make trade-offs, and avoid either neglecting the legacy system or stalling feature delivery.

## Key Points to Cover

- How you assess and prioritize performance work vs. features
- A phased approach: quick wins vs. larger refactors
- How you allocate capacity (e.g., dedicated sprints, percentage of each sprint)
- How you communicate the plan to stakeholders and manage expectations

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

- Propose a concrete strategy: e.g., "20% of each sprint for tech debt" or "one performance sprint per quarter"
- Reference a real example if you have one—this scenario is common and relatable

## Example Response

**Situation:** I led the team responsible for a legacy order management system at an e-commerce company. The system handled 60% of our transaction volume but had grown organically over six years. Page load times had crept to 4–5 seconds, and we were getting customer complaints. At the same time, we had committed to shipping a new checkout flow and several merchant-facing features.

**Task:** I had to balance performance improvements with feature delivery without stalling either.

**Action:** I proposed a split: 20% of each sprint for performance and tech debt, with the remainder for features. I prioritized performance work using impact vs. effort: we identified three "quick wins" (query optimization, caching) that could yield 30–40% improvement with minimal risk. We tackled those first. For larger refactors, we broke them into smaller milestones and scheduled one per quarter. I made the plan visible to product—they could see that we had dedicated capacity and that feature timelines included the performance tax. When we hit a critical merchant deadline, we temporarily shifted to 10% performance for one sprint but committed to a "performance sprint" the following quarter to catch up.

**Result:** We reduced average page load from 4.2s to 2.1s over six months while shipping all planned features. The 20% rule became our default, and we avoided the "legacy death spiral" of only firefighting. I learned that legacy improvement needs explicit allocation—it won't happen by accident.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Deliver Results, Frugality — "How do you improve legacy systems while shipping new work?" |
| Meta | Building for scale |
| Stripe | Reliability, infrastructure |
| Microsoft | Execution |
| Uber | Scale, ownership |
| Apple | Excellence, long-term thinking |
