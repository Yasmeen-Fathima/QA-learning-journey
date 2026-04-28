Yasmeen's QA Skill-Up Plan: 6 Months, 2 Hours a Week
Built for: full-time job + other commitments, weekend-only learning time, and the very real fear of dropping off.

The honest math
2-3 hours/week × 26 weeks ≈ 65-75 total hours.
That sounds small. It isn't. It's enough to become genuinely competent in two high-leverage areas — CI/CD for testers and AI system evaluation — if you don't waste it on tutorials that lead nowhere. Most people who "study for years" without results have spent 65 hours on shallow content and called it a day. You're going to spend 65 hours building real things.
You will skip: most AI-powered test tool vendors (Mabl/Testim/etc.), Kubernetes deep dives, security as a specialty. These are nice-to-haves and will not pay off in your time budget.

The five rules (these matter more than the curriculum)
1. One session per weekend. Same day. Same time. Pick now.
Saturday morning 9-11am or Sunday 10am-12pm work for most people. Decide once, never re-decide. The hardest part of a habit is the negotiation — kill the negotiation.
2. Every session ends with a git commit.
No exceptions. Even if you only watched a video, commit a notes.md summary. The repo is the proof you showed up. We'll set this up in week 1.
3. The "two-week rule" for missed sessions.
Missing one weekend is fine — life happens. If you miss two in a row, that's the danger zone. The recovery protocol is at the bottom of this doc. Read it before you need it.
4. Public progress every 4 weeks.
A short LinkedIn post: "Month 1 of learning X. Built Y. Here's what surprised me." This is the accountability you said was missing. People underestimate this — once colleagues and recruiters start commenting, dropping off becomes socially expensive.
5. Don't optimize. Ship.
Your code will be ugly. Your evals will be naive. That's fine. The goal is artifacts, not perfection. Refining comes from doing more, not from doing the first thing perfectly.

Week 0: Setup (do this before week 1, ~30 min)
This is the only "extra" time I'm asking for. It pays itself back many times over.

Create a public GitHub repo: qa-learning-journey (or whatever name you like)
Add a README.md with: your goal, the 6-month roadmap (paste this doc), and a "Weekly Log" section
Pin the repo to your GitHub profile
Block the weekly slot on your calendar as a recurring event titled something specific like "QA Skill Hour" — not "Study"
Pick your accountability signal: tell one person (partner, friend, colleague) what you're doing and ask them to ask you about it monthly


Phase 1: CI/CD for Testers (Weeks 1-6, ~12 hours)
Goal: Be the QA person on any team who can wire their own tests into the pipeline without help.
The output: A public repo containing a small Playwright test suite that runs automatically on every push to GitHub, in Docker, with results posted as PR comments.
Week 1 — GitHub Actions, the absolute basics

Read the GitHub Actions "quickstart" docs (15 min)
Create a new repo with one Playwright test (you already know Playwright — keep it tiny, one test, one page)
Add a .github/workflows/test.yml that runs the test on push
Watch it fail. Fix it. Watch it pass.
Commit. Done.


Weekly log:

Week 0:
- Setting up new Git HUB repo
- Added README.MD file to write weekly log
- Pin the repo to GitHub profile
- Blocked calendar for 2 hours every Sunday 10 AM to 12 noon
- **Have to tell a friend

Week 2 — Make it real

Add 3-4 more Playwright tests
Configure the workflow to run tests in parallel (this is one config line, but understand why)
Make the workflow upload the Playwright HTML report as an artifact
Commit.

Week 3 — Docker entry point

Read "Docker for absolute beginners" (any 30-min intro)
Write a Dockerfile that runs your Playwright tests
Run it locally with docker build and docker run
That's it. Don't go deeper into Docker yet.

Week 4 — Docker meets CI

Update your GitHub Actions workflow to run inside your Docker container
Confirm tests still pass
Add a status badge to your README showing test results

Week 5 — PR feedback loop

Configure the workflow to comment on pull requests with test results
Open a PR to your own repo, see the comment appear
Add a branch protection rule that blocks merges if tests fail
This is the moment "I have a CI pipeline" becomes real.

Week 6 — Polish + write-up

Clean up the README with a clear "what this is and why" section
Write a short LinkedIn post: "I spent the last 6 weekends learning CI/CD. Here's what I built and 3 things that surprised me." Link the repo.

