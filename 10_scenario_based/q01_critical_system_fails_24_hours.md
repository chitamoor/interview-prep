# You find out that a critical system your team is responsible for will fail in 24 hours. What do you do?

## Why This Is Asked

Interviewers want to see your crisis management approach—how you triage, communicate, and execute under pressure. They're assessing your ability to stay calm, prioritize, and coordinate across stakeholders while working toward a resolution.

## Key Points to Cover

- Immediate triage: assess impact, root cause, and options (fix, mitigate, workaround)
- Communication: notify stakeholders, set expectations, provide updates
- Resource allocation: who does what, escalation paths
- Post-incident: documentation, blameless review, prevention

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

- Walk through your steps in a logical order: assess → communicate → execute → follow-up
- For hypotheticals, you can say "Here's how I would approach it" and then use a past incident as a concrete example
- Emphasize communication and stakeholder management—not just technical firefighting

## Example Response

**Situation:** At a payments company, our certificate rotation system had a bug that would cause our production TLS certs to expire in 24 hours. I was the engineering manager for the platform team. If the certs expired, all API traffic would fail—affecting thousands of merchants and millions in daily transaction volume.

**Task:** I was responsible for coordinating the response: triaging the issue, mobilizing the right people, and ensuring we fixed or mitigated before the deadline.

**Action:** Within 30 minutes of learning about it, I convened a war room with the on-call engineer, our security lead, and the tech lead. We assessed: the automated rotation had failed due to a config change; we had three options—fix the automation, manually rotate, or temporarily extend the existing cert. I assigned the tech lead to evaluate the manual rotation path (fastest) and the on-call to investigate the automation fix. I immediately notified our VP of Engineering, customer success, and our status page owner. I sent a brief Slack update every hour with progress. We decided manual rotation was the safest path; we executed it in a staged way across regions. I documented every step for the post-incident review.

**Result:** We completed the rotation with 4 hours to spare. Zero customer impact. We ran a blameless postmortem, fixed the automation, and added cert expiry to our monitoring dashboards. I learned that in a crisis, clear roles, frequent updates, and parallel workstreams (fix + communicate) are essential.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Ownership, Deliver Results — "A critical system will fail in 24 hours. What do you do?" |
| Google | Navigating ambiguity, impact at scale |
| Meta | Moving fast, making hard calls |
| Stripe | Reliability, technical judgment |
| Uber | Ownership, results |
| Microsoft | Execution |
