# Architecture Overview

> Declares the shape a project already has — not a problem being solved today, but the structure
> a reader should hold in their head before touching any layer or module. The reader is orienting
> themselves in an existing system, not deciding whether to approve one — that's what tells this
> type apart from a [Design Doc](../design-doc/README.md), which argues for a not-yet-built
> option to a not-yet-solved problem.

## Blocks

### [Summary](../../blocks/opening/summary.md)

**For this type:** usually a bulleted "at a glance" list rather than a paragraph — a reader
scans this before reading linearly, and each bullet should stand on its own as a claim.

> - Two halves: a structure (what may depend on what) and the invariants that structure protects.
> - Data flows one direction: adapter → app → pure modules → output. No upward references.

### [Component](../../../designing/types/component/README.md) (or [Container](../../../designing/types/container/README.md))

**For this type:** the load-bearing visual, not an optional add-on — every layer or module named
in prose should trace back to a box here. Pick Component for a single-process system decomposed
into modules; pick Container if the system spans several deployable pieces.

> See [designing/types/component](../../../designing/types/component/README.md) for the block
> vocabulary this diagram is built from — Component, Container, Relationship.

### [Layer Contracts](./blocks/layer-contracts.md)

> "Fines Repository guarantees a lookup never mutates state; it assumes its database connection
> is already open."

### [Enforcement Matrix](./blocks/enforcement-matrix.md)

> "A patron ID that doesn't exist returns a zero balance — held by a test, not a type."

### [Extension Guide](./blocks/extension-guide.md)

> "New fine type: add a variant to `FineKind`, handle it in `computeBalance`. The receipt
> formatter is unchanged."

### [Change Triggers](./blocks/change-triggers.md)

> "Adding a new layer, a guarantee changing, or a relationship reversing all move this document
> out of date."

## Pitfalls

- Reaching for [Problem Statement](../../blocks/opening/problem-statement.md) or
  [Alternatives Considered](../design-doc/blocks/alternatives-considered.md) — this type declares
  a settled shape rather than arguing for one; those blocks belong to
  [Design Doc](../design-doc/README.md).
- Listing invariants without an Enforcement Matrix — an invariant with no test, type, or explicit
  "not enforced yet" is a hope, not a contract.
- Letting the diagram and the prose drift apart — if you change one, check the other, and check
  [Change Triggers](./blocks/change-triggers.md) for whether this edit is one of them.
