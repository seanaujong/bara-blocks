# Developer Guide

> Walks a developer through using a tool, API, or library — what to install, what
> to call, what comes back. The reader is a developer, so implementation detail and exact code are
> the point, not something to abstract away.

## Blocks

### [Summary](../../blocks/opening/summary.md)

> "You can now scan an item and get back a receipt that includes any unpaid fine."

### [Problem Statement](../../blocks/opening/problem-statement.md)

> "The catalog API doesn't tell you whether a scanned item has an unpaid fine attached."

### [Before/After](../../blocks/body/before-after.md)

> Before: scanning an item with a fine logs `WARN: fine check skipped — endpoint timeout`.
> After: the same call logs `INFO: fine check ok — no fines`.

### [Prerequisites](./blocks/prerequisites.md)

> "Requires the checkout SDK v2.3+ and a library API key set as `LIBRARY_API_KEY`."

### [Step](../../blocks/body/step.md)

> "1. Initialize the client with your API key."
> "2. Call `checkoutClient.scan(barcode)`."

### [Code Snippet](../../blocks/body/code-snippet.md)

> ```kotlin
> val receipt = checkoutClient.scan(barcode = "9780143127550")
> ```
