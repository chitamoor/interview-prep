# How do you manage dependencies between teams or projects?

## Why This Is Asked

Interviewers want to see that you can identify, track, and mitigate dependency risks. They're looking for proactive coordination, buffer planning, and strategies to reduce coupling when possible.

## Key Points to Cover

- Mapping and visualizing dependencies early
- Regular sync with dependent teams
- Buffer time and contingency plans
- Reducing dependencies through interfaces or ownership changes

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

- Include an example where a dependency caused a delay and how you addressed it
- Show you think about both upstream and downstream dependencies

## Example Response

**Situation:** At a logistics company, my team was building a new routing service that depended on three other teams: the inventory team for stock levels, the orders team for order data, and the shipping team for carrier availability. We had a 10-week timeline. Two weeks in, we learned the inventory API wouldn't be ready until week 8—we'd planned to integrate in week 4. We were blocked.

**Task:** I needed to manage the dependency risk, unblock the team, and avoid a cascade of delays.

**Action:** I mapped all dependencies in a simple matrix: team, deliverable, expected date, and our integration point. I identified the inventory API as the critical path. I met with the inventory tech lead and learned they had a stub we could use for development—we just needed the real API for testing. I proposed we build against the stub, add integration tests that would run against the real API when ready, and do a 2-week integration phase at the end. I also built in a 1-week buffer for the shipping team dependency. I set up biweekly syncs with dependency owners and added dependency status to our sprint reviews so leadership had visibility.

**Result:** We shipped on time. The inventory API landed in week 8 as predicted, and our integration phase went smoothly because we'd prepared. I learned that dependency mapping early and having fallbacks (stubs, buffers) is essential—and that regular syncs prevent surprises.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Deliver Results, Dive Deep — "How do you manage dependencies?" |
| Google | Structuring unclear situations, collaboration |
| Meta | Cross-functional alignment, scale |
| Microsoft | Execution under pressure |
| Stripe | Building reliable systems |
| Uber | Results orientation |
