# Change Triggers

Names the specific events that make this document stale, so a reader can tell whether it still
matches reality without re-deriving the whole structure from the code. Pairs with a standing rule
for which side wins when doc and code disagree — usually: update the doc first, then make the
code match, so the doc stays the contract rather than a lagging description of it.

> - Adding a new layer or module to the dependency chain.
> - A layer's guarantee changing (e.g., a lookup that used to throw now returns a default).
> - A relationship's direction reversing.
