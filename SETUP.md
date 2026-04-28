# Week 1 Setup — Step by Step

This walks you from "empty machine" to "first test passing in GitHub Actions" in one session. Don't skip ahead even if a step looks obvious — the point is to do it once, end to end.

## Before you start (5 min)

You need:
- Git installed (`git --version` should work)
- Node.js 20+ installed (`node --version` should show v20 or higher) — install from https://nodejs.org if not
- A GitHub account
- A code editor (VS Code is fine)

## Step 1 — Create the GitHub repo (5 min)

1. Go to https://github.com/new
2. Repository name: `qa-learning-journey`
3. Public (this is part of your portfolio)
4. Add a README — yes (we'll overwrite it)
5. Add `.gitignore` — choose "Node"
6. Click **Create repository**
7. Click **Code** → copy the HTTPS URL

## Step 2 — Clone it locally (2 min)

```bash
cd ~/projects   # or wherever you keep code
git clone https://github.com/YOUR_USERNAME/qa-learning-journey.git
cd qa-learning-journey
```

## Step 3 — Copy the starter files (2 min)

Copy everything from this `playwright-starter/` folder into your cloned repo, preserving the folder structure. You should end up with:

```
qa-learning-journey/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   └── homepage.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── SETUP.md   (you can delete this once you're done)
```

If your repo's existing `.gitignore` from GitHub is more comprehensive, keep that one and discard the starter's. Either works.

## Step 4 — Install Playwright (5 min)

From your repo root:

```bash
npm install
npx playwright install chromium
```

The first install downloads a Chromium build — that's ~150MB, allow it to finish.

## Step 5 — Run the test locally (2 min)

```bash
npm test
```

Expected output: a single passing test. If it fails — read the error, that's where the learning happens. Common causes: network blocking the demo site, a browser flag, or the site being slow on first hit (re-run once).

To see the test running visually:

```bash
npm run test:headed
```

To see the HTML report:

```bash
npm run report
```

## Step 6 — Push to GitHub (2 min)

```bash
git add .
git commit -m "Week 1: scaffold Playwright test suite"
git push
```

## Step 7 — Watch CI run (5 min — the magic moment)

1. Go to your repo on GitHub
2. Click the **Actions** tab
3. You should see "Playwright Tests" running (yellow circle) → then green check
4. Click into the run, scroll down to **Artifacts**, download `playwright-report`, unzip, open `index.html`

If it goes green: **you have a CI pipeline.** Take a screenshot. You'll want it for your Week 6 LinkedIn post.

If it goes red: read the logs in the Actions tab — Playwright failures are usually clear. Fix locally, push again. The fail-fix-pass loop *is* the learning.

## Step 8 — Update the README (5 min)

Open `README.md`, replace `YOUR_USERNAME` placeholders, add anything specific to your repo. Add a CI badge at the top:

```markdown
![Tests](https://github.com/YOUR_USERNAME/qa-learning-journey/actions/workflows/playwright.yml/badge.svg)
```

Push the change. The badge will go green in your README. This is permanent visible proof you have a working pipeline.

## Step 9 — Log it (5 min)

In your README's "Progress log" section, mark Week 1 as ✅ and add one sentence about something that surprised you or that you got stuck on. This isn't ceremony — it's the artifact you'll reread in Week 26 when you're writing the retrospective.

## You're done.

Total time: ~30-35 minutes if everything goes smoothly, longer if you hit setup snags. Either way, you've now got the entire skeleton in place. Every future week is "add a thing to this" rather than "set everything up again."

If you got stuck: copy the error message, paste it into Claude or ChatGPT, get unstuck, and keep going. That's not cheating — that's the workflow.
