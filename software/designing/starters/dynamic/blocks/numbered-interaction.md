# Numbered Interaction

A [relationship](../../../blocks/relationship.md) labeled with a sequence number instead of
(or alongside) a technology tag, showing where it falls in one scenario's order of events.
Blocks stay in a free-form layout — unlike a UML sequence diagram, there's no lifeline forcing a
strict top-to-bottom timeline, so the same static diagram can host several numbered flows.

> 1. "Patron" —scans a book→ "Self-Checkout Kiosk App"
> 2. "Self-Checkout Kiosk App" —looks up the item→ "Checkout API"
> 3. "Checkout API" —checks for unpaid fines→ "Fines Repository"
