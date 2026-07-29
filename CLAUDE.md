# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Layout

The repository root holds only CI and agent config. All application code lives in `website/` — **run every command from `website/`**, not the repo root.

## Commands

Package manager is **bun** (pinned via `packageManager`; CI reads the version from the `BUN_VERSION` repo variable).

```sh
cd website/
bun install
bun run dev          # Vite dev server (localhost:5173)
bun run build        # tsc (typecheck, noEmit) && vite build
bun run preview      # serve the built dist/
bun run lint         # eslint, --max-warnings 0
bun run lint:fix     # tsc + eslint --fix — this is also the formatter (Prettier runs as an ESLint rule)
bun run knip         # unused files/exports/deps
bun run doctor       # react-doctor scan (score + diagnostics)
bun run check        # knip + lint:fix + doctor — the full gate before committing
```

There is **no test suite** — no test runner is installed and there are no test files. `bun run check` is the only automated verification; don't invent test commands.

Formatting is enforced through `eslint-plugin-prettier` (config inline in `.eslintrc.cjs`), so there is no `.prettierrc` and no separate format script: **tabs**, single quotes, width 120, `trailingComma: 'es5'`, `arrowParens: 'avoid'`, semicolons. Import order is auto-sorted by `@ianvs/prettier-plugin-sort-imports` (`react` first, then builtins, third-party, relative, then all type imports last) — let `lint:fix` order imports rather than hand-arranging them.

## Architecture

Single-page React 18 + TypeScript + Tailwind SPA, statically hosted on GitHub Pages at `www.guimorone.com` (`website/public/CNAME`). No backend, no data fetching, no state management library — **all content is compile-time TypeScript data**.

### Routing uses a hash router on purpose

`src/Router.tsx` builds a `createHashRouter` because GitHub Pages can't rewrite deep links to `index.html`. Routes are keyed off the string constants in `src/constants/paths.ts`; unknown paths `redirect()` to `/`. Every page renders inside `src/pages/DefaultPage.tsx`, the layout route that supplies Navbar/Footer, scroll-to-top on navigation, and the document title (derived from the pathname via `getDocumentTitle` + `useDocumentTitle`). `/skills` is deliberately excluded from the scroll reset because it self-scrolls to a deep-linked skill.

### `config.ts` + `index.tsx` per page

Each directory in `src/pages/` splits data from presentation:

- `config.ts` exports `title`, `subtitle`, and typed content arrays (`experiences`, `projects`, `documents`, `skills`, …).
- `index.tsx` is a thin component that feeds that config into a shared renderer — `components/Page` (title + `Feed`/`ObjectFeed` timeline) or `components/Grid/Container` (collapsible grids).

**Content edits belong in `config.ts` and `src/constants/`, not in components.** Adding a job, project, or certification means appending a typed object to a config array; the components need no changes. `ActivityType` in `src/types/index.d.ts` defines what a timeline entry can carry (description as string or bullet array, comments, skills, icon, links).

### Skills are shared singletons, and they are the join key

`src/constants/skills.tsx` exports one `SkillType` const per technology (`PYTHON`, `AWS`, `REACT`, …), each bundling icon, brand color, and a 0–5 rating. Page configs import these consts into their `skills` arrays, so a rating or icon is edited in exactly one place.

`getSkillData()` in `src/utils/index.ts` inverts that relationship: it imports **every** page config and filters each for entries mentioning a skill label, powering the "where I used this" modal on `/skills`. Consequences worth knowing before you refactor:

- `src/utils/index.ts` deliberately depends on `src/pages/*/config.ts`. Adding a new category of experience means extending the `WorkPageType` union in `src/types/index.d.ts` **and** the `works` array and `switch` in `getSkillData`, or the new content silently won't appear in skill modals.
- Matching is by lowercased `label` string. `Feed` deep-links each skill chip to `/skills?skill=<label>`, and `/skills` scrolls to and highlights the matching entry by label. Renaming a skill's `label` breaks those links.

### Icons

Three icon shapes coexist under one `IconType` union (`src/types/icons.d.ts`): Heroicons (`forwardRef`), `react-icons`, and hand-rolled inline SVGs in `src/utils/icons.tsx`. Components receive icons as _components_ (`Icon`, `Icon.Element`), never as strings. A skill whose brand needs a colored and a monochrome variant uses the `{ withColor, withoutColor }` object form instead of a bare component — `Feed` and `Skills` both branch on `typeof skill.Icon.Element === 'object'` to handle it.

### Conventions

- Aliases: `@` → `src/`, `~` → `node_modules/` (declared in both `vite.config.ts` and `tsconfig.json`).
- PDFs and images are `import`ed from `src/assets/` so Vite fingerprints them; `public/` holds only `CNAME` and `logo.svg`.
- Compose Tailwind classes with the `classNames` helper from `src/utils` (filters falsy, joins) — the codebase uses conditional-first argument order.
- Styling is a fixed dark theme: zinc scale for surfaces/text, teal for primary actions, indigo for inline links. There is no light mode; the gradient background lives on `<html>` in `index.html`.
- Prop types live in `src/types/components.d.ts` as `interface XProps`, imported via `import type`. Components are typed `FC<XProps>` or plain default-exported functions for pages.
- `VITE_APP_NAME` (from `.env.development` / `.env.production`) is the document-title suffix and is also substituted into `index.html` as `%VITE_APP_NAME%`.
- TypeScript is strict with `noUnusedLocals`/`noUnusedParameters`; `knip` additionally fails on unused exports, so don't leave orphaned config exports behind.

## Deploy and versioning

- `.github/workflows/deploy.yml`: pushes to `main` touching `website/**` run `bun run deploy` → `predeploy` builds (`tsc && vite build`) → `gh-pages -d dist` pushes to the `gh-pages` branch. There is no CI lint/typecheck job other than the `tsc` inside the build, so a type error fails the deploy.
- `.github/workflows/bump.yml`: after the Pages deployment completes, reads `version` from `website/package.json` and cuts a GitHub release tagged `v<version>`. **Bump `website/package.json` version manually** when a release is wanted — the workflow only tags what it finds.

## Gotchas

- **Never give `useEffect` a concise arrow body unless the expression really is a cleanup function.** React assigns the effect's return value to `destroy` and calls it on unmount, skipping only a literal `undefined`. `tsc` cannot catch a bad one, because `EffectCallback` is `() => void | Destructor` and `void`-typed DOM APIs are assignable to it — so `useEffect(() => window.scrollTo(0, 0), [])` type-checks, yet crashes with `destroy is not a function` in any browser where an extension has wrapped `scrollTo` into returning a value. Always use a block body: `useEffect(() => { window.scrollTo(0, 0); }, [])`.
- The app renders under `StrictMode`, so effects double-invoke in dev.
- **Stale Vite dep cache after `bun install`.** Vite 5.4 only invalidates its pre-bundle cache on lockfiles it recognizes, and it knows `bun.lockb` — not the text `bun.lock` that Bun 1.3 writes. So `node_modules/.vite/deps` can survive dependency upgrades and leave the browser mixing an old pre-bundled module graph with fresh `node_modules`. After any dependency change: `rm -rf node_modules/.vite`, restart `bun run dev`, hard-reload the browser.
- `react-doctor` is vendored as an agent skill (`.agents/skills/react-doctor/`, mirrored to `.cursor/skills/`, pinned in `skills-lock.json`): run it after React changes, fix errors, re-run to confirm the score improved.
