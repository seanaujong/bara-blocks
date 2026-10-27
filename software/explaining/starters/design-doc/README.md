# Design Doc

> Proposes a solution before it's built: what's wrong, what options exist, which
> one wins and why. The reader is deciding whether to approve the approach, not reviewing finished
> code — so the point isn't just "an alternative existed," but why each one wins or loses on the
> tradeoffs that actually matter here.

## Blocks

### [Summary](../../blocks/opening/summary.md)

**For this starter:** often placed first as a TL;DR for a skimming reader, in addition to (not
instead of) the fuller decision and rationale later in the doc.

> "Proposing self-checkout kiosks to remove the register bottleneck at peak hours."

### [Problem Statement](../../blocks/opening/problem-statement.md)

> "Checking out a book requires a staffed register, which bottlenecks at peak hours and doesn't
> scale to more branches without adding staff."

### [Documents Consulted](../../blocks/body/documents-consulted.md), optional

**For this starter:** when the proposal draws on existing docs, code, or research — an agent's plan
almost always does. Tagged, so the Contrasts and the Decision can cite them.

> - **`PITCH`** — `kiosk-proposal.md` (branch ops, 2024; written to win budget): "Kiosks remove
>   the register bottleneck at peak hours."
> - **`COSTS`** — `ops-costs.md` (finance, current quarter): "A kiosk costs $1,200 a year to
>   maintain; staffing a second register costs $38,000."

### [Contrasts](../../blocks/body/contrasts.md), optional

**For this starter:** right before the decision, so each contrast is fresh when the decision cites
it.

> - **Running cost** — maintenance is left out [PITCH]; it's $1,200 a year per kiosk against
>   $38,000 for a second staffed register [COSTS]. Ruling: COSTS — finance owns the numbers, and
>   PITCH was written to win budget.

### [Decision and Rationale](../../blocks/opening/decision-and-rationale.md)

> "Self-checkout kiosks: highest upfront cost, but the only option that removes the register
> bottleneck entirely and scales to more branches without adding staff."

### [Alternatives Considered](./blocks/alternatives-considered.md)

> "Keep the staffed register and add a second one at peak hours — cheaper to build, but doesn't
> reduce headcount and still bottlenecks at the busiest times."
