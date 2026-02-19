# How do you run post-mortems and incident reviews? How do you ensure follow-through on action items?

## Why This Is Asked

Interviewers want to see that you treat incidents as learning opportunities. They're looking for a blameless process, root cause analysis, and a system to ensure action items actually get done—not just documented and forgotten.

## Key Points to Cover

- Blameless culture and psychological safety
- Structured format (timeline, root cause, contributing factors)
- Action items with owners and deadlines
- Tracking and closing out follow-up items

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

- Reference a specific incident (without naming individuals) and what changed as a result
- Emphasize blamelessness—focus on systems, not people

## Example Response

**Situation:** At a SaaS company, we had a 4-hour outage that affected 15% of our customers. Our payment service went down due to a database connection pool exhaustion—a deployment had changed the connection settings. The team was stressed, and there was finger-pointing. Leadership wanted to understand what happened and how we'd prevent recurrence.

**Task:** I needed to run a blameless post-mortem, identify root cause and contributing factors, and ensure action items were actually completed.

**Action:** I scheduled the post-mortem within 48 hours, when memories were fresh. I set ground rules: blameless, focus on systems and process, not individuals. I used a structured format: timeline of events, root cause (Five Whys), contributing factors, and action items with owners and dates. We identified that our pre-deploy checks didn't validate connection pool config, our staging environment didn't match production, and we lacked circuit breakers. I assigned owners: one engineer for the pre-deploy check, another for the staging parity, and I took the circuit breaker work. I created a tracking doc and added post-mortem follow-up to our weekly sync. I shared a sanitized summary with leadership.

**Result:** All action items were completed within 4 weeks. We had no similar incidents in the following year. The team felt the process was fair and that we'd learned. I learned that post-mortems only work when action items are tracked and closed—otherwise they're just documentation.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Dive Deep, Insist on Highest Standards — "How do you run post-mortems?" |
| Google | Learning, structured thinking |
| Meta | Scale, reliability |
| Microsoft | Execution, growth mindset |
| Stripe | Building reliable systems |
| Netflix | Candor, high performance |
