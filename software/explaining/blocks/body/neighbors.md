# Neighbors

The tools and libraries the reader already uses, drawn beside the subject, with each dependency
edge that does *not* exist marked as absent. A reader who meets a new library next to one they
know assumes it wraps that one. Leave the familiar packages out and that assumption stands; draw
them with the missing edges unmarked and "no edge" reads the same as "not drawn."

Draw only what the reader would recognize, plus the subject, using the
[Relationship](../../../designing/blocks/relationship.md) notation — an absent edge is a
relationship stated in the negative.

> "Kiosk App" —scans with→ "Checkout SDK"
> "Kiosk App" —looks up fines with→ "Fines Repository"
> "Fines Repository" —✕ no import, either direction→ "Checkout SDK"
