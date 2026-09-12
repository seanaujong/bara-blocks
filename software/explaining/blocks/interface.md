# Interface

The module's public surface — function names, parameter and return types, what's exported. States
the shape of what's callable, not how to call it; a usage sample is a different job, covered by
[Code Snippet](./code-snippet.md).

Written before or alongside the code in a Module Contract; read back out of the existing
implementation — reverse-engineered, not authored — in a Module Discovery, where it's usually
labeled "observed" to make clear it wasn't declared up front.

> `scan(barcode: string): Receipt`
> `hasUnpaid(patronId: string): boolean`
