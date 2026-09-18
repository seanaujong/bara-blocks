# Designing Software

> Software architecture drawn at the right zoom level for the question you're actually asking.
> Most of this domain is the [C4 model](https://c4model.com/): what is this system and who uses
> it (Context), what gets deployed (Container), how are its modules used and wired together
> (Component) — plus how a specific scenario plays out at runtime (Dynamic) and where it actually
> runs (Deployment). Alongside it sit a few **Patterns** — smaller, single-diagram idioms that
> answer a different question C4 doesn't: not "what are the boxes," but "what runtime contract or
> vocabulary boundary holds between them, on every frame."

## Starters

### [C4](./starters/c4/)

In order of zoom, widest first:

- **[System Context](./starters/c4/context/README.md)** — the system as one box, its users, and
  the other systems it talks to.
- **[Container](./starters/c4/container/README.md)** — the applications and data stores the
  system is made of; what actually gets deployed.
- **[Component](./starters/c4/component/README.md)** — the modules inside one container and how
  they're used and wired together.
- **[Dynamic](./starters/c4/dynamic/README.md)** — how those blocks collaborate at runtime for one
  scenario.
- **[Deployment](./starters/c4/deployment/README.md)** — where those containers actually run, in a
  given environment.

### [Patterns](./starters/patterns/)

Not a zoom level — each of these can sit at any C4 zoom, drawn on its own when the point is the
contract itself rather than the boxes:

- **[Unidirectional Data Flow](./starters/patterns/unidirectional-data-flow/README.md)** — the
  cyclic contract between a state holder and its UI: state flows one way, events flow the other,
  and it holds on every frame, not just for one scenario.
- **[Layered Architecture](./starters/patterns/layered-architecture/README.md)** — a fixed
  dependency direction between layers (UI → Domain → Data), with state and events flowing back up
  the opposite way.

## Blocks

**[blocks/](./blocks/README.md)** is the shared glossary — Person, Software System,
Container, Component, Relationship, Boundary — each described once here rather than re-explained
on every starter's page.

## Further reading

- [c4model.com](https://c4model.com/) — the source for the C4 starters' vocabulary and diagram
  types.
- [The C4 model for visualising software architecture (Simon Brown)](https://c4model.com/#thumbnails)
- [Guide to app architecture (developer.android.com)](https://developer.android.com/topic/architecture) —
  the source for the Patterns starters.
