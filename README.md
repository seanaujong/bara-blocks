# Writing Blocks

> **At a glance.** Most writing forms — a school essay, a piece of technical prose, eventually a
> unit of software — decompose into a small, stable set of components. This repo names that
> decomposition per domain, as plain hand-edited documents you can navigate and cross-reference,
> so that facing a piece of writing you can name what you're actually trying to do and see which
> components are likely to help.

## Domains

- **[`essay/`](./essay/)** — the essay types taught in school (narrative, expository, persuasive,
  compare-contrast, …), each as a composition of shared components. Start at
  [Which Essay Type Do I Need?](./essay/routing.md).
- **`software/`** — planned. Software's own building blocks (a function, a module boundary, a
  test) modeled the same way. Kept independent of `essay/` for now — no shared "writing block"
  abstraction between the two domains until a second domain exists to show what, if anything,
  actually repeats.

## Why this exists

School hands you a validated taxonomy of essay types for free, but rarely hands you the
components in a form you can actually use while deciding what to write. Each domain here stays
plain Markdown, hand-edited directly — no schema or generator standing between an idea and the
page. That's deliberate: the shape of "what's a component, what's a type" is still being
discovered per domain, and locking it into a data format before it's settled would make it
harder to change, not easier.
