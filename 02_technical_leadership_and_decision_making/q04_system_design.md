# What's your experience with system design? Can you walk us through a system you designed or improved?

## Why This Is Asked

Interviewers want to assess your ability to design scalable, maintainable systems. They're looking for structured thinking, consideration of trade-offs, and awareness of non-functional requirements (performance, reliability, security).

## Key Points to Cover

- Understanding requirements and constraints
- Breaking down the problem into components
- Considering scalability, reliability, and failure modes
- Iterating based on feedback and real-world usage

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

- Prepare 1–2 systems you can walk through in detail (components, data flow, key decisions)
- Be ready to discuss what you'd do differently with hindsight

## Example Response

**Situation:** At an ad-tech company, I led the design of a real-time bidding system that had to handle 100K requests per second with sub-50ms latency. The existing system was a single-region monolith that couldn't scale. We had to redesign for global latency, fault tolerance, and cost efficiency.

**Task:** I was responsible for the end-to-end architecture—from requirements gathering through implementation—and ensuring we considered scalability, reliability, and failure modes.

**Action:** I started by defining non-functional requirements with product and ops: p99 latency, availability target, and cost constraints. I broke the system into components: API gateway, bidding engine, data pipeline, and cache layer. I chose an event-driven design with Kafka for the pipeline to decouple components and allow horizontal scaling. I designed for failure: circuit breakers, graceful degradation, and multi-region deployment. I ran a design review with senior engineers and incorporated feedback. We implemented in phases—first the core path, then the resilience features. I documented the architecture in Confluence and kept it updated as we learned.

**Result:** We launched the new system and achieved 45ms p99 latency at 120K RPS. We had one major incident in the first month—a cache stampede—which we fixed with better caching strategy. With hindsight, I'd have invested earlier in observability; we added it reactively. I learned that system design is iterative and that failure-mode thinking upfront saves pain later.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Dive Deep, Invent & Simplify — "Walk me through a system you designed" |
| Google | Technical depth, scalability, structured thinking |
| Meta | Scale, impact at scale |
| Microsoft | Technical excellence, execution |
| Stripe | Building reliable systems, technical judgment |
| Uber | Building for scale, technical depth |