Checkpoint: You can now legitimately put "GitHub Actions, Docker, CI/CD for test automation" on your CV. You have a public repo proving it.

Phase 2: AI System Evaluation (Weeks 7-22, ~32 hours)
Goal: Become the person on your team — and eventually in interviews — who knows how to test LLM-powered features. This is where the next wave of QA jobs is, and almost nobody is qualified yet.
The output: A public repo with a real eval suite for a real LLM application, plus 2-3 blog posts or LinkedIn write-ups about what you learned.
Weeks 7-8 — Foundations

Read Anthropic's evals documentation and OpenAI's evals cookbook (split across two weekends)
Watch one good talk on LLM evaluation (Hamel Husain's "Your AI Product Needs Evals" is the canonical one — find it on YouTube)
Take notes in your repo. Don't write code yet. Understanding first.

Weeks 9-10 — Pick your "system under test"
You need a real LLM app to evaluate. Options, in order of recommended:

Build a tiny one yourself: a "summarize this customer support ticket" tool using the Anthropic or OpenAI API. ~50 lines of Python. (Use AI to help write it — that's the point.)
Use an open-source one like a simple RAG chatbot from a tutorial.
Evaluate a public API like a translation or sentiment service.

Spend these two weekends building or setting up your SUT. Get it working end-to-end before writing any evals.
Weeks 11-13 — Promptfoo, your first evals

Install Promptfoo (npm install -g promptfoo). It's the most beginner-friendly eval tool.
Write your first 5 test cases: known inputs, expected behaviors
Add basic assertions: contains certain words, doesn't contain banned words, length checks
Run the eval. Look at the results. Iterate.
By end of week 13: 15-20 test cases, mix of assertion types

Weeks 14-16 — LLM-as-judge

This is the big concept: when there's no single "right answer," you use another LLM to grade outputs
Add LLM-graded assertions to your eval suite ("Is this response polite?" "Does it answer the question?")
Learn to write good rubrics — this is genuinely hard and a real skill
Build at least 5 LLM-judge tests

Weeks 17-18 — Adversarial testing

Add prompt injection tests (try to make your app ignore its instructions)
Add jailbreak tests (try to get it to do things it shouldn't)
Read OWASP's "Top 10 for LLM Applications" — it's short
Document what fails. Failure findings are gold for write-ups.

Weeks 19-20 — RAG evaluation (if your SUT uses retrieval) or robustness testing (if it doesn't)

For RAG: faithfulness, context precision, context recall — Ragas is the tool
For non-RAG: consistency testing (same input, different runs), edge cases, multilingual inputs

Week 21 — Reporting and CI integration

Wire your eval suite into the GitHub Actions pipeline you built in Phase 1
Now your evals run automatically. This is the moment your two phases combine into something powerful.
Generate a results report

Week 22 — Big write-up

Write a substantial blog post or LinkedIn article: "I built an evaluation suite for an LLM application. Here's how, and here's what I found." Link the repo.
This single post will outperform a year of generic networking. Recruiters in AI/ML QA do not see candidates with public eval work.

Checkpoint: You're now qualified to apply for "QA Engineer, AI Products" or "ML Test Engineer" roles. These pay well above standard QA roles.

Phase 3: Portfolio + Sampling (Weeks 23-26, ~8 hours)
Goal: Polish, sample adjacent skills, prepare to interview.
Week 23 — AI-powered test tools, sampler

Spend one session trying Applitools' free tier on your Playwright suite
Note what it does well, what it doesn't. That's it. You don't need to master it; you need to be able to discuss it.

Week 24 — Observability, sampler

Sign up for Datadog or Grafana Cloud free tier
Wire some basic logging from your test suite into it
Understand: dashboards, alerts, traces. You're aiming for literacy, not expertise.

Week 25 — Resume, LinkedIn, portfolio polish

Update CV with: "AI System Evaluation," "CI/CD for Test Automation," GitHub link
Update LinkedIn headline to reflect your new positioning (e.g., "QA Engineer | Test Automation | AI Evaluation")
Pin your two best repos on GitHub

Week 26 — Interview prep + reflection

Look at 5 job postings for "QA AI" or "ML Test Engineer" roles. Note vocabulary you don't know. Look it up.
Write a final retrospective post: "6 months ago I started learning X. Here's where I am now."
Take next weekend off. You earned it.


The recovery protocol (read this before you need it)
You will miss a week. Possibly two. That's expected and not a failure.
If you miss one week:
Pick up exactly where you left off. Do not "double up." Do not feel guilty. Just show up next weekend.
If you miss two weeks in a row:
This is the danger zone. The pattern that kills learning is "I'm so behind, I'll start again next month." Don't. Instead:

Don't restart. Don't replan. The plan is fine; you just took a break.
Do a 30-minute "re-entry" session — not your normal slot. Could be a Tuesday evening with tea. Just open the repo, read your last commit message, and write one paragraph in your log: "Where I left off, what's next."
Skip ahead if needed. If a week's task feels stale, jump to the next one. Forward motion matters more than completeness.
Lower the bar for the next session. Instead of 2 hours, commit to 30 minutes. The goal is to break the "I've stopped" identity, not to make up lost time.

The single biggest predictor of finishing this plan isn't talent or time — it's how you handle the first time you fall behind. Plan for it now and it loses its power.

What you're explicitly not doing (and why that's good)

Kubernetes deep dive — not worth your time budget; literacy is enough
Mastering 5 AI test tool vendors — fragmented market, not a durable skill
Security testing as a specialty — adjacent skill, not your differentiator
Mobile testing — only relevant if you target mobile-heavy roles
Generic "AI courses" on Coursera — they teach concepts, not the specific evaluation craft you need

If you finish this plan and want more, then pick from this list. Not before.

What "success" looks like in 6 months

A pinned GitHub profile with two substantial repos
Two LinkedIn posts that have been seen by your network and (likely) recruiters
The vocabulary and hands-on experience to discuss CI/CD and LLM evaluation in interviews without flinching
A genuine claim to be one of the early QA professionals specializing in AI systems
Most importantly: proof to yourself that you can stick with something hard for 6 months

That last one is the real prize. The skills are valuable. The evidence that you finish things is more valuable.

Last updated: April 27, 2026. Revisit and adjust this plan at the end of each phase, not in the middle.

Curated Resources Per Week
The rule: One primary resource per week. No supplementary links. If you finish the primary one early, do the week's task — don't go reading more.
If a link is broken or out of date by the time you reach it, treat the search query as the canonical reference. Official docs URLs change, but the content stays findable.

Week 0 — Setup

GitHub Docs: Creating a repository — https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository
Search: "how to pin repos on GitHub profile" (1-min task)


Phase 1: CI/CD (Weeks 1-6)
Week 1 — GitHub Actions, the basics

Primary: Playwright official guide on GitHub Actions — https://playwright.dev/docs/ci-intro
This is better than generic GitHub Actions tutorials because it's tailored to your existing Playwright knowledge. Read top-to-bottom. The example workflow is copy-paste ready.
Backup: GitHub Actions quickstart — https://docs.github.com/en/actions/quickstart

Week 2 — Parallel runs + artifacts

Primary: Playwright "Sharding" docs — https://playwright.dev/docs/test-sharding
For artifact upload: search GitHub Actions docs for "actions/upload-artifact"

Week 3 — Docker basics (just enough)

Primary: Docker's official "Get Started" tutorial, parts 1-3 only — https://docs.docker.com/get-started/
Stop after part 3. The rest is for app developers, not testers.

Week 4 — Docker meets CI

Primary: Playwright's Docker guide — https://playwright.dev/docs/docker
They publish official Playwright Docker images. Use them; don't build from scratch.

Week 5 — PR feedback + branch protection

Primary: daun/playwright-report-summary action README on GitHub — search "daun playwright report summary github action"
This is the cleanest way to get test results commenting on PRs.
For branch protection: GitHub Docs "About protected branches"

Week 6 — README polish + write-up

Primary: "Make a README" — https://www.makeareadme.com/
Quick template, takes 20 minutes. The other hour is for your LinkedIn post.


Phase 2: AI Evaluation (Weeks 7-22)
Weeks 7-8 — Foundations (the most important reading in this plan)

Week 7 primary: Anthropic's "Create strong empirical evaluations" — https://docs.claude.com/en/docs/build-with-claude/develop-tests
Read it twice. This is the conceptual foundation everything else builds on.
Week 8 primary: Hamel Husain — "Your AI Product Needs Evals"
Search his blog at hamel.dev. There's also a recorded talk version on YouTube — either format works, but the blog post is denser per minute.

Weeks 9-10 — Build your "system under test"

Primary: Anthropic's API quickstart — https://docs.claude.com/en/docs/get-started
Or OpenAI's equivalent if you prefer. Pick one, don't mix. Build the smallest possible thing that takes input and returns LLM output.
Tip: ask me (or any LLM) to scaffold the initial Python script. Use AI to learn AI — that's the whole point.

Weeks 11-13 — Promptfoo, your first evals

Primary: Promptfoo "Getting Started" — https://www.promptfoo.dev/docs/getting-started/
This is the most beginner-friendly LLM eval tool. The docs are unusually good — read them as your tutorial.
Week 13 specifically: their "Assertions and metrics" page

Weeks 14-16 — LLM-as-judge

Primary: Promptfoo's LLM rubric docs — https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/
Companion read (optional, only if curious): Anthropic's "Using Claude to evaluate Claude" — search the Anthropic docs/blog for this phrase.

Weeks 17-18 — Adversarial / red-teaming

Primary: OWASP Top 10 for LLM Applications — https://owasp.org/www-project-top-10-for-large-language-model-applications/
Free PDF download. Short. Read it once, refer back.
For hands-on: Promptfoo's red teaming guide — search "promptfoo red team docs"

Weeks 19-20 — RAG eval (or robustness if no RAG)

If RAG: Ragas docs — https://docs.ragas.io/
Start with their "Get Started" page. The four core metrics (faithfulness, answer relevancy, context precision, context recall) are what you need to know cold.
If no RAG: Promptfoo's docs on consistency and multi-run testing — same docs site, search "deterministic" and "variations".

Week 21 — Evals in CI

Primary: Promptfoo's "GitHub Actions integration" page — https://www.promptfoo.dev/docs/integrations/github-action/
Wire your eval suite into the pipeline you built in Phase 1. This is the integration moment.

Week 22 — Big write-up

Primary: Read 2-3 existing AI eval blog posts as models before writing your own. Search Hamel Husain's blog and Eugene Yan's blog (eugeneyan.com) for "evals." Their style is what to aim for: specific, honest about what failed, technical but readable.


Phase 3: Sampling + Polish (Weeks 23-26)
Week 23 — AI-powered test tools sampler

Primary: Applitools tutorial for Playwright — search "applitools playwright tutorial"
Use their free tier. One session. Form an opinion. Move on.

Week 24 — Observability sampler

Primary: Grafana Cloud free tier signup, then their "Get started" guide — https://grafana.com/docs/grafana-cloud/
Or Datadog free trial — pick one, do their starter tutorial. Goal: literacy, not mastery.

Week 25 — CV/LinkedIn polish

Primary: Look at 5 actual job postings for "QA AI Engineer," "ML Test Engineer," or "Senior SDET" on LinkedIn or jobs boards in your region. Mine them for vocabulary. This is more useful than any generic CV-writing guide.

Week 26 — Retrospective

No new resource. Reread your own weekly logs from the past 6 months. That's the resource.


Resources you should not use (and why)
Cutting these saves you significant time:

YouTube tutorial playlists titled "Complete X Course in 12 Hours" — these are made for engagement, not for learning. Stick to official docs.
Udemy/Coursera CI/CD courses — too long, too generic. The official Playwright + GitHub Actions docs cover what you need in a fraction of the time.
"Top 10 AI testing tools in 2026" listicles — almost always SEO content marketing, not real comparison.
Bootcamps or cohort-based courses — wrong shape for your time budget. Save the money.

If you ever feel like you "need more resources" before doing the work — that's almost always a procrastination signal. The primary resource is enough. Go build the thing.

When you get stuck (which you will)

Drop the question into Claude (me!) or ChatGPT. Genuinely. Use the AI tools you'll be testing — that's both the meta-lesson and the practical answer.
For specific tooling questions, the relevant project's GitHub Discussions or Discord is usually faster than Stack Overflow nowadays.
If you've been stuck for 30 minutes on the same problem, stop and write down exactly what you've tried and what you expected. Often the act of writing it out reveals the answer. If not, paste that summary into an AI chat — well-written stuck-questions get great answers.



Weekly log:

Week 0:
- Setting up new Git HUB repo
- Added README.MD file to write weekly log
