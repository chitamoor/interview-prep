# How do you handle situations where the team is divided on a technical approach?

## Why This Is Asked

Interviewers want to see that you can facilitate healthy debate and reach a decision without damaging team dynamics. They're assessing your ability to listen, synthesize, and make a call when consensus isn't possible.

## Key Points to Cover

- Creating space for each perspective to be heard
- Identifying the real points of disagreement
- Using data, prototypes, or time-boxed experiments when helpful
- Making a decision and ensuring everyone commits to it

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

- Show you value dissent—disagreement can improve outcomes
- Emphasize "disagree and commit" once a decision is made

## Example Response

**Situation:** At a payments company, we had to choose how to handle idempotency for our new API. Half the team wanted a database-backed approach (store request IDs, check before processing). The other half wanted a distributed cache (Redis) for speed. Both had merit—DB was simpler and more durable, Redis was faster but added operational complexity. The debate had gotten personal, and we were blocking progress.

**Task:** I needed to facilitate a decision, ensure both sides felt heard, and get everyone to commit to the outcome.

**Action:** I ran a structured debate: each side had 15 minutes to present their case with pros, cons, and risks. I asked clarifying questions to surface the real disagreement—it turned out to be about operational burden, not the core design. I proposed a time-boxed spike: one week to prototype each approach and measure latency, failure modes, and ops overhead. We ran the spike, and the data showed Redis was 3x faster but added a new dependency; DB was sufficient for our current scale. I made the call: we'd start with DB for simplicity, with a documented path to Redis if we hit scale limits. I asked everyone to commit to the decision and to revisit in 6 months. I documented the decision in an ADR.

**Result:** We shipped on time. The DB approach worked for 18 months before we needed to optimize. The team appreciated that their views were heard and that we used data to decide. I learned that "disagree and commit" works when people feel the process was fair—even if they didn't get their way.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Have Backbone Disagree & Commit — "Tell me about a time the team disagreed on an approach" |
| Google | Collaboration, structuring unclear situations |
| Meta | Cross-functional alignment, making hard calls |
| Microsoft | Candid feedback, growth mindset |
| Netflix | Judgment, candor, acting in company's best interest |
| Stripe | Technical judgment, cross-functional work |
