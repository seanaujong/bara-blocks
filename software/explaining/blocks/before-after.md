# Before/After

The same place in the system on either side of a change, so the reader can see the difference
instead of inferring it from prose. The artifact is whatever medium actually shows the state to
that reader — a screenshot or clip for a UI, a log line, error message, or metric reading for a
developer. Only worth including when the two states are observably different — a change with no
visible or logged effect has no "after" worth capturing.

> Before: the checkout screen shows a spinner for up to 90 seconds.
> After: the same screen shows a confirmed checkout in under 15 seconds.
