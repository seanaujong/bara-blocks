# Module Contract

> Written when you deliberately design a module — meant to be used from here on
> out, alongside the code, not after the fact. States the one job the module owns, its public
> surface, and what must (or must not) hold for correct use — so a later caller has something to
> check their usage against, instead of having to reconstruct it from behavior (see
> [Module Discovery](../module-discovery/README.md), the type for when that record doesn't exist).

## Blocks

In the order they typically appear:

### [Purpose](./blocks/purpose.md)

> "Fines Repository — looks up and records a patron's unpaid fine balance."

### [Interface](../../blocks/body/interface.md)

**For this type:** the intended public surface, declared up front — signatures and types, not a
usage sample.

> `hasUnpaid(patronId: string): boolean`
> `balance(patronId: string): number`

### [Invariants](./blocks/invariants.md)

> - "A patron ID that doesn't exist returns a zero balance, never an error."
> - "Does not decide whether an unpaid fine blocks checkout — that's the caller's job."

### [Code Snippet](../../blocks/body/code-snippet.md)

**For this type:** one canonical call, showing the calling convention the Interface section only
described in the abstract.

> ```kotlin
> if (fines.hasUnpaid(patronId)) receipt.addWarning(fines.balance(patronId))
> ```

## Pitfalls

- A purpose broad enough to justify adding anything to the module later — if it can't rule
  anything out, it isn't doing its job.
- Invariants that restate the type signature ("takes a string") instead of a real constraint the
  type system doesn't already enforce.
- Writing this once at creation and never updating it — a contract that drifts from the code is
  worse than no contract, because a reader will trust it.
