# Event

A description of something that happened — a user action, a system callback, a timer firing — and
the UI's only way to ask for a change. An event never carries the new state itself; it's handed to
the state holder, which decides what, if anything, changes.

> `ItemScanned(barcode)`, `CheckoutClicked`, `PaymentFailed(reason)`
