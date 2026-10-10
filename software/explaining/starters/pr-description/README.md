# PR Description

> Explains one code change to a reviewer: what it does, why, and how you know it
> works. A PR description should leave the reviewer with a better understanding of
> the affected systems and also a better understanding of your engineering/product intent.

## Blocks

### [Summary](../../blocks/opening/summary.md)

**For this starter:** states the change and the reason for it in a line or two — often doubles as the
PR title.

> "Adds fine checking to the checkout scan, so the kiosk can flag unpaid fines before checkout."

### [Problem Statement](../../blocks/opening/problem-statement.md)

> "The kiosk currently lets a patron check out with an unpaid fine, with no warning until they try
> to borrow again."

### [Before/After](../../blocks/body/before-after.md)

**For this starter:** the artifact doesn't have to be a screenshot — a log line, error message, or
latency number works just as well for a backend change.

> Before: the kiosk shows only "Checked out." After: it also shows "You have a $2.50 fine."

### Walkthrough

**For this starter:** only when the change gives someone something new to do — a short
walkthrough in that reader's terms, not the implementation's. For a developer, what they write,
what they get back, and what they can now add, using the [Step](../../blocks/body/step.md) and
[Code Snippet](../../blocks/body/code-snippet.md) blocks the way a
[Developer Guide](../developer-guide/README.md) does. For a customer, what they do and see, step
by step, the way a [Product Walkthrough](../product-walkthrough/README.md) does.

> "1. Scan a book with your library card. 2. Under 'Checked out.' the screen now shows 'You have
> a $2.50 fine.'"

### Supporting visuals from software/designing/

**For this starter:** one visual per structural claim the change makes, and none when it makes
none — a change that both crosses deployables and moves code between layers gets both diagrams,
not the more important one. Each claim has its own diagram:

- The change spans more than one deployable or runtime hop → a
  [Deployment](../../../designing/starters/c4/deployment/README.md) or
  [Container](../../../designing/starters/c4/container/README.md) diagram, with the changed
  relationship marked.
- The change moves code between layers, or splits one thing into siblings → a
  [Layered Architecture](../../../designing/starters/patterns/layered-architecture/README.md)
  diagram, each layer drawn as a band and mapped to what moves into or out of it.
- The change alters a request or interaction sequence → a
  [Dynamic](../../../designing/starters/c4/dynamic/README.md) diagram of the new order.

Don't force one in: a change that makes no structural claim needs no visual.

### [Code Snippet](../../blocks/body/code-snippet.md)

**For this starter:** the one line a reviewer would otherwise have to find themselves — not the
whole diff, which the PR already shows.

> ```kotlin
> if (fines.hasUnpaid(patronId)) receipt.addWarning(fines.balance(patronId))
> ```

### [Test Plan](./blocks/test-plan.md)

- [x] Unit tests for `CheckoutClient.scan`
- [x] Manually scanned a book with an unpaid fine on staging
