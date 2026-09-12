# Writing Blocks

> **At a glance.** Most writing forms — a school essay, a piece of technical prose, eventually a
> unit of software — decompose into a small, stable set of components. This repo makes each
> domain's decomposition **data** (a schema, a component library, named forms composed from it),
> not just prose describing the decomposition — structured enough that a tool could eventually
> assemble a piece of writing from the pieces, not just a human reading about them.

## Domains

- **[`essay/`](./essay/)** — the essay types taught in school (narrative, expository, persuasive,
  compare-contrast, …), each as an ordered composition of shared components. Start at
  [Which Essay Type Do I Need?](./essay/docs/routing.md).
- **`software/`** — planned. Software's own building blocks (a function, a module boundary, a
  test) modeled the same way. Kept independent of `essay/` for now — no shared "writing block"
  abstraction between the two domains until a second domain exists to show what, if anything,
  actually repeats.

## Why this exists

School hands you a validated taxonomy of essay types for free, but rarely hands you the
components in a form anything but a human can use. Each domain directory here is self-contained:
a JSON Schema, hand-authored data against it, and (where useful) a generator that produces
readable docs from that data — so the data stays authoritative and the docs can't quietly drift
from it.
