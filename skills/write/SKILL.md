---
name: write
description: >
  Dispatches into the bara-blocks catalog of writing building blocks (domain -> starter ->
  blocks) before drafting or restructuring any substantive document meant to be read
  later on its own — a README, design doc, PR/issue description, architecture or diagram
  writeup, developer guide, module contract, product walkthrough, or an essay.
---

# Write with bara blocks

Bara-blocks is a catalog of writing patterns, organized identically in two domains:
**`essay/`** (the essay starters taught in school) and **`software/`** (designing and
explaining software). Each domain breaks into **starters** (e.g. a PR description, a System
Context diagram, a persuasive essay) — a starting point for that document, not a checklist it
must fully satisfy — and each starter breaks into **blocks**: small, named, reusable pieces
with one job (a thesis statement, a decision-and-rationale, a test plan). This skill's job is
to route you to the right starter before you draft, not to reproduce the catalog's content
here — the catalog changes over time, so always read the files fresh rather than relying on
what's summarized below.

## Why dispatch instead of freestyling

Every starter file in this catalog already answers the three questions that actually decide a
document's shape:

- who is this for?
- what does the reader want to know?
- which visual blocks best support the primary claim?

## Steps

1. **Pick the domain.** Software work almost always means `software/`. Within it, ask: is
   this *showing what a system looks like* (a diagram/architecture artifact) or *explaining
   what it does, how to use it, or why it changed* (prose for a reader)? The former is
   `software/designing/`, the latter `software/explaining/`. Read that domain's own
   `README.md` first — it lists the current starters and a one-line job for each:
   - `essay/README.md`
   - `software/designing/README.md`
   - `software/explaining/README.md`

2. **Read the specific starter's `README.md`.** Every starter file follows the same shape:
   an opening blockquote naming the reader and the job, an ordered list of blocks in the
   order they typically appear with a short worked example, and a closing "Pitfalls"
   list. This is the actual structure to draft against — don't skim it, read it.

3. **Follow block links out to the shared glossary when they point there.** A block used
   by only one starter is described inline or in that starter's own `blocks/` folder; a
   block shared across starters is described once in a `blocks/README.md` glossary — the
   domain's own, or a narrower one shared by a group of related starters — and linked from
   every starter that uses it, rather than restated. If a block link climbs out of the
   current starter's folder to a `blocks/<name>.md`, read that file — it's the actual
   definition.

4. **Fill out every block the starter lists.** Draft them in
   the order given. A "For this starter" note says how to write that block for this
   document (its register, its content).

5. **Then browse the wider blocks catalog for anything else that would help.** The
   starter's list is a starting point, not a fence — blocks are usable at your discretion
   wherever they strengthen the primary claim. Check the domain's shared glossary
   (`blocks/README.md`), other starters' blocks, and — for a `software/explaining/`
   document especially — `software/designing/`'s diagram blocks (a Container, Component,
   or Dynamic diagram often makes a structural claim visible in a way prose can't). Add
   what genuinely helps; don't force one in for its own sake. If a visual is going in as
   ASCII art, use the `ascii-diagram` skill.

6. **If nothing fits, say so — and don't force it.** A document needing something the catalog
   doesn't name is usually a sign the author was thinking clearly about their specific case, not
   a defect to fix. Draft it on its own merits and name what it needed instead of the nearest
   starter. Resist growing the catalog to absorb it on the spot — see
   [why the catalog isn't exhaustive](../../README.md#the-catalog-isnt-exhaustive). Most novel
   shapes should just stay novel.
