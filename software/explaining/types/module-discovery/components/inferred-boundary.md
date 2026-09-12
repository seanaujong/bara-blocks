# Inferred Boundary

The shape the observed interface and observed usage add up to — a hypothesis about what the
module is actually for, read back out of the evidence rather than assumed from its name or file
location. Often reveals that a single file is really two modules already split at every real call
site, or that one caller is reaching for something no other caller needs.

> `chunker.ts`'s own usage already splits along a line the file doesn't: a document chunker (text
> → labeled ranges), used only by the adapter edge, and a typing-path index (ranges → which
> positions are typeable), used only by the render layer. `docs/rendering.md` independently
> confirms the same split ("the engine never sees `kind` or `spans`").
