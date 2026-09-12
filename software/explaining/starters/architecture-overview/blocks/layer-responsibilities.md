# Layer Responsibilities

One paragraph per layer or module, in prose, naming what it owns and what it deliberately doesn't.
This is the readable version of the [Layer Contracts](./layer-contracts.md) table that usually
follows it — a first-time reader learns the boundary here; the table is the compressed reference
a returning reader checks a change against.

> "The Checkout API is the only code that touches the network — it resolves a scan into a call
> against the Fines Repository and hands back a receipt. It doesn't decide whether an unpaid fine
> blocks checkout; that's the caller's job."
