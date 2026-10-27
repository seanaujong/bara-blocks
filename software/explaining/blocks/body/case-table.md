# Case Table

A table, one row per case the subject handles, each named the way the reader meets it — the thing in
their hand, not the code path that handles it — and ending in what handles it. Lead with it when the
reader arrives holding one instance: explain the mechanism first and they're left asking how many
cases there are, and which one is theirs. A table also makes disagreement cheap: "your approach
covers *with no fine* and *that belongs to another branch*" is a review comment, while a paragraph
gets accepted or rejected whole.

List only cases that exist — ones the reader actually meets today. A hypothetical row inflates the
subject's reach; put an expected case in prose, labelled as expected. A presentation choice is a
value in a column, not a case: a row for "opens in a new tab" duplicates whichever case it sits in.

Give each question its own column, and split two that readers tend to conflate — whether a fine
shows on the receipt is a different question from whether it blocks checkout. When the reader has
already proposed an approach of their own, add it as a column marking each row it covers or can't
express; that shows which question it answers. When adoption is opt-in, add a column for how
each case is solved today, beside the new design — the reader's choice is between those two
columns, not between the design and nothing. Every row names its evidence, or says "none."

> | Scanned item                   | Receipt shows            | Checkout       | Handled by                                       |
> | ------------------------------ | ------------------------ | -------------- | ------------------------------------------------ |
> | With no fine                   | "Checked out."           | allowed        | `scan` — test `scan.test.kt`                     |
> | With an unpaid fine            | "You have a $2.50 fine." | caller decides | `scan` + `computeBalance` — test `fines.test.kt` |
> | That belongs to another branch | "Return to Eastside."    | allowed        | `scan` reads branch data — none                  |
