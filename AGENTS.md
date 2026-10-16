<!-- Single source of instructions for Claude Code, Codex, Antigravity, and other agents.
     CLAUDE.md and GEMINI.md only import this file. Edit rules here. -->

# BaskomLabs Hub (baskom.fun)

Public website, showcase, and interactive learning hub for BaskomLabs applications and open-source tooling.

## Key Constraints & Style Rules

- **Author / Lead Developer Name**: Must strictly be **"Akmal, M."** across all UI text, metadata, schemas, and translations (do not write as "Muh Akmal").
- **Indented JSON**: User prefers JSON responses and files to be cleanly indented/beautified.
- **Language Support**: All customer-facing content must be kept in sync across English (`src/locales/en/translation.json`) and Indonesian (`src/locales/id/translation.json`).

## Commands

CI and agents call the same entry points:

| Task | Command |
|---|---|
| Lint | `npm run lint` |
| Build & Prerender | `npm run build` |
| Local Dev Server | `npm run dev` |

Always run `npm run lint` and `npm run build` before committing or opening a PR.

## Workflow & Delivery Rules

- **Never push directly to `main`**. All changes must arrive via a Pull Request.
- **Branch naming**: `feat/<slug>`, `fix/<slug>`, `chore/<slug>`, or `docs/<slug>`.
- **Pre-flight checks**: Zero warnings and zero errors from `npm run lint` and a successful `npm run build` (prerendering all routes) are mandatory.
- **Conventional Commits**: Commit messages must follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`).
- **Pull Requests**:
  - Open PRs with `gh pr create` using `.github/PULL_REQUEST_TEMPLATE.md`.
  - Once verified, merge using `gh pr merge <pr_number> --merge --delete-branch`.
- **Deployment Verification**:
  - After merging, monitor GitHub Actions (`gh run watch <run_id>`) until the deployment to GitHub Pages (`https://baskom.fun`) succeeds.
  - Verify live HTTP status and content via curl.

## Handling Directories Without Git

If working in a project or directory that does not have `.git`:
1. Ask the user first: *"Direktori ini belum memiliki git repository. Apakah Anda ingin mempublikasikannya ke private repository GitHub?"*
2. If confirmed:
   - Initialize git (`git init`).
   - Add `.gitignore` tailored to the project stack.
   - Make the initial commit.
   - Create private repository on GitHub (`gh repo create <name> --private --source=. --remote=origin --push`).
   - Establish `AGENTS.md` and follow the standard branch/PR/merge workflow.
