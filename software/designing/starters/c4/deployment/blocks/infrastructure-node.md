# Infrastructure Node

Supporting infrastructure that isn't a place your own code runs, but still shapes how a container
instance is reached — a load balancer, a firewall, a DNS entry. Drawn alongside deployment nodes
so the diagram shows the whole path a request takes, not just the endpoints.

> "Load Balancer" — sits in front of the "Checkout API Pod ×3", not inside any one of them.
