# Deployment Node

Where a container instance actually runs: a physical server, a virtual machine, a container
runtime (Docker), a database engine, an execution environment. Deployment nodes nest — a VM inside
a data center, a Docker container inside that VM — and one deployment environment (production,
staging) gets its own diagram.

> "AWS us-east-1" → "EKS Cluster" → "Checkout API Pod ×3"
