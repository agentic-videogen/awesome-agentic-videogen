# Contributing

Suggest additions and corrections through the resource issue form or a pull request.

For a new resource, provide its primary paper/project URL and at least one reading path. Use official code and project links. A repository link alone does not establish that a paper demonstrates recursive self-improvement.

## Updating the catalogue

Edit `data/catalogue.json`. Preserve the stable `id`, use a canonical arXiv abstract URL or another primary source, and deduplicate by arXiv ID or normalized title. Add multiple `topics` to reuse one record across reading paths. Do not duplicate the record.

Metadata copied from a bibliography should keep `metadata: "Survey bibliography"`. Set `checkedOn` and update the metadata status only after inspecting the primary source. Keep an existing venue/year if verified; do not infer acceptance from an arXiv record. Unknown code links remain `null`.

Run `node scripts/build.mjs` and `node scripts/check.mjs` after changes. These refresh the README, website catalogue, and bibliography from the same data.

The README resource entries use Shields.io badges: live GitHub Star counts for repository links, red arXiv/Paper links, and blue Website links. Other sources retain a Source badge; non-repository GitHub links retain a Code badge instead of unrelated star counts. Missing code/project links are not invented. Edit metadata, not the generated badge markup. The title, year and venue appear above the badges so GitHub does not squeeze them into a narrow table column. This presentation follows [Awesome-Video-Diffusion](https://github.com/showlab/Awesome-Video-Diffusion); it does not change the companion website.

Do not commit manuscript sources, unpublished paper PDFs, credentials, personal local paths, or unlicensed third-party media.
