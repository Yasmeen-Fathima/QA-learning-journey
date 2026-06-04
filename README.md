# QA Learning Journey

A 6-month skill-up project: Playwright + CI/CD + AI Evaluation.
Following [my own plan](./docs/qa-learning-plan.md) — one weekend session per week.

## What's here

A small Playwright test suite running against [Practice Software Testing — Toolshop](https://practicesoftwaretesting.com), executed automatically on every push via GitHub Actions.

## Run locally

```bash
# One-time setup
npm install
npx playwright install chromium

# Run all tests
npm test

# Run with the Playwright UI (interactive mode)
npm run test:ui

# Open the HTML report from the last run
npm run report
```

## Run in CI

Tests run automatically on push to `main` and on pull requests. See `.github/workflows/playwright.yml`.

The HTML report is uploaded as a build artifact — open the run on GitHub, scroll to "Artifacts," download `playwright-report`, unzip, open `index.html`.

## Progress log

- **Week 1** — Repo scaffolded, first Playwright test running locally and in CI. ✅
- Week 2 — Add more tests, parallel runs, artifact upload polished.
- Week 3 — Containerize with Docker.
- Week 4 — Run Docker-based tests in CI.
- Week 5 — PR comments + branch protection.
- Week 6 — Polish + first LinkedIn write-up.

## Stack

- [Playwright](https://playwright.dev) — test framework
- [TypeScript](https://www.typescriptlang.org/) — test language
- [GitHub Actions](https://docs.github.com/en/actions) — CI

## Why Toolshop

It's a realistic e-commerce demo built for QA practice: stable `data-test` selectors, a public REST API for later API testing, and enough complexity (search, cart, checkout, admin) to support every phase of this project without switching targets.

Weekly log 1:
- Finished successfully week 1
- Learned GitHub Actions, folder stucture, how YAML pipeline workflows work
- Feeling motivated to continue further...

Weekly log 2:
Its been a few weeks actually. Going through job changes and its taking up some time.
Added 5 more tests 
- Sort options and asserted results - sort by name (asc, desc), sort by price (asc,desc), learned how to use sort function in both cases
  also learned why ... is used when sorting a string. 
Pipeline was failing
 Initially thought it was time out issue. increasing timeout didn't help later realised that getByTestId was looking for test-dataid but the website was using test-data instead.
Adding one line to config helped resolve the issue 
use: {
  testIdAttribute: 'data-test', // ← tells getByTestId() to look for data-test
}

[![Playwright Tests](https://github.com/Yasmeen-Fathima/QA-learning-journey/actions/workflows/playwright.yml/badge.svg)](https://github.com/Yasmeen-Fathima/QA-learning-journey/actions/workflows/playwright.yml)
