# Module Contract

> Written when you deliberately design a module. States the one job the module owns, its public
> surface, and what must (or must not) hold for correct use — so a later caller has something to
> check their usage against, instead of having to reconstruct it from behavior. If you are exploring
> an undocumented module, try [Module Discovery](../module-discovery/README).

## Blocks

### [Purpose](./blocks/purpose.md)

> "Fines Repository — looks up and records a patron's unpaid fine balance."

### [Code Snippet](../../blocks/body/code-snippet.md)

**For this type:** one canonical call, showing the calling convention the Interface section only
described in the abstract.

### [Interface](../../blocks/body/interface.md)

**For this type:** the intended public surface, declared up front — signatures and types, not a
usage sample.

> `hasUnpaid(patronId: string): boolean`
> `balance(patronId: string): number`

### [Invariants](./blocks/invariants.md)

> - "A patron ID that doesn't exist returns a zero balance, never an error."
> - "Does not decide whether an unpaid fine blocks checkout — that's the caller's job."

> ```kotlin
> if (fines.hasUnpaid(patronId)) receipt.addWarning(fines.balance(patronId))
> ```
