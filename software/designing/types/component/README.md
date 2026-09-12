# Component

> **At a glance.** Zooms into one container from a [Container](../container/README.md) diagram to
> show the components it's built from — the answer to "how are the modules inside this thing used
> and wired together?" C4 recommends drawing this only where it adds value, and only for
> containers whose internal structure isn't obvious from the code.

**Audience:** architects and developers.

## Elements

### [Component](../../components/component.md) (required)

**For this type:** every component inside the one container in scope, drawn as its own box.

> "Checkout Controller", "Fines Repository", "Receipt Formatter" — all inside the Checkout API.

### [Container](../../components/container.md) (required)

**For this type:** sibling containers the components talk to, drawn as single boxes — you don't
decompose a container you're not zoomed into.

> "Catalog Database" — the Fines Repository reads and writes it, but it isn't broken into
> components here.

### [Person](../../components/person.md) / [Software System](../../components/software-system.md), external (optional)

> Anyone or anything outside the container that a component talks to directly.

### [Relationship](../../components/relationship.md) (required)

> "Checkout Controller" —calls→ "Fines Repository"
> "Fines Repository" —reads/writes→ "Catalog Database" [JDBC]

## Related

Below Component is **Code** — class diagrams generated from the implementation. C4 treats this as
optional and usually skipped: your IDE already draws it on demand, so hand-maintaining it tends
not to be worth the upkeep.

## Pitfalls

- Drawing this for a container whose structure is already obvious from its file layout — the
  diagram should earn its keep, not exist because a diagram exists for every other level.
- Naming a component after a class instead of a responsibility — a component is a grouping, not
  one implementation class.
