# Deployment

> Shows where container instances from a [Container](../container/README.md)
> diagram actually run, in one specific deployment environment (production, staging) — the answer
> to "where does this live, and what infrastructure sits around it?"

**Audience:** architects, developers, infrastructure/operations staff.

## Blocks

### [Deployment Node](./blocks/deployment-node.md)

**For this starter:** nested boxes representing the infrastructure a container instance runs on —
region, cluster, host, runtime.

> "AWS us-east-1" → "EKS Cluster" → "Checkout API Pod ×3"

### [Container](../../blocks/container.md), as an instance

**For this starter:** the same containers from the Container diagram, now shown as running instances
placed inside deployment nodes rather than as abstract boxes.

> "Checkout API Pod ×3" — three running instances of the same container, load-balanced.

### [Infrastructure Node](./blocks/infrastructure-node.md)

> "Load Balancer", "Firewall", "DNS"

### [Relationship](../../blocks/relationship.md)

> "Load Balancer" —routes traffic to→ "Checkout API Pod ×3"

## Pitfalls

- One diagram trying to cover every environment — production and staging usually differ enough
  (replica counts, managed vs. self-hosted) to deserve separate diagrams.
- Confusing a deployment node (where something runs) with a container (what runs) — a single
  container can map onto many deployment-node instances, and that multiplicity is the point of
  this diagram.
