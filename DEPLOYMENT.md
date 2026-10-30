# Website deployment

The target website is `https://agentic-videogen.github.io/`, owned by the `agentic-videogen` GitHub account. The Awesome collection is maintained separately in `agentic-videogen/awesome-agentic-videogen`.

## Website repository

Use a public repository named `agentic-videogen.github.io` under the matching account. Run `node scripts/build-website.mjs`, then copy the contents of `build/website/` (not its enclosing directory) to that repository's publishing root. In Settings → Pages, publish the `main` branch from `/ (root)`. Pull the latest website revision before publishing and preserve unrelated files; normal Git history retains the previous design for rollback.

No `CNAME` file is required for the default `github.io` address. A repository under another owner cannot claim this address merely by changing its name.

## Build and preview

Run `node scripts/build.mjs`, then `node scripts/check.mjs`. Run `node scripts/serve.mjs` to preview the static site locally. There are no runtime packages, build services, secrets, or external font dependencies.

Update the canonical `data/catalogue.json` first, regenerate, and then synchronize `build/website/` with the website repository. The survey's released paper and citation are maintained in `citation.bib` and the generated resource links.

## Approved homepage design

The approved dark studio homepage is built from `docs/preview.html` and its `preview-*` assets. `scripts/build-preview.mjs` retains the editable, separate preview; `scripts/build-website.mjs` builds the base content and preview, removes the preview title and `noindex` marker, uses a production-specific opening key, and packages all runtime assets into `build/website/`. Source previews and local figure-preparation tools are not deployed. `scripts/check-website.mjs` verifies the production package, including the 96 linked works in Figure 2, Table 1, authors, citation, internal anchors and local assets. The original base homepage stays in `docs/index.html`; do not copy it over the approved production design.

The new opening preserves the preview's session-based autoplay, Skip/Escape, reduced-motion and deep-link behavior. The former homepage and opening remain recoverable in Git; the local preview is not renamed or deleted.

If GitHub's browser uploader fails on the large figure asset, run `node scripts/build-website.mjs --inline`. This produces the same homepage with embedded styles, scripts, catalogue and survey citation; images use the reviewed, immutable Awesome-repository revision. Only `index.html` needs replacing when the existing website's `references.bib` already matches the package. `docs/preview.html` remains the separate multi-file preview. The normal package can still be regenerated without `--inline`.

## Authors and institutional marks

`data/people.json` records the manuscript's author order, contribution notes, institution order, and logo provenance. The build renders this information into the homepage. Update it from the latest Overleaf author block, then rebuild; do not infer individual institution assignments when the manuscript does not provide them. Institutional marks remain their owners' property and are used here to identify participating institutions. The title–authors–institutions layout takes inspiration from the [Affordance Survey website](https://jingliangli.com/affordance-survey/); the existing paper library remains unchanged.

The cover styles are embedded by the build. Institutional images use `logoAssetBase`, pinned to an existing Awesome-repository commit, so the website can be updated atomically through its text editor without re-uploading binary files. Keep the corresponding image files in `docs/` as the canonical asset copies. When changing an image, publish its new commit first and then update `logoAssetBase` before building the homepage.

## Manuscript Table 1

`data/survey-comparison.json` preserves the manuscript's comparison table: 52 related studies, 11 families, 6 coverage dimensions, and the Ours row. It records the manuscript commit and table path. Coverage values and ordering are imported, not inferred from catalogue tags. The bibliography supplies links to the cited versions; the three comparison records absent from the catalogue remain in this table without changing the catalogue's inclusion policy.

To refresh from an explicitly selected manuscript revision, run `node scripts/import-survey-comparison.mjs <manuscript-repository> <commit>`, review the data diff, and update the pinned revision/count checks if the paper changed. Then build and check as above. `scripts/survey-comparison.mjs` renders semantic HTML, while `docs/comparison.css` is embedded into the homepage so the same single-file publishing workflow still applies. The table is visible without JavaScript, with a scrollable viewport, fixed headers, paper links, and accessible coverage labels.

## Studio opening

`docs/studio-intro.html`, `docs/studio-intro.css` and `docs/studio-intro.js` contain the original SVG robot studio, its motion, and its independent controller. The build embeds all three into `index.html`; no video download, external animation library, or new runtime asset is needed. The silent sequence runs for about five seconds on the first home-page visit. Local storage remembers that it has played. Deep links and reduced-motion preferences bypass autoplay, while Skip and Escape close immediately. A footer button allows manual replay; `?intro=1` is a shareable replay/preview link (still respecting reduced motion).

The native dialog is closed without JavaScript and the main website is never hidden or replaced. Independent cleanup and a fail-safe timeout prevent an animation error from locking access. `scripts/check-studio-intro.mjs`, also included in the normal check command, tests the timeline, bypass and replay conditions, focus restoration, storage restrictions, and cleanup.
