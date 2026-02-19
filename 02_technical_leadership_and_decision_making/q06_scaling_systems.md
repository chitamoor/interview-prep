# What's your experience with scaling systems, and how have you approached it in the past?

## Why This Is Asked

Interviewers want to see that you understand the challenges of growth—whether in traffic, data, or complexity. They're looking for practical experience with bottlenecks, horizontal vs. vertical scaling, and trade-offs between simplicity and scale.

## Key Points to Cover

- Identifying bottlenecks (profiling, monitoring, load testing)
- Scaling strategies (caching, async, sharding, read replicas)
- Balancing over-engineering vs. under-preparation
- Learning from incidents and iterating

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

- Use metrics (latency, throughput, error rate) to quantify the problem and solution
- Show you consider cost and operational complexity, not just technical elegance

## Example Response

**Situation:** At a social gaming company, our matchmaking service was struggling under load. We'd grown from 10K to 500K daily active users in six months. P99 latency had gone from 80ms to 800ms, and we'd had two outages during peak hours. The database was the bottleneck—we were hitting connection limits and CPU saturation.

**Task:** I led the effort to scale the system to support 2M DAU without a full rewrite, while maintaining reliability and controlling cost.

**Action:** I started with profiling: we identified that 70% of our DB load was from a few hot queries. We added read replicas and moved read-heavy paths to them—that alone cut primary DB load by 40%. We introduced Redis for session and match-state caching, which reduced DB hits by another 30%. We also implemented connection pooling and query optimization. For the matchmaking logic itself, we sharded by region to distribute load. I set up load testing to validate our changes before each release. We considered a full microservices split but decided it was overkill—targeted optimizations got us there faster and cheaper.

**Result:** We supported 2M DAU with p99 latency back under 100ms. We avoided a costly rewrite. Monthly infra cost increased 25% instead of the 3x we'd feared. I learned that scaling is often about finding the bottleneck and fixing it—not about the most elegant architecture.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Dive Deep, Frugality — "How have you scaled a system?" |
| Google | Technical depth, scale |
| Meta | Scale, impact at scale |
| Microsoft | Execution, technical excellence |
| Uber | Building for scale, results orientation |
| Stripe | Building reliable systems |
