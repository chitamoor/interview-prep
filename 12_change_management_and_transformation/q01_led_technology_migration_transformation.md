# How have you led a major technology migration or platform transformation?

## Why This Is Asked

Interviewers want to see your ability to plan and execute large-scale technical change—managing risk, coordinating teams, and delivering value throughout. They're assessing your experience with migrations, refactors, or platform shifts and how you kept the business running during the transition.

## Key Points to Cover

- Clear vision and phased plan (strangler pattern, parallel run, etc.)
- Risk management and rollback strategies
- How you kept stakeholders informed and the business operational
- Team coordination and skill-building for the new technology

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

- Reference a specific migration pattern or strategy (e.g., strangler fig, blue-green, canary)
- Include metrics: timeline, downtime, adoption rate, or performance improvement

## Example Response

**Situation:** At a mid-size fintech, our core payments platform ran on a legacy monolith that couldn't scale beyond 500 TPS. We had 12 engineers across two teams, and the business was growing 40% YoY. Leadership wanted to move to a microservices architecture on Kubernetes, but we couldn't afford downtime—every minute of outage cost roughly $50K in lost transactions.

**Task:** I was the engineering manager responsible for planning and executing the migration. My job was to deliver the new platform without disrupting production, coordinate both teams, and keep stakeholders informed throughout an 18-month effort.

**Action:** I led a discovery phase where we mapped dependencies and chose a strangler-fig approach—routing new traffic to new services while gradually migrating existing flows. We ran parallel systems for six months, with feature flags controlling traffic percentage. I established a weekly migration review with product and ops, created runbooks for rollback, and ran tabletop exercises so everyone knew their role if something failed. I also pushed for dedicated training: we sent four engineers to a Kubernetes certification and set up internal brown bags so the whole team could contribute. We phased by domain—payments first, then fraud, then reporting—and each phase had clear success criteria before we moved on.

**Result:** We completed the migration in 16 months with zero customer-facing incidents. Latency dropped 35%, and we now handle 2,000+ TPS. The team retained all 12 engineers and two were promoted. I learned that over-communicating the "why" and giving people time to skill up was as important as the technical plan—resistance faded when engineers felt ownership of the new architecture.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Ownership — "Tell me about a time you owned a major technical initiative" |
| Google | Navigating ambiguity, technical leadership |
| Meta | Moving fast while managing risk, cross-functional alignment |
| Microsoft | Execution, customer focus during transformation |
| Stripe | Technical growth, autonomy in complex migrations |
| Uber | Ownership culture, scaling systems |
