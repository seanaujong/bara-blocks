# Software System

The highest level of abstraction in C4: something that delivers value to its users, built and
maintained as a single unit — typically one team, one repository, deployed together.

In a Context diagram this is the box in the center (in scope) or a box on the edge (an external
system you depend on but don't control). In a Container diagram, an external system is drawn the
same way — as a single box — while the system in scope is the one you zoom into.

> "Library Self-Checkout System" (in scope)
> "Payment Processor" (external — settles fines, but you don't own it)
