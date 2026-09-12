# Discipline

A short, numbered list of rules in priority order — not invariants about what the system does
today, but rules a future change must honor. Distinct from the
[Enforcement Matrix](./enforcement-matrix.md): that table says how today's invariants are held;
this list is the smaller set of design principles used to judge tomorrow's proposals, and most of
today's invariants already follow from it.

Closes with a standing verdict, stated once so it doesn't need repeating per invariant: if a
proposed change would break one of these rules, the change is what's wrong, not the rule.

> In priority order:
> 1. No upward imports — a layer never imports from the layer that composes it.
> 2. Pure functions over immutable data — side effects live only at the edges.
> 3. The core never branches on which policy, mode, or source it's running under.
>
> If a proposal would break any of these, it's the proposal that's wrong, not the rules.
