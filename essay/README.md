# Essay Building Blocks

> **At a glance.** School teaches a small, stable set of essay types, and each one decomposes
> into a small, stable set of components — a thesis, a hook, a counterargument, a resolution.
> This directory makes that decomposition **data**, not just prose: `data/` is the source of
> truth, `docs/` is generated from it, and the shape is deliberately structured enough for a
> future tool (a drag-and-drop essay builder) to consume directly, not just for a human to read.

Not sure where to start? **[Which Essay Type Do I Need?](./docs/routing.md)** answers that in one
or two questions and links straight to the type that fits.

## Structure

- **`schema/`** — the JSON Schema for a [component](./schema/component.schema.json), an
  [essay type](./schema/essay-type.schema.json), and the [routing](./schema/routing.schema.json)
  decision tree. Read these first if you're building against this data programmatically.
- **`data/`** — the source of truth. [`components.json`](./data/components.json) is the shared
  vocabulary of atomic building blocks; [`types/`](./data/types/) has one file per essay type,
  each an ordered list of component references (required or optional, with a type-specific note
  where the component's job narrows); [`routing.json`](./data/routing.json) is the "which type do
  I need" decision tree.
- **`docs/`** — generated Markdown, human-readable. **Never hand-edit a file here** — edit the
  JSON in `data/` and run `npm run generate`. [`scripts/check-docs.mjs`](./scripts/check-docs.mjs)
  fails if `docs/` ever drifts from `data/`; run it in CI.
- **`scripts/`** — the generator (`generate-docs.mjs`), the drift guard (`check-docs.mjs`), and
  the shared rendering logic (`lib.mjs`) both of them call.

## Why data, not just prose

A component composes into more than one essay type (a thesis statement shows up in expository,
persuasive, compare-contrast, and literary-analysis essays, with a different note each time on
what makes a valid one). Modeling that as references from an essay type into a shared component
table — rather than re-describing "thesis statement" nine times — is what makes the same data
usable by a generator, a lint rule, or eventually a drag-and-drop UI that assembles an essay
outline from the pieces, not just by a reader scrolling a doc.

## Regenerating docs

```
npm run generate     # data/*.json -> docs/*.md
npm run check-docs   # fails if docs/ doesn't match data/ (CI guard)
```

No dependencies — both scripts are plain Node (`node:fs`, `node:path`), so `npm install` isn't
required to run them.
