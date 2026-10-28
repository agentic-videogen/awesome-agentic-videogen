# Website deployment

The target website is `https://agentic-videogen.github.io/`, owned by the `agentic-videogen` GitHub account. The Awesome collection is maintained separately in `agentic-videogen/awesome-agentic-videogen`.

## Website repository

Use a public repository named `agentic-videogen.github.io` under the matching account. Copy the contents of `docs/` (not its enclosing directory) to that repository's publishing root. In Settings → Pages, publish the `main` branch from `/ (root)`.

No `CNAME` file is required for the default `github.io` address. A repository under another owner cannot claim this address merely by changing its name.

## Build and preview

Run `node scripts/build.mjs`, then `node scripts/check.mjs`. Run `node scripts/serve.mjs` to preview the static site locally. There are no runtime packages, build services, secrets, or external font dependencies.

Update the canonical `data/catalogue.json` first, regenerate, and then synchronize `docs/` with the website repository. The survey's arXiv/PDF link and citation should be added when the authors release them; do not invent an identifier or publish a private draft.

## Authors and institutional marks

`data/people.json` records the manuscript's author order, contribution notes, institution order, and logo provenance. The build renders this information into the homepage. Update it from the latest Overleaf author block, then rebuild; do not infer individual institution assignments when the manuscript does not provide them. Institutional marks remain their owners' property and are used here to identify participating institutions. The title–authors–institutions layout takes inspiration from the [Affordance Survey website](https://jingliangli.com/affordance-survey/); the existing paper library remains unchanged.

The cover styles are embedded by the build. Institutional images use `logoAssetBase`, pinned to an existing Awesome-repository commit, so the website can be updated atomically through its text editor without re-uploading binary files. Keep the corresponding image files in `docs/` as the canonical asset copies. When changing an image, publish its new commit first and then update `logoAssetBase` before building the homepage.
