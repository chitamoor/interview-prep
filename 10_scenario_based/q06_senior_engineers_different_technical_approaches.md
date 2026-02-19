# Two of your senior engineers want to take completely different technical approaches to a critical project. How do you handle this?

## Why This Is Asked

Interviewers want to see how you resolve technical disagreements without damaging relationships or stalling progress. They're assessing your ability to facilitate debate, make a decision, and get buy-in—even from the person whose approach wasn't chosen.

## Key Points to Cover

- Creating a structured debate: criteria, trade-offs, evidence (spikes, prototypes)
- Involving both engineers in the evaluation process
- Making a clear decision with rationale
- Ensuring the "losing" party feels heard and can commit to the chosen approach

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

- Avoid "I'd just pick one" or "I'd let them fight it out"—show a process
- Emphasize that both perspectives have value and that the goal is the best outcome, not winning an argument

## Example Response

**Situation:** We were designing a new event-driven architecture for our order processing system. Two senior engineers had fundamentally different views: one advocated for Kafka with a fully async model; the other for a simpler queue-based approach with synchronous critical path. Both were respected, and the team was splitting along their lines. We had to make a decision in two weeks to stay on our roadmap.

**Task:** I had to facilitate a structured debate, make a clear decision, and ensure both engineers could commit to the outcome.

**Action:** I set up a decision process. I defined criteria: latency requirements, operational complexity, team familiarity, and time-to-delivery. I asked each engineer to write a one-pager with their proposal, trade-offs, and risks. We then held a 90-minute architecture review where each presented and the other could challenge. I invited the tech lead and a principal from another team as a tie-breaker. We also ran a two-day spike: each approach was prototyped for the core flow so we had data, not just opinions. After the spike, the Kafka approach showed better fit for our scale projections, but the queue advocate had valid concerns about operational overhead. I made the decision: we'd go with Kafka, but we'd adopt the simpler engineer's monitoring and runbook ideas. I met 1:1 with the "losing" engineer, acknowledged his contributions, and asked him to lead the operational design—giving him ownership in the chosen direction.

**Result:** We shipped on time. Both engineers remained engaged. The one whose approach wasn't chosen later said the process felt fair. I learned that technical disagreements need structure—criteria, evidence, and a clear decision—and that the "losing" party needs to feel heard and have a role in the outcome.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Have Backbone, Disagree & Commit — "Two senior engineers disagree on approach. How do you handle it?" |
| Google | Collaboration, navigating ambiguity |
| Meta | Making hard calls, cross-functional alignment |
| Stripe | Technical judgment |
| Microsoft | Collaboration, growth mindset |
| Netflix | Judgment, disagree and commit |
