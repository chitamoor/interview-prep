# What's your approach to risk identification and mitigation in projects?

## Why This Is Asked

Interviewers want to see that you think ahead about what could go wrong. They're looking for proactive identification of technical, schedule, and dependency risks—and concrete mitigation or contingency plans.

## Key Points to Cover

- When and how you identify risks (kickoff, planning, ongoing)
- Categorizing and prioritizing risks (likelihood × impact)
- Mitigation vs. contingency strategies
- Making risks visible to stakeholders

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

- Use an example where you identified a risk early and mitigated it—or where one materialized and you responded
- Show you don't just list risks; you take action on them

## Example Response

**Situation:** At a fintech startup, we were building a new KYC (Know Your Customer) integration with a third-party provider. The project had a hard deadline—regulatory requirement. I led the technical effort. During kickoff, I ran a risk assessment and identified several concerns: the vendor's API had limited documentation, we had no fallback if they had an outage, and our team had no prior experience with their system.

**Task:** I needed to identify risks proactively, prioritize them, and put mitigation and contingency plans in place.

**Action:** I created a risk register with likelihood, impact, and mitigation for each item. For the API documentation gap, I scheduled a technical kickoff with the vendor and documented the integration flow—we discovered several edge cases we'd have missed. For the vendor outage risk, I designed a graceful degradation path: we'd queue requests and retry, and we'd show users a clear status. For the team's lack of experience, I arranged for a 2-day workshop with the vendor and built a small proof-of-concept before the main build. I shared the risk register with leadership and set up biweekly risk reviews. When the vendor had a 4-hour outage during our UAT, our queue-and-retry design meant we had zero data loss.

**Result:** We shipped on time and passed the regulatory audit. The outage would have been critical without our contingency. I learned that risk identification isn't a one-time exercise—it needs to be ongoing, and mitigation plans need to be real, not just documented.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Dive Deep, Deliver Results — "How do you identify and mitigate risks?" |
| Google | Structuring unclear situations |
| Meta | Scale, execution |
| Microsoft | Execution under pressure |
| Stripe | Building reliable systems |
| Uber | Results orientation |
