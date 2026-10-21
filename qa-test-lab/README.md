# TestLab — QA Automation Playground

A publicly viewable, responsive test application paired with **real** automated tests. Demonstrates UI acceptance criteria, validation logic, browser-based end-to-end testing, and CI.

## Demo

Enable GitHub Pages from `main` / `(root)` after upload. The root `index.html` is the interactive demo.

## Features
- Accessible registration validation target with clear error states
- Five unit tests using built-in Node test runner
- Four end-to-end Playwright browser scenarios
- GitHub Actions workflow on push and pull request

## Run tests locally

Requires Node.js 20+ and Python 3.

```bash
npm install
npm test
npx playwright install chromium
npm run test:e2e
```

## Run the web app

```bash
python3 -m http.server 8000
```

Visit `http://localhost:8000`. Use a local server rather than double-clicking the HTML because the app uses JavaScript modules.

## Notes
The UI is a test target, not a production signup system. It stores no accounts and sends no data to a server.
