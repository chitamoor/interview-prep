# How do you evaluate build vs. buy decisions for your team or organization?

## Why This Is Asked

Interviewers want to see that you make pragmatic choices about where to invest engineering time. They're looking for a structured evaluation of cost, fit, vendor risk, and strategic importance—not a default to "we'll build it."

## Key Points to Cover

- Defining requirements and success criteria
- Evaluating total cost of ownership (license, integration, maintenance)
- Considering vendor lock-in, support, and roadmap
- Knowing when custom build is justified (differentiation, control)

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

- Give a concrete example of a build vs. buy decision you made
- Show you consider long-term maintenance, not just initial implementation

## Example Response

**Situation:** At a logistics company, we needed a workflow orchestration solution for our fulfillment pipeline—order processing, inventory updates, shipping integrations. We could build it ourselves or evaluate vendors like Temporal, Camunda, or a managed service. The team was split: some wanted to build for full control, others wanted to buy to move faster.

**Task:** I had to run a structured evaluation and make a recommendation that balanced cost, fit, risk, and strategic value.

**Action:** I defined requirements: support for long-running workflows, retries, observability, and our scale (10K workflows/day). I created an evaluation matrix: initial cost, TCO over 3 years, vendor lock-in risk, team ramp time, and fit with our stack. We ran 2-week spikes on building a minimal version vs. integrating Temporal. The build would take 3–4 months and require ongoing maintenance; Temporal fit 90% of our needs and had a strong community. I also considered vendor risk: Temporal was open-source, so we could self-host if needed. I presented the analysis to leadership with a recommendation to buy (Temporal), and we got approval.

**Result:** We integrated Temporal in 6 weeks and had workflows running in production within 2 months. We avoided 3+ months of build time and ongoing maintenance burden. Two years later, we've scaled to 100K workflows/day with minimal issues. I learned that build vs. buy is rarely black-and-white—the key is honest evaluation of TCO and strategic differentiation.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Frugality, Invent & Simplify — "How do you evaluate build vs. buy?" |
| Google | Technical judgment, innovation |
| Meta | Moving fast, scale |
| Microsoft | Customer focus, execution |
| Stripe | Technical judgment, building reliable systems |
| Uber | Entrepreneurship, ownership |
