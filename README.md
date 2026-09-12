# Bara Blocks

I love finding patterns in my work; it turns out writing has many patterns.
School teaches you a structured way to write - what kind of essay you should be writing,
and the building blocks that make up these essays. I also found that describing and designing
software comes with its own set of _bara blocks_ — named after the Bara Bara no Mi from One
Piece, the fruit that lets Buggy split his body into independently controllable pieces. This
repository is about organizing these blocks and helping you pick which ones to use.

## Domains

- **[`essay/`](./essay/)** — the essay types taught in school (narrative, expository, persuasive,
  compare-contrast, …), each as a composition of shared components. Start at
  [Which Essay Type Do I Need?](./essay/routing.md).
- **`software/`** — planned. Software's own building blocks (a function, a module boundary, a
  test) modeled the same way. Kept independent of `essay/` for now — no shared "bara block"
  abstraction between the two domains until a second domain exists to show what, if anything,
  actually repeats.
