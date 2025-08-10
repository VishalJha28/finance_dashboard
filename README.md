# Finance Dashboard (blue theme)

A small personal finance dashboard (React + Vite + Tailwind) with:
- Add/edit/delete investments, goals, liabilities (persisted in localStorage)
- Blue theme, ready to extend with XIRR and goal-allocation logic

Run:
1. npm install
2. npm run dev

## Deployment

This project includes a GitHub Actions workflow that builds the site and deploys it to GitHub Pages. After pushing the repository to GitHub:

1. Open **Settings → Pages** in the repository.
2. Under "Build and deployment," select **GitHub Actions**.
3. Every push to `main` will build the Vite app and publish the result to GitHub Pages.

The app uses a hash-based router, so client-side navigation works correctly on GitHub Pages.
