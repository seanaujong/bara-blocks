# Observed Usage

The module's actual call sites, gathered as evidence — who imports what, and which parts of the
interface each caller actually touches. Not a summary or a guess; grep the real imports before
writing this section, the same way a test asserts on a run value instead of a remembered one.

> `cli.tsx` imports only `blankLineChunker`, `diffChunker`, `markdownChunker`, `codeChunker`,
> `commentSyntaxFor`. `app.tsx` imports only `computeTypeableIndices`, `typeableChunkIndices`,
> `adjacentTypeableChunk`, `typeableIndicesFromChunk`. No production caller imports from both
> groups.
