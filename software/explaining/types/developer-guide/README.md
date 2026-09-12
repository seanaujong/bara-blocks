# Developer Guide

> **At a glance.** Walks a developer through using a tool, API, or library — what to install, what
> to call, what comes back. The reader is a developer, so implementation detail and exact code are
> the point, not something to abstract away.

## Components

In the order they typically appear:

### [Problem Statement](../../components/problem-statement.md) (optional)

> "The catalog API doesn't tell you whether a scanned item has an unpaid fine attached."

### [Prerequisites](./components/prerequisites.md) (required)

> "Requires the checkout SDK v2.3+ and a library API key set as `LIBRARY_API_KEY`."

### [Step](../../components/step.md) (required)

> "1. Initialize the client with your API key."
> "2. Call `checkoutClient.scan(barcode)`."

### [Code Snippet](../../components/code-snippet.md) (required)

> ```kotlin
> val receipt = checkoutClient.scan(barcode = "9780143127550")
> ```

### [Summary](../../components/summary.md) (optional)

> "You can now scan an item and get back a receipt that includes any unpaid fine."

## Pitfalls

- A prerequisite the reader discovers only after failing on step three.
- A code snippet with unrelated setup left in, burying the one line that matters.
- Steps that only work in the author's environment, with the assumptions left unstated.
