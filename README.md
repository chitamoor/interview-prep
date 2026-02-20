# Behavioral Interview Preparation Guide

A comprehensive collection of behavioral interview questions organized by category, with STAR method answer templates for engineering management and technical leadership roles.

## How to Use This Guide

1. Browse categories that are relevant to your upcoming interview
2. Review the questions in each category's `questions.md`
3. Open individual Q&A files to prepare your answers using the STAR method
4. Practice your answers out loud, focusing on specific examples from your experience

## Tips for Answering Behavioral Questions

- **Use the STAR Method**: Structure responses with Situation, Task, Action, and Result
- **Show Your Leadership Philosophy**: Highlight how you empower your team, foster collaboration, and align engineering with business goals
- **Be Data-Driven**: Emphasize how you use metrics and data to make decisions and track success
- **Highlight Impact**: Focus on outcomes and value delivered, not just processes followed
- **Be Specific**: Use concrete examples with real numbers and outcomes
- **Be Authentic**: Draw from genuine experiences — interviewers can tell when stories are fabricated

## Categories

| # | Category | Questions | Description |
|---|----------|-----------|-------------|
| 1 | [Leadership and Management](./01_leadership_and_management/) | 11 | Leading teams, delegation, motivation, and performance management |
| 2 | [Technical Leadership and Decision-Making](./02_technical_leadership_and_decision_making/) | 10 | Technical decisions, architecture, code quality, and scaling |
| 3 | [Process and Project Management](./03_process_and_project_management/) | 10 | Development methodologies, delivery, risk management |
| 4 | [Hiring and Team Building](./04_hiring_and_team_building/) | 9 | Recruiting, onboarding, retention, team culture |
| 5 | [Metrics and Performance Measurement](./05_metrics_and_performance_measurement/) | 8 | Engineering metrics, performance tracking, reporting |
| 6 | [Behavioral and Situational](./06_behavioral_and_situational/) | 10 | Real-world challenges, past experiences, decision-making |
| 7 | [Culture and Values](./07_culture_and_values/) | 8 | Management style, psychological safety, innovation |
| 8 | [Conflict Resolution](./08_conflict_resolution/) | 7 | Team conflicts, stakeholder disagreements, mediation |
| 9 | [Customer and Business Focus](./09_customer_and_business_focus/) | 7 | Business alignment, customer impact, technical trade-offs |
| 10 | [Scenario-Based Questions](./10_scenario_based/) | 8 | Hypothetical challenges and crisis management |
| 11 | [Communication and Influence](./11_communication_and_influence/) | 7 | Cross-functional communication, influencing without authority |
| 12 | [Change Management and Transformation](./12_change_management_and_transformation/) | 7 | Leading change, migrations, organizational transformation |
| 13 | [Remote and Distributed Teams](./13_remote_and_distributed_teams/) | 7 | Managing remote/hybrid teams, async collaboration |
| 14 | [Mentorship and Career Development](./14_mentorship_and_career_development/) | 8 | Career growth, coaching, leadership development |

**Total: 127 questions across 14 categories**

## Structure

Each category folder contains:
- `questions.md` — Full list of questions with category description
- `q##_short_name.md` — Individual Q&A files with STAR method templates

---

## Contributing

Contributions are welcome! Whether it's fixing a typo, improving an example response, or adding a new question — all help is appreciated.

### How to contribute

1. Fork this repository
2. Create a branch: `git checkout -b add/my-question`
3. Make your changes (see guidelines below)
4. Open a Pull Request with a clear description

### Content guidelines

- Follow the existing question file format (Why Asked → Key Points → STAR Template → Tips → Example Response → Companies Known to Ask This)
- Keep example responses realistic and role-appropriate for engineering management / technical leadership
- Cite sources where possible for the "Companies Known to Ask This" section
- One question per file, named `q##_short_description.md`

### Adding your own personal responses

Each question file has a companion `*_response.md` file for your own private answers. These are excluded from git by default via `.gitignore` — they will never be committed to the repo.

To use them:
1. Open any `q##_*.md` file
2. Create a matching `q##_*_response.md` file in the same folder
3. Write your personal STAR response — it stays local to your machine

#### AI-assisted responses (Cursor users)

If you use [Cursor](https://cursor.sh), this repo includes a built-in skill that converts your rough notes into a polished STAR response automatically.

Just say:
```
create STAR response for @q01_prioritize_tasks.md — my notes: [your rough notes here]
```

The skill reads the question's context (why it's asked, key points, tips) and writes a structured first-person STAR response to the `_response.md` file. The skill is in `.cursor/skills/star-response/`.

---

## Customizing the Site

The site lives in the `site/` directory and is built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

### Run locally

```bash
cd site
npm install
npm run dev       # http://localhost:4321/interview-prep/
npm run build     # production build → site/dist/
```

### Change styles

All global styles, color variables, and markdown rendering styles are in:
```
site/src/styles/global.css
```

The dark theme colors (`--bg`, `--surface`, `--text`, etc.) are defined as CSS variables at the top of that file — update them to retheme the entire site.

### Change layout and navigation

The shared layout (nav, footer, GDPR banner) is in:
```
site/src/layouts/Layout.astro
```

### Add or modify categories and questions

All category and question metadata is in one file:
```
site/src/data/categories.ts
```

Add a new entry to the `categories` array and a corresponding entry in `folderMap` to wire up a new category.

### Add Google Analytics

If you fork this repo and want to track your own visitors:

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (`G-XXXXXXXXXX`)
3. Open `site/src/components/GoogleAnalytics.astro` and replace the `GA_ID` value with your own
4. Commit and push — the GitHub Actions workflow will rebuild and deploy automatically

GA is consent-gated out of the box — the tracking script only loads after the visitor accepts analytics cookies. No additional setup needed.

### Deploy to GitHub Pages

Deployment is automatic via GitHub Actions on every push to `main`. The workflow is in:
```
.github/workflows/deploy.yml
```

To deploy manually: `gh workflow run deploy.yml`

---

## License

[MIT](./LICENSE) © [chitamoor](https://github.com/chitamoor)
