# System Context

> The widest-zoom C4 diagram: your system as one box, surrounded by the people
> who use it and the other systems it talks to. No internals, no technology choices — this is the
> "what is this thing, at all" view.

**Audience:** everybody, technical and non-technical, inside and outside the team.

## Blocks

### [Software System](../../blocks/software-system.md)

**For this starter:** the one system in scope, drawn as a single box. What's inside it is out of
scope at this zoom level — that's the [Container](../container/README.md) diagram's job.

> "Library Self-Checkout System"

### [Person](../../blocks/person.md)

> "Patron" — checks a book out without a staffed register.
> "Librarian" — resolves exceptions the machine can't handle.

### [Software System](../../blocks/software-system.md), external

**For this starter:** other systems, drawn as boxes outside the boundary. You show *that* a
relationship exists, not how.

> "Payment Processor" — settles fines.

### [Relationship](../../blocks/relationship.md)

> "Patron" —checks out books using→ "Library Self-Checkout System"
> "Library Self-Checkout System" —sends fine payments to→ "Payment Processor"

## Related

Need to show several systems and how they relate to each other, with none of them singled out as
"the" system in scope? That's a **System Landscape** diagram — the same blocks, drawn without a
boundary around any one system.

## Pitfalls

- Technology creeps in ("React app," "Postgres") — that belongs at the Container level or below.
- A person is drawn as a system, or a system as a person — keep the two block types distinct
  even when a "system" is really just another team's API.
- Too many external systems drown out the one system this diagram is supposed to be about.
