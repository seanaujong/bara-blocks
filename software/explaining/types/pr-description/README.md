# PR Description

> **At a glance.** Explains one code change to a reviewer: what it does, why, and how you know it
> works. The reader already knows the codebase — the job is to save them from having to reverse-
> engineer intent from the diff.

## Blocks

In the order they typically appear:

### [Summary](../../blocks/opening/summary.md)

**For this type:** states the change and the reason for it in a line or two — often doubles as the
PR title.

> "Adds fine checking to the checkout scan, so the kiosk can flag unpaid fines before checkout."

### [Problem Statement](../../blocks/opening/problem-statement.md)

> "The kiosk currently lets a patron check out with an unpaid fine, with no warning until they try
> to borrow again."

### [Before/After](../../blocks/body/before-after.md)

**For this type:** the artifact doesn't have to be a screenshot — a log line, error message, or
latency number works just as well for a backend change.

> Before: the kiosk shows only "Checked out." After: it also shows "You have a $2.50 fine."

### [Code Snippet](../../blocks/body/code-snippet.md)

**For this type:** the one line a reviewer would otherwise have to find themselves — not the
whole diff, which the PR already shows.

> ```kotlin
> if (fines.hasUnpaid(patronId)) receipt.addWarning(fines.balance(patronId))
> ```

### [Test Plan](./blocks/test-plan.md)

> "- [x] Unit tests for `CheckoutClient.scan`
> - [x] Manually scanned a book with an unpaid fine on staging"

## Pitfalls

- A summary that restates the diff ("changed CheckoutClient.kt") instead of the reason.
- A test plan that lists what exists ("has tests") instead of what was actually run.
- No before/after for a change a reviewer can't picture without running it themselves.
