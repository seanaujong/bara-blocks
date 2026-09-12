---
name: read
description: >
  Reverse of `write`: decomposes an existing, already-written document into its primary claim,
  secondary claims (one per section), and evidence sentences, then checks that structure against
  the matching bara-blocks catalog type. Use this on a finished document — a README, design doc,
  PR description, essay — to audit whether its claims are actually supported, or to find gaps in
  the bara-blocks catalog itself. What school calls reading comprehension, applied on purpose.
---

# Read with bara blocks

School calls this **reading comprehension**: find the main idea, find how each paragraph
supports it, find the details that prove each point. This skill is that process applied to a
finished document, and it's the mirror of `write` — instead of going catalog → draft, it goes
document → claim structure → catalog.

## Why decompose before comparing

Every document has a claim structure whether or not it was written with bara-blocks:

- a **primary claim** — what the whole document exists to support, usually named by the title
- **secondary claims** — what each section exists to support the primary claim
- **evidence** — the sentences under each section that actually do the supporting work

Decomposing this first, then comparing it to the catalog, answers two different questions at
once: is this particular document actually well-supported (does the evidence hold up its
claims)? And does the catalog's type structure cover real writing (what did this document need
that no type names, and what did a listed block never get used for)?

## Steps

1. **Read the whole document once before decomposing anything.** Don't derive the primary claim
   from the title alone — verify it against what the sections actually do. A title can promise
   something the body doesn't deliver.

2. **Name the primary claim as one sentence.** What does this entire document exist to support?
   State it as a claim — a sentence that could be false — not a topic label.

3. **Name one secondary claim per header** (or per major topic shift, if the document has no
   headers). Phrase each relative to the primary claim, not as a restatement of the header text —
   a header reading "Layer contracts" becomes the claim "each layer has an explicit guarantee and
   assumption, and a bug belongs to the layer that owns the invariant it breaks."

4. **Pull the evidence sentences under each header** — the sentences doing the actual supporting
   work, not transitions or restatements of the claim itself. If a header has no sentence that
   would change a skeptical reader's mind, the secondary claim is asserted, not supported — say
   so; that's a finding about the document, not something to paper over.

5. **Find the closest domain and type in the catalog**, the same way `write`'s steps 1-2 would if
   you were about to draft this document from scratch: read the domain's `README.md`, then the
   specific type's `README.md`. Don't force a type that's a poor fit — if two are close, or none
   are, say so (step 7 covers this).

6. **Compare the secondary claims against that type's listed blocks.**
   - **Blocks the type lists that this document skips** — ask why. A settled reference doc
     skipping Alternatives Considered is a different finding than a persuasive essay skipping a
     counterargument; name which it looks like.
   - **Secondary claims that map to no listed block** — celebrate this, don't flag it as a
     shortfall. It usually means the author was thinking clearly about something specific to
     this document, not that the document or the catalog is missing something. Name the section
     plainly (an enforcement matrix, a lesson-learned aside, …); only treat it as a candidate new
     block once the same shape recurs, unprompted, in an unrelated document — see
     [why the catalog isn't exhaustive](../../README.md#the-catalog-isnt-exhaustive). Most novel
     sections should just stay novel.

7. **If nothing in the catalog is a plausible match, say so.** Report the primary/secondary/
   evidence decomposition on its own — a document falling outside the catalog entirely is a
   stronger version of the same good sign as step 6's second bullet, not a failure of this skill
   or a hole to patch (mirrors `write`'s own step 6).

## Reporting the result

Report the claims on their own before bringing in evidence — the two answer different questions,
and merging them forces the reader to hunt for the argument's shape inside its support:

1. **The claim structure alone.** Primary claim, then the secondary claims as a flat list or
   outline, each still phrased as a claim (per step 3) — no evidence yet. This is the document's
   argument compressed to its skeleton; a reader should be able to tell from this alone whether
   the document holds together, before seeing whether it's actually backed up.
2. **The same structure with evidence attached.** Repeat it — a table or a list, one row or
   entry per secondary claim — pairing each with its evidence sentences (or noting it has none,
   per step 4).

Follow both with the catalog comparison: matches, blocks the document skipped, and sections the
catalog doesn't name. Keep evidence to the sentences that actually do the work — quoting every
sentence under a header defeats the point of comprehension being a compression.
