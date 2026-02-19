# How do you prioritize features vs. infrastructure investments?

## Why This Is Asked

Interviewers want to see that you understand both short-term delivery and long-term sustainability. They're assessing your ability to balance visible customer value with the invisible work that keeps systems reliable, scalable, and maintainable.

## Key Points to Cover

- A framework or criteria for balancing features and infrastructure
- How you make the case for infrastructure work to stakeholders
- How you decide when infrastructure debt must be addressed
- Examples of both feature-heavy and infrastructure-heavy periods

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

- Avoid the extremes: neither "we always prioritize features" nor "we always do infrastructure first"
- Reference a specific ratio or rule of thumb if you use one (e.g., 70/30, or "one infra sprint per quarter")

## Example Response

**Situation:** I managed the backend team at a B2B platform. We had grown quickly, and our infrastructure was showing strain—deployments were slow, monitoring had gaps, and we'd had two incidents in as many months. At the same time, sales had committed to several feature deliverables for enterprise customers. The tension between "ship features" and "fix the foundation" was constant.

**Task:** I had to establish a sustainable balance between feature delivery and infrastructure investment, and make the case for infra work to stakeholders who only saw customer-facing output.

**Action:** I proposed a 70/30 rule: roughly 70% of capacity for features and customer work, 30% for infrastructure, reliability, and tech debt. I created a simple "infra backlog" with items tagged by risk and impact, and we allocated one engineer per sprint to infra by default. For stakeholder communication, I framed infra work in business terms: "This observability investment will reduce mean-time-to-detect from hours to minutes, which directly reduces customer-impacting outage duration." When we had a critical customer deadline, we temporarily shifted to 85/15, but we committed to a "catch-up" infra sprint the following quarter. I tracked both feature velocity and reliability metrics (MTTR, deployment frequency) so we could show that infra investment didn't kill delivery—it improved it over time.

**Result:** Over two quarters, we reduced MTTR by 40% and cut deployment time in half. We still hit our feature commitments. The 70/30 rule became a shared expectation, and product learned to plan around it. I learned that infrastructure work needs a visible allocation and business framing—otherwise it gets starved.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Frugality, Think Big — "How do you balance building new things vs. maintaining what exists?" |
| Stripe | Infrastructure investment, reliability |
| Meta | Building for scale |
| Microsoft | Execution |
| Uber | Scale, ownership |
| Apple | Long-term thinking, craft |
