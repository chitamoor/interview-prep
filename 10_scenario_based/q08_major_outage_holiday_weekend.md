# Your team's main product has a major outage during a holiday weekend. Walk me through your response.

## Why This Is Asked

Interviewers want to see your incident response approach when stakes are high and resources may be limited. They're assessing your ability to triage, communicate, coordinate, and support the team—especially when people may be off or hard to reach.

## Key Points to Cover

- Immediate assessment: severity, impact, who's available
- Communication: status page, stakeholder updates, internal coordination
- Execution: triage, fix or mitigate, escalate if needed
- Team support: avoid burnout, rotate if possible, acknowledge the sacrifice
- Post-incident: review, documentation, prevention

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

- Walk through chronologically: first 30 min, first hour, first few hours
- Emphasize customer communication and team care—not just technical resolution
- If you have a real example, use it; otherwise, a clear hypothetical walkthrough is fine

## Example Response

**Situation:** On the Saturday of Memorial Day weekend, our main product—a SaaS platform used by thousands of SMBs—went down. Our database primary failed and the failover didn't trigger correctly. I was the engineering manager on call. Several team members were traveling or offline. Customer support was getting flooded, and our status page was still green.

**Task:** I had to coordinate the response: assess severity, communicate, mobilize resources, and support the team—all while many people were unavailable.

**Action:** Within 15 minutes of the first alert, I confirmed the severity and updated our status page to "Investigating." I reached out to the on-call engineer and our DBA—both were reachable. I created a war room channel and pulled in whoever was available. In the first 30 minutes, we established that the DB failover had failed; we needed to manually promote a replica. I delegated: the DBA would execute the failover, the on-call would monitor application health. I sent a brief update to our VP, customer success, and support leads every 30 minutes. I also asked our support lead to post a customer-facing message with our best ETA. We completed the failover in about 90 minutes. Once we were stable, I made sure we had coverage for the next 24 hours—I didn't want one person carrying the load. I thanked everyone who had joined and offered to cover for anyone who had to miss family plans.

**Result:** We restored service in under 2 hours. We ran a blameless postmortem the following week and fixed the failover automation. I learned that holiday outages require extra attention to communication (customers and internal) and to team care—people sacrifice their time; acknowledging that matters.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Ownership, Customer Obsession — "Major outage on a holiday weekend. Walk me through your response." |
| Stripe | Reliability |
| Meta | Moving fast, shipping impact |
| Uber | Ownership, results |
| Microsoft | Execution |
| Lyft | Mission-driven, safety |
