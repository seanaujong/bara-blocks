# Bara Blocks

I love finding patterns in my work; it turns out writing has many patterns.
School teaches you a structured way to write - what kind of essay you should be writing,
and the building blocks that make up these essays. In my software development career,
I've also discovered building blocks for designing and explaining my code.

> Bara Blocks is named after the Bara Bara no Mi from One Piece.
> Just like Captain Buggy, I want to split my work into independently controllable pieces.

## Install

Bara Blocks is a Claude Code plugin — add the marketplace and install, no cloning required:

```
/plugin marketplace add seanaujong/bara-blocks
/plugin install bara-blocks@bara-blocks
```

Run `/write` (or ask for it by name) before drafting or restructuring a substantive document: a
README, design doc, PR description, developer guide, essay. Run `/read` on an already-written
document to decompose it into its primary claim, secondary claims, and evidence, and check that
structure against the catalog. Claude Code may also reach for either on its own when a task
clearly calls for it, but don't count on that alone.

**Want Claude Code to reach for one more consistently, without asking each time?** Tell it once.
Add a note to your memory (or `CLAUDE.md`) that states this as a standing preference, not a
maybe — something like:

> I prefer bara-blocks for any substantive document I ask you to write — a README, design doc,
> PR description, developer guide, or essay. Read its catalog and follow its structure before
> drafting or restructuring one, without waiting for me to ask.

No Claude Code? The docs stand on their own — start with the domains below.

## Domains

- **[`essay/`](./essay/)** — the essay types taught in school (narrative, expository, persuasive,
  compare-contrast, …)
- **[`software/`](./software/)** — the structures for both designing and explaining software

## The catalog isn't exhaustive

These templates name the blocks that recur often enough to be worth naming — they're not a
checklist a document has to fully satisfy. A document that needs a section none of these blocks
name is usually the author thinking clearly about something specific to their case, not a defect
in the document or a hole in the catalog. Name what it needed and move on with pride, don't rush
to patch the catalog around it — promote it to a new block only once the same shape shows up
again, unprompted, in an unrelated document. Most novel sections should just stay novel.
