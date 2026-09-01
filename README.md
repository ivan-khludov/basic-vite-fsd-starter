# Vite FSD Starter

A production-minded React + TypeScript starter on [Vite](https://vite.dev/), structured with [Feature-Sliced Design](https://feature-sliced.design/). The demo app is a protected product catalog backed by [DummyJSON](https://dummyjson.com/).

Use it as a template for a new SPA: auth, server state, URL-driven filters, i18n, and a full UI kit are already wired.

## Features

- Session-based sign-in with access/refresh tokens and a 401 retry
- Current user (`GET /auth/me`) and role-gated catalog writes (`admin` / `moderator`)
- Product catalog: search, sort, pagination, details, create / update / delete
- DummyJSON does not persist writes — catalog changes last until reload
- Theme (light/dark) and locale (Russian / English)
- Typed HTTP client, Zod on API boundaries, react-hook-form on screens
- Storybook for `shared/ui`, Vitest + MSW, Playwright e2e with stubbed API

## Stack

| Area            | Choice                                                            |
| --------------- | ----------------------------------------------------------------- |
| UI              | React 19, Tailwind CSS 4, shadcn / Base UI                        |
| Routing         | React Router 7                                                    |
| Server state    | TanStack Query                                                    |
| Client UI state | Zustand                                                           |
| Forms           | react-hook-form + Zod                                             |
| i18n            | i18next                                                           |
| Build           | Vite 8, TypeScript 5.9                                            |
| Quality         | ESLint, Steiger (FSD), Prettier, Vitest, Playwright, Storybook 10 |

Package manager is **pnpm** only (see `packageManager` in `package.json`). Node.js **22+** is required.

## Getting started

```bash
pnpm install
cp .env.example .env
pnpm dev
```

`.env.example` points at DummyJSON:

```
VITE_API_BASE_URL=https://dummyjson.com
VITE_APP_ENV=development
```

Open the app, sign in, and you land on the catalog.

### Demo credentials

| Username | Password     |
| -------- | ------------ |
| `emilys` | `emilyspass` |

These are DummyJSON demo users. Other public DummyJSON accounts work the same way.

## Scripts

| Command                             | What it does                    |
| ----------------------------------- | ------------------------------- |
| `pnpm dev`                          | Vite dev server                 |
| `pnpm build`                        | Typecheck and production build  |
| `pnpm preview`                      | Serve the production build      |
| `pnpm typecheck`                    | `tsc -b --force`                |
| `pnpm lint` / `pnpm lint:fix`       | ESLint                          |
| `pnpm lint:fsd`                     | Feature-Sliced Design (Steiger) |
| `pnpm format` / `pnpm format:check` | Prettier                        |
| `pnpm test`                         | Vitest (unit / integration)     |
| `pnpm test:watch`                   | Vitest watch mode               |
| `pnpm test:coverage`                | Vitest with coverage            |
| `pnpm e2e`                          | Playwright                      |
| `pnpm e2e:install`                  | Playwright Chromium + OS deps   |
| `pnpm storybook`                    | Storybook on port 6006          |

## Architecture

Layers, top-down: `app` → `pages` → `widgets` → `features` → `entities` → `shared`. Imports only go down; slices on the same layer do not import each other; public API is the slice `index.ts`.

## Quality

Husky runs lint-staged and [commitlint](https://commitlint.js.org/) (conventional commits) on commit. CI on `main` and pull requests typechecks, lints, checks FSD and formatting, runs unit tests, builds the app and Storybook, then runs Playwright.

## Support

If this project helps you, optional tips in **USDT (Tron / TRC-20)** are welcome:

<p align="left">
  <img src="public/qr.png" alt="USDT TRC-20 QR code" width="200" />
</p>

**Address (TRC-20 / Tron):**

```
TNrPGfU3HqtfMPmmhdvrJsQng7Ck9fian4
```

Send **only** USDT over the **Tron network** to this address; using other chains can mean lost funds.

## Author

**Ivan Khludov** — [ivan.khludov.dev@gmail.com](mailto:ivan.khludov.dev@gmail.com)

## License

Licensed under the [MIT License](LICENSE).
