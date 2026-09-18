# Architecture Overview

> Lays out the core vision of a project. This is the first document you should read to
> understand how the author wants you to use/contribute to the project. If you
> are trying to suggest a change/improvement, try writing a [Design Doc](../design-doc/README.md).

## Blocks

### [Summary](../../blocks/opening/summary.md)

**For this starter:** format varies — some open with a compact bulleted "at a glance" list, others
fuse the same claims into one dense opening paragraph before the detail. Either way, a skimming
reader should be able to extract the core claims without reading past this block.

> Bulleted:
> - Two halves: a structure (what may depend on what) and the invariants that structure protects.
> - Data flows one direction: adapter → app → pure modules → output. No upward references.
>
> Fused into a paragraph, same claims:
> The system is two halves — a structure (what may depend on what) and the invariants that
> structure protects — with data flowing one direction, adapter → app → pure modules → output,
> and no upward references.

### [Component](../../../designing/starters/c4/component/README.md) (or [Container](../../../designing/starters/c4/container/README.md))

**For this starter:** every layer or module named in prose should trace back to a box here.
Pick Component for a single-process system decomposed into modules;
pick Container if the system spans several deployable pieces.

> See [designing/starters/c4/component](../../../designing/starters/c4/component/README.md) for the
> block vocabulary this diagram is built from — Component, Container, Relationship.

### [Dynamic](../../../designing/starters/c4/dynamic/README.md), optional

**For this starter:** a numbered trace of the single most common runtime path through the layers
already drawn above (one keystroke, one simulation step) — not a rare edge case. Reuses the same
boxes; adds only the order.

> 1. A keystroke dispatches an action to the reducer.
> 2. The reducer returns new state.
> 3. Four hooks derive cheap view data from it.
> 4. The frame renders.

### [Unidirectional Data Flow](../../../designing/starters/patterns/unidirectional-data-flow/README.md) or [Layered Architecture](../../../designing/starters/patterns/layered-architecture/README.md), optional

**For this starter:** reach for one of these instead of (or alongside) Component/Dynamic when the
shape worth drawing is the state/event loop itself, or the layer-dependency rule the
[Discipline](./blocks/discipline.md) block below states in prose — a picture of "no upward
imports" is a stronger claim than the sentence.

### [Layer Responsibilities](./blocks/layer-responsibilities.md)

> "The Checkout API is the only code that touches the network... It doesn't decide whether an
> unpaid fine blocks checkout; that's the caller's job."

### [Layer Contracts](./blocks/layer-contracts.md)

> "Fines Repository guarantees a lookup never mutates state; it assumes its database connection
> is already open."

### [Enforcement Matrix](./blocks/enforcement-matrix.md)

> "A patron ID that doesn't exist returns a zero balance — held by a test or type"

### [Extension Guide](./blocks/extension-guide.md)

> "New fine type: add a variant to `FineKind`, handle it in `computeBalance`. The receipt
> formatter is unchanged."

### [Discipline](./blocks/discipline.md)

> "No upward imports. Pure functions over immutable data. The core never branches on which
> policy it's running under. If a proposal would break any of these, it's the proposal that's
> wrong, not the rules."

### [Change Triggers](./blocks/change-triggers.md)

> "Adding a new layer, a guarantee changing, or a relationship reversing all move this document
> out of date."

## Pitfalls

- Reaching for [Problem Statement](../../blocks/opening/problem-statement.md) or
  [Alternatives Considered](../design-doc/blocks/alternatives-considered.md) — this starter states an
  intended shape rather than arguing for one; those blocks belong to
  [Design Doc](../design-doc/README.md).
- Listing invariants without an Enforcement Matrix — an invariant with no test, type, or explicit
  "not enforced yet" is a hope, not a contract.
- Letting the diagram and the prose drift apart — if you change one, check the other, and check
  [Change Triggers](./blocks/change-triggers.md) for whether this edit is one of them.
