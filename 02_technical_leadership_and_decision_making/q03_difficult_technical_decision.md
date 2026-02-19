# Can you describe a time when you had to make a difficult technical decision? How did you approach it?

## Why This Is Asked

Interviewers want to see your decision-making process when there's no obvious right answer. They're assessing how you gather information, weigh trade-offs, involve stakeholders, and communicate your rationale.

## Key Points to Cover

- Gathering input from the right people
- Framing trade-offs clearly (cost, risk, timeline, maintainability)
- Making a decision and documenting the rationale
- Revisiting the decision when new information emerges

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

- Choose a decision where there were real trade-offs, not an obvious win
- Show you can admit when a decision didn't pan out and how you adapted

## Example Response

**Situation:** At a healthcare SaaS company, we had to choose a database strategy for a new patient-data platform. We had three options: stick with our existing PostgreSQL and scale vertically, migrate to a distributed SQL solution like CockroachDB, or adopt a polyglot approach (Postgres for transactional, Cassandra for time-series). Each had trade-offs—cost, operational complexity, team expertise, and migration risk. There was no clear winner, and the team was split.

**Task:** I had to make a decision with incomplete information, document the rationale, and get the team to commit even though not everyone agreed.

**Action:** I ran a two-week evaluation: we built small prototypes for each option and measured latency, throughput, and operational overhead. I created a decision matrix with criteria (performance, cost, ops burden, team readiness) and weights. I also consulted our platform team and our CTO for input. The data pointed to starting with scaled PostgreSQL and planning a future migration path—we weren't at the scale yet to justify distributed SQL, and the team knew Postgres. I wrote an ADR (Architecture Decision Record) documenting the decision, alternatives considered, and the criteria for revisiting. I presented it to the team, acknowledged the dissent, and asked everyone to commit.

**Result:** We shipped on time. A year later, we hit scaling limits and migrated to CockroachDB—as we'd planned. The ADR made the transition smooth because we'd already documented the trigger. I learned that hard decisions benefit from structure, and that documenting "when we'll revisit" reduces second-guessing.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Are Right a Lot, Dive Deep — "Tell me about a difficult technical decision" |
| Google | Technical depth, structuring unclear situations |
| Meta | Scale, cross-functional decision-making |
| Microsoft | Execution under pressure, growth mindset |
| Stripe | Technical judgment, moving fast in ambiguity |
| Apple | Excellence, long-term thinking |
