# PSMS Docs

User guide for [PSMS](https://app.psms.ph), published at **[docs.psms.ph](https://docs.psms.ph)**.
Built with [VitePress](https://vitepress.dev).

```sh
npm install
npm run docs:dev      # local preview with live reload
npm run docs:build    # static site in docs/.vitepress/dist
```

Pages are Markdown files under `docs/`; the sidebar and navigation are in `docs/.vitepress/config.mts`.

## Screenshots

Screenshots in `docs/public/screens/` are taken from a **fictional demo office** so no real office data is published.
Create it in a local PSMS (`psms-v2`) with `uv run python manage.py seed_demo`, sign in as `demo.holder`, and take
new screenshots at about 1520 × 780. Never use screenshots of real offices: this repository is public.

## Deploying

The Netlify site is `tender-feynman-fe34ff` (docs.psms.ph). It doesn't auto-deploy from GitHub; deploy the built site
from inside the output folder (run from the repo root, the CLI trips over `netlify.toml`):

```sh
npm run docs:build
cd docs/.vitepress/dist && npx netlify-cli deploy --prod --no-build --dir . --site tender-feynman-fe34ff
```

Old URLs from the previous VuePress site are redirected in `docs/public/_redirects`.
