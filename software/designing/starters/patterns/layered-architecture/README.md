# Layered Architecture

> Google's recommended app architecture stack: a fixed dependency direction between
> [layers](../blocks/layer.md) — UI depends on Domain, Domain depends on Data, never the reverse —
> with [state and events](../unidirectional-data-flow/README.md) flowing back up the opposite way
> at every boundary. The same "no upward imports" rule a [Discipline block](../../../../explaining/starters/architecture-overview/blocks/discipline.md)
> would state in prose, drawn instead.

**Audience:** developers deciding which layer new code belongs in, or reviewing whether it does.

## Blocks

### [Layer](../blocks/layer.md)

> "UI Layer", "Domain Layer (optional)", "Data Layer"

### [Relationship](../../../blocks/relationship.md), depends-on only

**For this starter:** always drawn top to bottom, never the reverse — a dependency arrow pointing
up is the one thing this diagram exists to rule out.

> "UI Layer" —depends on→ "Domain Layer" —depends on→ "Data Layer"

```
┌────────────────────────────────────────────────┐
│ UI Layer                                       │
│ UI elements + state holders (ViewModel)        │
└────────────────────────────────────────────────┘
                         │ depends on
                         ▼
┌────────────────────────────────────────────────┐
│ Domain Layer (optional)                        │
│ reusable business logic (use cases)            │
└────────────────────────────────────────────────┘
                         │ depends on
                         ▼
┌────────────────────────────────────────────────┐
│ Data Layer                                     │
│ Repositories: single source of truth           │
│ per data type, backed by local/remote sources  │
└────────────────────────────────────────────────┘
```

## Pitfalls

- Skipping the Domain layer's optionality note — for a simple screen, UI talking directly to Data
  is a legitimate choice, not a violation, as long as nothing depends upward afterward.
- Drawing a dependency arrow upward "just this once" — the diagram's only claim is that this never
  happens; one exception and it's a different diagram.
- Confusing this with a C4 [Container](../../c4/container/README.md) or
  [Component](../../c4/component/README.md) diagram — those show arbitrary many-to-many wiring;
  this shows one rule (dependencies point one way) that a Container/Component diagram doesn't
  itself enforce.
