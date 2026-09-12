# Layer Contracts

A table, one row per layer or module, naming what a caller may rely on (**guarantees**) and what
it must uphold in return (**assumes**). The same pattern a single
[Module Contract](../../module-contract/blocks/purpose.md)'s purpose-and-invariants pair states
for one module, repeated across every layer at once, so a reader can see the whole dependency
chain's promises in one place instead of module by module.

The rule this table exists to make checkable: fix a bug in the layer that *owns* the invariant it
violates, not the layer that merely surfaces it.

> | Layer             | Guarantees                                         | Assumes                                          |
> | ------------------ | --------------------------------------------------- | ------------------------------------------------- |
> | Fines Repository   | A lookup never mutates state.                       | Its database connection is already open.          |
> | Checkout API       | Never returns a fine balance for an unknown patron. | Patron ID passed in is already well-formed.       |
