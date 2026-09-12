# Deployment

> **At a glance.** Shows where container instances from a [Container](../container/README.md)
> diagram actually run, in one specific deployment environment (production, staging) — the answer
> to "where does this live, and what infrastructure sits around it?"

**Audience:** architects, developers, infrastructure/operations staff.

## Elements

### [Deployment Node](./components/deployment-node.md) (required)

**For this type:** nested boxes representing the infrastructure a container instance runs on —
region, cluster, host, runtime.

> "AWS us-east-1" → "EKS Cluster" → "Checkout API Pod ×3"

### [Container](../../components/container.md), as an instance (required)

**For this type:** the same containers from the Container diagram, now shown as running instances
placed inside deployment nodes rather than as abstract boxes.

> "Checkout API Pod ×3" — three running instances of the same container, load-balanced.

### [Infrastructure Node](./components/infrastructure-node.md) (optional)

> "Load Balancer", "Firewall", "DNS"

### [Relationship](../../components/relationship.md) (required)

> "Load Balancer" —routes traffic to→ "Checkout API Pod ×3"

## Pitfalls

- One diagram trying to cover every environment — production and staging usually differ enough
  (replica counts, managed vs. self-hosted) to deserve separate diagrams.
- Confusing a deployment node (where something runs) with a container (what runs) — a single
  container can map onto many deployment-node instances, and that multiplicity is the point of
  this diagram.
