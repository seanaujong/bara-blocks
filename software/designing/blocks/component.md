# Component

A grouping of related functionality behind a well-defined interface — in Java/C# terms, a set of
implementation classes behind an interface; in JavaScript, a module. Unlike a container, a
component is not separately deployable: every component inside a container runs in the same
process.

Appears as the thing being decomposed in a Component diagram, and as a participant in a Dynamic
diagram when a scenario's interactions happen inside a single container.

> "Checkout Controller" — accepts a scan, looks up the item, records the transaction.
> "Fines Repository" — reads and writes fine balances.
