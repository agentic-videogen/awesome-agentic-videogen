# Contributing

Suggest additions and corrections through the resource issue form or a pull request.

For a new resource, provide its primary paper/project URL and at least one reading path. Use official code and project links. A repository link alone does not establish that a paper demonstrates recursive self-improvement.

## Updating the catalogue

Edit `data/catalogue.json`. Preserve the stable `id`, use a canonical arXiv abstract URL or another primary source, and deduplicate by arXiv ID or normalized title. Add multiple `topics` to reuse one record across reading paths. Do not duplicate the record.

Metadata copied from a bibliography should keep `metadata: "Survey bibliography"`. Set `checkedOn` and update the metadata status only after inspecting the primary source. Keep an existing venue/year if verified; do not infer acceptance from an arXiv record. Unknown code links remain `null`.

Run `node scripts/build.mjs` and `node scripts/check.mjs` after changes. These refresh the README, website catalogue, and bibliography from the same data.

Do not commit manuscript sources, unpublished paper PDFs, credentials, personal local paths, or unlicensed third-party media.
