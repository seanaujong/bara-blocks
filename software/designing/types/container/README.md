# Container

> **At a glance.** Zooms into the one system from a [Context](../context/README.md) diagram to
> show the applications and data stores it's actually made of — the answer to "what gets
> deployed?" Still no code-level detail, but technology choices show up here for the first time.

**Audience:** technical people inside and outside the team — architects, developers, operations.

## Elements

### [Container](../../components/container.md) (required)

**For this type:** every container in the system's [boundary](../../components/boundary.md),
drawn as its own box with its technology named.

> "Self-Checkout Kiosk App" [React]
> "Checkout API" [Kotlin / Spring Boot]
> "Catalog Database" [PostgreSQL]

### [Person](../../components/person.md) (required)

> "Patron", "Librarian" — same people as the Context diagram, now shown talking to specific
> containers instead of the system as a whole.

### [Software System](../../components/software-system.md), external (optional)

> "Payment Processor" — still a single box; it's not your container to decompose.

### [Relationship](../../components/relationship.md) (required)

**For this type:** labeled with the technology or protocol, not just the action — this is what
tells a reader how the pieces actually talk.

> "Self-Checkout Kiosk App" —makes API calls to→ "Checkout API" [JSON/HTTPS]
> "Checkout API" —reads/writes→ "Catalog Database" [JDBC]

## Pitfalls

- Deployment detail (clustering, load balancers, environments) creeps in — that belongs on a
  [Deployment](../deployment/README.md) diagram instead.
- A container is really two (a server-side app that ships a real client-side app is two
  containers, not one) or two are really one (splitting by team rather than by process boundary).
- Relationships with no technology label — a reader can't tell HTTP from a message queue from a
  shared disk.
