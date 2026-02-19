# What's your approach to phased rollouts vs. big-bang changes?

## Why This Is Asked

Interviewers want to see your judgment on risk and delivery strategy—when to phase changes for safety vs. when a coordinated cutover makes sense. They're assessing your ability to weigh trade-offs and choose the right approach for the context.

## Key Points to Cover

- When you prefer phased (reduced risk, learn and adapt, rollback easier)
- When big-bang might be necessary (dependencies, data consistency, coordination complexity)
- How you mitigate risk in either approach
- A concrete example of each

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

- Default to phased when possible—it's usually lower risk
- Acknowledge that sometimes big-bang is unavoidable; the key is having a solid rollback plan

## Example Response

**Situation:** At a payments company, we had to migrate our billing system to a new platform. The old system handled subscriptions for 2M customers; the new one had to support the same data model and APIs. We had a hard deadline—our vendor was sunsetting the legacy system in 14 months. The question was: phased migration by customer segment or a single cutover weekend?

**Task:** I was the engineering lead responsible for recommending the approach and then executing it. I had to weigh risk, complexity, and business constraints.

**Action:** I led an analysis of both options. Phased meant running two systems in parallel, dual-writes, and eventual cutover—more engineering work but lower risk. Big-bang meant one coordinated weekend with a full rollback plan—simpler technically but all-or-nothing. We had strong dependencies: billing tied to auth, entitlements, and reporting. A partial cutover would require those systems to support both old and new billing for months. I recommended phased by customer segment: we'd migrate enterprise customers first (smaller volume, more forgiving), then SMB, then consumer. Each phase had a 2-week validation window before we moved to the next. We built feature flags and a rollback script that could revert a segment in under 30 minutes. For our auth migration the year before, we'd done big-bang because the systems were tightly coupled and a phased approach would have doubled the timeline—there we invested heavily in rehearsals and a 4-hour rollback window.

**Result:** We completed the billing migration in 12 months with zero revenue-impacting incidents. One phase had a data sync issue; we rolled back in 20 minutes and fixed it before re-running. I learned that the right choice depends on coupling and timeline—phased when you can afford the complexity, big-bang when dependencies make it impractical, but always with a tested rollback plan.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Deliver Results, Bias for Action — "Tell me about a time you made a trade-off under pressure" |
| Google | Navigating ambiguity, technical judgment |
| Meta | Moving fast, risk management |
| Microsoft | Execution, customer focus |
| Stripe | Technical growth, autonomy in complex rollouts |
| Uber | Ownership culture, scaling systems |
