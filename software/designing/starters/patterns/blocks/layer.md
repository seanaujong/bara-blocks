# Layer

A horizontal slice of the system, distinguished by what it's allowed to depend on and/or what
vocabulary it speaks — not the same cut as a C4 [Container](../../../blocks/container.md) or
[Component](../../../blocks/component.md), which are drawn by process or module boundary
regardless of direction. [Layered Architecture](../layered-architecture/README.md) uses a stack of
these to state a one-way dependency rule; [Vocabulary Boundary](../vocabulary-boundary/README.md)
uses the same stack to state which types are legal at each depth instead — a different invariant,
even though both stacks are usually drawn with the same layer names.

> "UI Layer", "Domain Layer", "Data Layer"
