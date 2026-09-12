# Module Discovery

> Reconstructs a module's intended usage after the fact, from a module that
> already exists and was never given a [Module Contract](../module-contract/README.md) — common
> for vibe-coded code, where design emerged rather than being decided up front. Reads the module's
> own interface and its actual call sites as evidence, then decides what to commit to going
> forward. Not an audit against a known-correct answer — there often isn't one yet.

## Blocks

In the order they typically appear:

### [Interface](../../blocks/body/interface.md), observed

**For this type:** read back out of the existing implementation, not declared — everything
currently exported, whether or not it was meant to be public.

> `blankLineChunker`, `diffChunker`, `markdownChunker`, `codeChunker`, `commentSyntaxFor`,
> `computeTypeableIndices`, `typeableChunkIndices`, `adjacentTypeableChunk`,
> `typeableIndicesFromChunk`

### [Observed Usage](./blocks/observed-usage.md)

> `cli.tsx` imports only the format-detection group; `app.tsx` imports only the typing-path group.
> No production caller imports from both.

### [Inferred Boundary](./blocks/inferred-boundary.md)

> A document chunker and a typing-path index, already split at every real call site even though
> the file conflates them.

### [Decision and Rationale](../../blocks/opening/decision-and-rationale.md)

**For this type:** the "alternatives" are the different readings the evidence could support; the
decision is which one to commit to — and, going forward, write down as a Module Contract.

> "Split `chunker.ts` into two files along the line usage already drew, rather than leave the
> boundary implicit and load-bearing only by convention."

## Pitfalls

- Treating this as a verdict on misuse when no contract ever existed to violate — the honest frame
  is "deciding what the contract should be," not "catching a mistake."
- Inferring a boundary from the file's name or folder location instead of from what callers
  actually import — the two can (and here, did) disagree.
- Stopping at Observed Usage without reaching a Decision — a discovery that names the boundary but
  commits to nothing leaves the next reader to redo the same investigation.
