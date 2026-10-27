# Developer Guide

> Walks a developer through using a tool, API, or library — what to install, what
> to call, what comes back. The reader is a developer, so implementation detail and exact code are
> the point, not something to abstract away.

## Blocks

### [Summary](../../blocks/opening/summary.md)

> "You can now scan an item and get back a receipt that includes any unpaid fine."

### [Case Table](../../blocks/body/case-table.md)

**For this starter:** right after the Summary, before any mechanism — a developer usually arrives
holding one input and wants to know which row it is.

> | Scanned item                   | Receipt shows            | Handled by                    |
> | ------------------------------ | ------------------------ | ----------------------------- |
> | With no fine                   | "Checked out."           | `scan` — test `scan.test.kt`  |
> | With an unpaid fine            | "You have a $2.50 fine." | `scan` — test `fines.test.kt` |
> | That belongs to another branch | "Return to Eastside."    | `scan` — none                 |

### [Problem Statement](../../blocks/opening/problem-statement.md)

> "The catalog API doesn't tell you whether a scanned item has an unpaid fine attached."

### [Before/After](../../blocks/body/before-after.md)

> Before: scanning an item with a fine logs `WARN: fine check skipped — endpoint timeout`.
> After: the same call logs `INFO: fine check ok — no fines`.

### [Neighbors](../../blocks/body/neighbors.md)

**For this starter:** the packages already in the reader's build, so they don't read the new one
as a layer over the one they know.

> "Fines Repository" —✕ no import, either direction→ "Checkout SDK"

### [Prerequisites](./blocks/prerequisites.md)

> "Requires the checkout SDK v2.3+ and a library API key set as `LIBRARY_API_KEY`."

### [Step](../../blocks/body/step.md)

> "1. Initialize the client with your API key."
> "2. Call `checkoutClient.scan(barcode)`."

### [Code Snippet](../../blocks/body/code-snippet.md)

> ```kotlin
> val receipt = checkoutClient.scan(barcode = "9780143127550")
> ```
