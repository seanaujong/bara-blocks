# Design Doc

> **At a glance.** Proposes a solution before it's built: what's wrong, what options exist, which
> one wins and why. The reader is deciding whether to approve the approach, not reviewing finished
> code — so the point isn't just "an alternative existed," but why each one wins or loses on the
> tradeoffs that actually matter here.

## Blocks

In the order they typically appear:

### [Problem Statement](../../blocks/problem-statement.md)

> "Checking out a book requires a staffed register, which bottlenecks at peak hours and doesn't
> scale to more branches without adding staff."

### [Alternatives Considered](./blocks/alternatives-considered.md)

> "Keep the staffed register and add a second one at peak hours — cheaper to build, but doesn't
> reduce headcount and still bottlenecks at the busiest times."

### [Decision and Rationale](../../blocks/decision-and-rationale.md)

> "Self-checkout kiosks: highest upfront cost, but the only option that removes the register
> bottleneck entirely and scales to more branches without adding staff."

### [Summary](../../blocks/summary.md)

**For this type:** often placed first as a TL;DR for a skimming reader, in addition to (not
instead of) the fuller decision and rationale later in the doc.

> "Proposing self-checkout kiosks to remove the register bottleneck at peak hours."

## Pitfalls

- One alternative that's obviously worse, included only to make the chosen option look good.
- A decision with no rationale tied to a specific tradeoff — "we chose X" without saying why X
  beat the alternatives on the dimensions that mattered.
- Skipping the problem statement and starting from the solution, leaving a reader unable to judge
  whether the proposed fix actually addresses the real problem.
