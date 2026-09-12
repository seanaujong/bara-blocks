# Invariants

A list of what must hold for the module to be used correctly — and, in the same list, what it
explicitly does not do. Both kinds are the same job: naming a boundary condition before a caller
finds it by accident. A "must hold" invariant protects the module from a caller violating an
assumption; a "does not do X" entry protects the module from a caller stretching it to cover
something it was never designed to own.

> - "A patron ID that doesn't exist returns a zero balance, never an error — checkout can't stop
>   to handle an exception."
> - "Fine amounts are always non-negative."
> - "Does not decide whether an unpaid fine blocks checkout — that's the caller's job."
