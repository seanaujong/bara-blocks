# Extension Guide

One entry per common kind of change, naming the single place it should be made and what stays
untouched. Answers "if I want to do X, where exactly do I touch this system?" for a reader about
to modify it — distinct from a [Step](../../../blocks/body/step.md), which walks a user through
*using* the system as it stands, not changing it.

> - **New fine type** (e.g., a lost-item fee): add a variant to `FineKind`, handle it in
>   `computeBalance`'s switch. The receipt formatter is unchanged — it already reads `label` and
>   `amount` off any `FineKind`.
> - **New branch**: add a row to the `branches` table. No code change — routing already reads
>   branch data, not a hardcoded list.
