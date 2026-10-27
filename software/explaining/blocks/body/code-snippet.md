# Code Snippet

A short, runnable excerpt that shows the exact call or configuration the reader needs.

Anchor it to its enclosing function, file, or class — never a line number. Line numbers rot the
moment the file changes above the snippet; a name doesn't.

It must run as written against today's API — every name and argument in it exists now. Readers
copy a snippet verbatim, so one that fails on its first line costs more trust than no snippet.
Check it against the current code, not the design it was drafted from.

When the API is plain data plus pure functions, show inputs and the values they return before
the framework or UI call that consumes them. "It's just data" isn't believable until the reader
sees the data; the UI call alone hides it.

> `CheckoutClient.scan`, in `checkout-client.kt`:
> ```kotlin
> val receipt = checkoutClient.scan(barcode = "9780143127550")
> ```
>
> `computeBalance`, in `fines.kt`, before the screen that shows its result:
> ```kotlin
> computeBalance(listOf(FineKind.Late(days = 5)))  // 2.50
> computeBalance(emptyList())                      // 0.00
>
> receiptScreen.show(receipt)
> ```
