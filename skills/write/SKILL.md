---
name: write
description: >
  Dispatches into the bara-blocks catalog of writing building blocks (domain -> type ->
  blocks) before drafting or restructuring any substantive document meant to be read
  later on its own — a README, design doc, PR/issue description, architecture or diagram
  writeup, developer guide, module contract, product walkthrough, or an essay.
disable-model-invocation: true
---

# Write with bara blocks

Bara-blocks is a catalog of writing patterns, organized identically in two domains:
**`essay/`** (the essay types taught in school) and **`software/`** (designing and
explaining software). Each domain breaks into **types** (e.g. a PR description, a System
Context diagram, a persuasive essay), and each type breaks into **blocks** — small,
named, reusable pieces with one job (a thesis statement, a decision-and-rationale, a test
plan). This skill's job is to route you to the right type before you draft, not to
reproduce the catalog's content here — the catalog changes over time, so always read the
files fresh rather than relying on what's summarized below.

## Why dispatch instead of freestyling

Every type file in this catalog already answers the three questions that actually decide a
document's shape:

- who is this for?
- what does the reader want to know?
- which visual blocks best support the primary claim?

## Steps

1. **Pick the domain.** Software work almost always means `software/`. Within it, ask: is
   this *showing what a system looks like* (a diagram/architecture artifact) or *explaining
   what it does, how to use it, or why it changed* (prose for a reader)? The former is
   `software/designing/`, the latter `software/explaining/`. Read that domain's own
   `README.md` first — it lists the current types and a one-line job for each:
   - `essay/README.md`
   - `software/designing/README.md`
   - `software/explaining/README.md`

2. **Read the specific type's `README.md`.** Every type file follows the same shape: an
   "At a glance" line naming the reader and the job, an ordered list of blocks in the
   order they typically appear with a short worked example, and a closing "Pitfalls"
   list. This is the actual structure to draft against — don't skim it, read it.

3. **Follow block links out to the shared glossary when they point there.** A block used
   by only one type is described inline or in that type's own `blocks/` folder; a block
   shared across types is described once in the domain's `blocks/README.md` glossary and
   linked from every type that uses it, rather than restated. If a block link goes to
   `../../blocks/<name>.md`, read that file — it's the actual definition.

4. **Fill out every block the type lists.** Draft them in
   the order given. A "For this type" note says how to write that block for this
   document (its register, its content).

5. **Then find one more block that best visualizes this document's primary claim.** This
   is a deliberate addition on top of the template, not one of its listed blocks — pull it
   from wherever it fits (the same domain's shared glossary, another type, anywhere the
   catalog defines one) because it's the single best way to let the reader see the point
   instead of taking your word for it: a Before/After pair, a Code Snippet, a diagram.
   Skip this step only if nothing in the catalog would actually add that, not because
   picking one feels like extra work.

6. **If nothing fits, say so.** If the document is a genuinely novel shape the catalog
   doesn't cover, don't force it into the nearest type. Draft it on its own merits and
   mention that it fell outside the catalog — that's useful signal for growing the catalog
   later, not a failure of this skill.
