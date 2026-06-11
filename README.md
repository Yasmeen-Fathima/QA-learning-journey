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

## Updated learning plan (14 weeks)
Week 4 ✅ COMPLETE
    • Read Anthropic evals doc ✅
    • Read Hamel Husain — Your AI Product Needs Evals ✅
    • Write logs/week-04.md ✅

Week 5 ✅ COMPLETE
    • Python installed, Anthropic SDK configured ✅
    • First API call successful ✅
    • Field inspection summariser built (Summarizer.py) ✅
    • eval-spec.md written with domain knowledge ✅
    • 5 test runs completed — real bugs found ✅
    • 13 test ideas written ✅
    • logs/week-05.md ✅

Key bug found in Week 5: Vague Input Flag incorrectly triggered on detailed inputs. Root cause: system prompt definition of ‘vague’ too broad. Fixed by being more explicit about what triggers the flag.

Week 6 ✅ NEARLY COMPLETE
    • Promptfoo installed v0.121.15 ✅
    • Read Getting Started docs ✅
    • Read assertions docs ✅
    • First 5 test cases written and passing ✅
    • JSON output from summariser ✅
    • defaultTest implemented ✅
    • JavaScript assertions added ✅
    • eval-spec.md updated for JSON format ✅
    • logs/week-06.md ⏳ tonight
    • Python practical script ⏳ tonight

Week 7 — Starting Tomorrow
LLM eval tasks:
    • Read assertions docs deeper — already done ✅ ahead of schedule
    • Add 10 more test cases — reach 15 total
    • Add edge-case inputs: empty string, non-English, ambiguous severity, boundary cases
    • Add latency assertion to defaultTest
    • Add not-icontains hallucination tests
    • DEEPER: Write rubric document before LLM-as-judge tests
    • DEEPER: Change system prompt — re-run all tests, see how many break
    • Write logs/week-07.md

★ Python exercises:
    • Practical script: read test-ideas.md and print each idea numbered (10 lines)
    • Exercism Week 7: Collatz, Grains, Hamming, Pangram, Isogram (optional — practical preferred)

Weeks 8–12 — Ahead
    • Week 8: LLM-as-judge, written rubrics, LinkedIn update
    • Week 9: OWASP Top 10 LLM, adversarial testing, prompt injection, Playwright POM upgrade
    • Week 10: Continue adversarial, Playwright framework — fixtures, test data JSON, env config
    • Week 11: Consistency/robustness testing, variance analysis
    • Week 12: CI integration, major LinkedIn article, Python capstone
    • Week 13: JMeter hands-on, CV/LinkedIn polish
    • Week 14: Mock interviews (4 sessions), retrospective
    
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

Weekly log 3:
Its not been week but finished week 3 of learning. Running docker on free tier Git Hub was a challenge. It failed like so many times.
I learned the concept and finally moved on. 
Finished with api tests, cleaned up the code, added PR Comments. It was good learning. 
I feel a bit more confident now while waiting for my next role.

Weekly log 6:
FInished writing Anthropic API call to generate responses for Field Inspection Summariser. It was a gread learning excercise. I understood the payload and terms like temperature, hallucination in AI. I have also installed Promptfoo and written test scripts, added assertions today. Learned about different types of assertions. 
It was scary at first but later got easier. Alhamdulillah!
Also wrote Python script to remove markdown quotations from JSON output generated. 
Overall good learning excercise. I will continue (IA)





[![Playwright Tests](https://github.com/Yasmeen-Fathima/QA-learning-journey/actions/workflows/playwright.yml/badge.svg)](https://github.com/Yasmeen-Fathima/QA-learning-journey/actions/workflows/playwright.yml)
