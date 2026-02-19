# Describe a time when you made a technical compromise to meet a business deadline.

## Why This Is Asked

Interviewers want to see that you can make difficult trade-offs under pressure and that you do so thoughtfully—documenting the compromise, planning remediation, and learning from the outcome. They're checking that you're not rigid or perfectionist to the point of blocking delivery.

## Key Points to Cover

- The specific compromise and why it was necessary
- How you communicated the trade-off to stakeholders and the team
- Whether you documented technical debt or created a follow-up plan
- What happened afterward—did you remediate? What did you learn?

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

- Choose an example where the compromise was justified and the outcome was acceptable—avoid stories where it backfired badly
- Emphasize that you tracked the debt and addressed it later if applicable

## Example Response

**Situation:** At a SaaS company, we had committed to launching a new API for enterprise customers by the end of Q2. The contract had a hard deadline tied to a large deal. With six weeks left, we discovered that our planned authentication approach wouldn't scale to the customer's SSO requirements. A proper implementation would take four to five weeks; we had six for the entire integration.

**Task:** I was the engineering manager for the API team. I had to decide whether to push for a delay—risking the deal—or ship a compromise that we could remediate later.

**Action:** I convened a quick assessment with the tech lead and architect. We identified a shortcut: we could ship OAuth2 with a limited set of identity providers first, then add full SAML/SSO support in a follow-up release. I documented the compromise in an ADR: what we were shipping, what we were deferring, and the remediation plan with a target date. I presented this to the customer success and sales leads, explaining the trade-off and the 30-day follow-up commitment. They agreed. We also added the technical debt to our backlog with a "must fix" label and assigned an owner.

**Result:** We shipped on time, the deal closed, and we delivered the full SSO support 28 days later. The customer was satisfied. I learned that compromises are acceptable when they're transparent, documented, and have a clear remediation path—and when stakeholders explicitly accept the trade-off.

## Companies Known to Ask This

| Company | Variation / Focus |
|---------|------------------|
| Amazon | Deliver Results, Bias for Action — "Tell me about a time you had to make a trade-off under pressure" |
| Meta | Moving fast, making hard calls |
| Netflix | Making decisions with incomplete info |
| Microsoft | Execution, customer focus |
| Stripe | Reliability, technical judgment |
| Uber | Results, ownership |
