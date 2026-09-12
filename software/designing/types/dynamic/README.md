# Dynamic

> Shows how the blocks from a static diagram (Container or Component)
> collaborate at runtime to carry out one specific scenario — a user story, a feature, a use
> case. This is C4's answer to a sequence diagram, minus the strict lifeline layout. Use it
> sparingly: only for a flow that's genuinely complicated or that recurs often enough to be worth
> pinning down.

**Audience:** architects and developers.

## Blocks

### [Container](../../blocks/container.md) or [Component](../../blocks/component.md)

**For this type:** whichever static blocks the scenario actually touches, reused from a
Container or Component diagram — a Dynamic diagram doesn't introduce new structural blocks, it
narrates an existing structure.

> "Self-Checkout Kiosk App", "Checkout API", "Fines Repository"

### [Numbered Interaction](./blocks/numbered-interaction.md)

**For this type:** the one thing this diagram adds — an explicit order layered on top of the
existing relationships.

> 1. Kiosk App scans the item.
> 2. Checkout API checks for unpaid fines.
> 3. Checkout API records the checkout.

## Pitfalls

- Documenting every scenario — you should only document the primary success case and
  the edge cases that are needed to hold an invariant
