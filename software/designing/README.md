# Designing Software

> Software architecture drawn at the right zoom level for the question you're
> actually asking, using the [C4 model](https://c4model.com/): what is this system and who uses
> it (Context), what gets deployed (Container), how are its modules used and wired together
> (Component) — plus how a specific scenario plays out at runtime (Dynamic) and where it actually
> runs (Deployment).

## Starters

In order of zoom, widest first:

- **[System Context](./starters/context/README.md)** — the system as one box, its users, and the
  other systems it talks to.
- **[Container](./starters/container/README.md)** — the applications and data stores the system is
  made of; what actually gets deployed.
- **[Component](./starters/component/README.md)** — the modules inside one container and how
  they're used and wired together.
- **[Dynamic](./starters/dynamic/README.md)** — how those blocks collaborate at runtime for one
  scenario.
- **[Deployment](./starters/deployment/README.md)** — where those containers actually run, in a
  given environment.

## Blocks

**[blocks/](./blocks/README.md)** is the shared glossary — Person, Software System,
Container, Component, Relationship, Boundary — each described once here rather than re-explained
on every starter's page.

## Further reading

- [c4model.com](https://c4model.com/) — the source for this domain's vocabulary and diagram types.
- [The C4 model for visualising software architecture (Simon Brown)](https://c4model.com/#thumbnails)
