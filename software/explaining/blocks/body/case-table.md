# Case Table

A table, one row per case the subject handles, each named the way the reader meets it — the thing
in their hand, not the code path that handles it — and ending in what handles it. Lead with it when
the reader arrives holding one instance: explain the mechanism first and they're left asking how
many cases there are, and which one is theirs.

Give each question its own column, and split two that readers tend to conflate — whether a fine
shows on the receipt is a different question from whether it blocks checkout. When the reader has
already proposed an approach of their own, add it as a column marking each row it covers or can't
express; that shows which question it answers. Every row names its evidence, or says "none."

> | Scanned item                   | Receipt shows            | Checkout       | Handled by                                       |
> | ------------------------------ | ------------------------ | -------------- | ------------------------------------------------ |
> | With no fine                   | "Checked out."           | allowed        | `scan` — test `scan.test.kt`                     |
> | With an unpaid fine            | "You have a $2.50 fine." | caller decides | `scan` + `computeBalance` — test `fines.test.kt` |
> | That belongs to another branch | "Return to Eastside."    | allowed        | `scan` reads branch data — none                  |
