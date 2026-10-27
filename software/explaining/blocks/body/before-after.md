# Before/After

The same place in the system on either side of a change, so the reader can see the difference
instead of inferring it from prose. The artifact is whatever medium actually shows the state to
that reader — a screenshot or clip for a UI, a log line, error message, or metric reading for a
developer.

Render each half from what ships, never a mock-up: pull the text from the template or format
string that produces it, and say where it came from. An invented message loses the reader who has
seen the real one. The one exception is an "after" that isn't built yet — label it as unbuilt,
because a real before beside an aspirational after, presented alike, asserts a state that doesn't
exist.

Hold everything fixed except the change: the same input, the same command, the same width and the
same surrounding text in both halves. A pair that also swaps the example shows two changes, and
any formatting asymmetry reads as part of the change. If the "before" survives the change, say so —
the pair is *this* → *this plus that*, and a bare pair reads as a replacement, so the reader infers
a removal you aren't making.

> Before: the checkout screen shows a spinner for up to 90 seconds.
> After: the same screen shows a confirmed checkout in under 15 seconds.
>
> Before, scanning `9780143127550` on a card with a fine prints "Checked out." After, the same scan
> still prints "Checked out." and adds "You have a $2.50 fine." — both from `receiptLines` in
> `receipt.kt`.
