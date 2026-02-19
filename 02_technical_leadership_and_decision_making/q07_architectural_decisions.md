# How do you drive architectural decisions in a large organization with multiple teams?

## Why This Is Asked

Interviewers want to see that you can influence beyond your immediate team. They're assessing your ability to build consensus, document decisions, and navigate organizational politics while advancing sound technical direction.

## Key Points to Cover

- Building alignment through RFCs, ADRs, or design docs
- Involving the right stakeholders early
- Balancing centralization vs. team autonomy
- Creating durable documentation and decision records

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

- Reference ADRs (Architecture Decision Records) or similar if you use them
- Include an example where you had to compromise or iterate based on feedback

## Example Response

**Situation:** At a large enterprise, I led an initiative to standardize our event-driven architecture across six engineering teams. Each team had built their own patterns—different message brokers, inconsistent schemas, no shared contracts. We needed alignment to enable cross-team workflows and reduce operational fragmentation, but teams were protective of their autonomy.

**Task:** I had to drive architectural decisions that would work across teams while building consensus and avoiding top-down mandates.

**Action:** I formed a cross-team working group with one representative per team. We ran a series of workshops to identify pain points and requirements. I drafted an RFC (Request for Comments) proposing a standard: Kafka as the message broker, Avro for schemas, and a shared registry. I circulated it for feedback and incorporated concerns—one team needed a different retention policy, so we added configuration for that. I documented decisions in ADRs so future teams could understand the rationale. I also proposed a phased rollout: new services first, existing services as they touched the domain. I presented to engineering leadership and got buy-in before we started.

**Result:** Within a year, five of six teams had adopted the standard. The sixth migrated when they had capacity. We reduced integration bugs by 40% and cut time-to-onboard for new services. I learned that architectural decisions in large orgs require patience, inclusion, and documentation—mandates create resistance; collaboration creates adoption.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Invent & Simplify, Earn Trust — "How do you drive technical decisions across teams?" |
| Google | Collaboration, influence beyond your team |
| Meta | Cross-functional alignment, scale |
| Microsoft | Collaboration, execution |
| Stripe | Cross-functional work, technical judgment |
| LinkedIn | Collaboration, professional growth |
