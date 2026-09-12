---
name: write-with-bara-blocks
description: >
  Dispatches into the bara-blocks catalog of writing building blocks (domain -> type ->
  components) before drafting or restructuring any substantive document meant to be read
  later on its own — a README, design doc, PR/issue description, architecture or diagram
  writeup, developer guide, module contract, product walkthrough, or an essay. Use this
  whenever you're about to write or significantly restructure one of these, even if the
  user doesn't name a document type or mention "bara-blocks" explicitly — e.g. "write a
  README for this", "draft a design doc for the new cache layer", "explain this module",
  "write up this PR". Do NOT use for one-off chat replies, commit message subject lines,
  code comments, or any reply whose whole content lives in this conversation turn.
---

# Write with bara blocks

Bara-blocks is a catalog of writing patterns, organized identically in two domains:
**`essay/`** (the essay types taught in school) and **`software/`** (designing and
explaining software). Each domain breaks into **types** (e.g. a PR description, a System
Context diagram, a persuasive essay), and each type breaks into **components** — small,
named, reusable pieces with one job (a thesis statement, a decision-and-rationale, a test
plan). This skill's job is to route you to the right type before you draft, not to
reproduce the catalog's content here — the catalog changes over time, so always read the
files fresh rather than relying on what's summarized below.

## Why dispatch instead of freestyling

Every type file in this catalog already answers the three questions that actually decide a
document's shape: who is this for, what pieces does a document like this need (and which of
those are optional), and what does this kind of document commonly get wrong. Reading that
before drafting is cheaper than reinventing structure and catches the same mistakes the
catalog's own worked examples were written to avoid.

## Steps

1. **Pick the domain.** Software work almost always means `software/`. Within it, ask: is
   this *showing what a system looks like* (a diagram/architecture artifact) or *explaining
   what it does, how to use it, or why it changed* (prose for a reader)? The former is
   `software/designing/`, the latter `software/explaining/`. Read that domain's own
   `README.md` first — it lists the current types and a one-line job for each:
   - `essay/README.md`
   - `software/designing/README.md` (System Context, Container, Component, Dynamic,
     Deployment — in order of zoom, widest first)
   - `software/explaining/README.md` (Product Walkthrough, Developer Guide, PR Description,
     Design Doc, Module Contract, Module Discovery)

2. **Read the specific type's `README.md`.** Every type file follows the same shape: an
   "At a glance" line naming the reader and the job, an ordered list of components each
   marked `(required)` or `(optional)` with a short worked example, and a closing
   "Pitfalls" list. This is the actual structure to draft against — don't skim it, read it.

3. **Follow component links out to the shared glossary when they point there.** A component
   used by only one type is described inline or in that type's own `components/` folder; a
   component shared across types is described once in the domain's `components/README.md`
   glossary and linked from every type that uses it, rather than restated. If a component
   link goes to `../../components/<name>.md`, read that file — it's the actual definition.

4. **Draft in the order the components are listed.** Include every `(required)` component.
   Include an `(optional)` one only if it earns its place for this specific document —
   the type file's "For this type" notes usually say when an optional component is worth
   it and when it isn't (e.g. skip Before/After for a backend-only change). Match the
   register of the worked examples: concrete and specific, not templated filler.

5. **Check the draft against the type's Pitfalls list before calling it done.** These are
   named because they're the failure mode a document of this shape drifts into by default
   (e.g. a PR summary that restates the diff instead of the reason) — they're the fastest
   self-review available.

6. **If nothing fits, say so.** If the document is a genuinely novel shape the catalog
   doesn't cover, don't force it into the nearest type. Draft it on its own merits and
   mention that it fell outside the catalog — that's useful signal for growing the catalog
   later, not a failure of this skill.
