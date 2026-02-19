# Describe a time when you took a calculated risk. What was the outcome?

## Why This Is Asked

Interviewers want to see that you can take thoughtful risks when the situation warrants it—not recklessness, but informed boldness. They're assessing your judgment, ability to weigh trade-offs, and willingness to own the outcome whether it succeeds or fails.

## Key Points to Cover

- What the risk was and why you considered it calculated (not reckless)
- How you assessed the upside, downside, and mitigation options
- Who you consulted or informed before taking the risk
- The outcome and what you learned

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

- "Calculated" means you had a rationale—explain your thinking
- A risk that paid off is fine, but a risk that didn't work out (with lessons learned) can be equally compelling
- Show that you considered the impact on others, not just yourself

## Example Response

**Situation:** We had a critical production incident—our primary database was failing. The standard playbook was to fail over to the replica, which took 30 minutes and had data loss risk. I had a hypothesis: we could do a faster, lower-risk recovery by restoring from a specific backup and replaying WAL logs. It was untested in production.

**Task:** I was the incident commander. I had to decide: follow the playbook or try the riskier but potentially better approach.

**Action:** I assessed quickly: upside was 15 minutes faster recovery and no data loss; downside was we could make things worse. I had our DBA on the call—she thought it would work. I set a 10-minute decision window: if we couldn't validate the approach in 10 minutes, we'd do the standard failover. I informed leadership: "We're trying a faster path; we have a fallback." We validated the backup integrity and went ahead. I had the team document every step in case we needed to roll back. The recovery worked—we were back up in 12 minutes with zero data loss.

**Result:** We updated our runbook with the new procedure. I learned that calculated risk means understanding upside, downside, mitigation, and having a clear fallback. It also means communicating so others aren't blindsided.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Bias for Action, Are Right a Lot — "Tell me about a calculated risk you took" |
| Google | Innovation, navigating ambiguity |
| Meta | Moving fast, impact at scale |
| Microsoft | Growth mindset, execution |
| Netflix | Judgment, high performance |
| Stripe | Technical judgment, moving fast |
