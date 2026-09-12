# Dynamic

> **At a glance.** Shows how the elements from a static diagram (Container or Component)
> collaborate at runtime to carry out one specific scenario — a user story, a feature, a use
> case. This is C4's answer to a sequence diagram, minus the strict lifeline layout. Use it
> sparingly: only for a flow that's genuinely complicated or that recurs often enough to be worth
> pinning down.

**Audience:** architects and developers.

## Elements

### [Container](../../components/container.md) or [Component](../../components/component.md) (required)

**For this type:** whichever static elements the scenario actually touches, reused from a
Container or Component diagram — a Dynamic diagram doesn't introduce new structural elements, it
narrates an existing structure.

> "Self-Checkout Kiosk App", "Checkout API", "Fines Repository"

### [Numbered Interaction](./components/numbered-interaction.md) (required)

**For this type:** the one thing this diagram adds — an explicit order layered on top of the
existing relationships.

> 1. Kiosk App scans the item.
> 2. Checkout API checks for unpaid fines.
> 3. Checkout API records the checkout.

## Pitfalls

- Documenting every scenario — most flows are boring enough to skip; draw this only for the ones
  that surprise a reader.
- Introducing an element that doesn't already exist on a static diagram — that's a sign the static
  diagram is missing something, not that this diagram gets to invent one.
- Numbering that doesn't match the actual call order, which is worse than no diagram at all.
