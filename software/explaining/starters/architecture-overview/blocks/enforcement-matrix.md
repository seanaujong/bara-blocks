# Enforcement Matrix

A table, one row per invariant, naming what actually holds it: a **type** the compiler checks, a
**test** that fails if it breaks, or **prose** — the last resort, for invariants a type or test
can't express. Ranked in that order on purpose: a type is strongest, a test is next, prose is
weakest because nothing stops it from rotting unnoticed.

Say so plainly when an invariant isn't held by anything yet ("tolerated," "not enforced") rather
than listing it beside the enforced ones as if it were equally safe — naming the gap is the point.

> | Invariant                                                      | Held by                                                  |
> | ---------------------------------------------------------------- | ----------------------------------------------------------- |
> | A patron ID that doesn't exist returns a zero balance             | test — `fines.test.ts`                                       |
> | Every `FineKind` has a receipt line renderer                     | type — exhaustive `Record<FineKind, Renderer>`               |
> | Two branches never charge the same patron for the same fine twice | prose — no compiler or test check exists yet                |
