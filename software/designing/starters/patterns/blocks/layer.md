# Layer

A horizontal slice of the system, distinguished by what it's allowed to depend on and/or what
vocabulary it speaks — not the same cut as a C4 [Container](../../../blocks/container.md) or
[Component](../../../blocks/component.md), which are drawn by process or module boundary
regardless of direction. [Layered Architecture](../layered-architecture/README.md) uses a stack of
these to state a one-way dependency rule; [Unidirectional Data Flow](../unidirectional-data-flow/README.md)'s
[Vocabulary Funnel](../unidirectional-data-flow/blocks/vocabulary-funnel.md) uses the same stack to
state which types are legal at each depth instead.

> "UI Layer", "Domain Layer", "Data Layer"
