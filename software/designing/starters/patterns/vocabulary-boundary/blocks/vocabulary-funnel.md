# Vocabulary Funnel

Stacks the [layers](../../blocks/layer.md) a value crosses on its way from the platform to the
core, narrowing at each boundary: the outer layer speaks the runtime's vocabulary (DOM nodes,
`Intent`, `Bitmap`), and each boundary crossed translates into a plainer, more in-memory type,
until the core speaks only its own domain types and imports nothing from outside. A layer can
respect [Layered Architecture](../../layered-architecture/README.md)'s dependency direction and
still fail this — a platform type passed straight through as a parameter is a vocabulary leak even
when the import graph points the right way.

```
 ┌──────────────────────────────────────────────────────────┐
 │ Outer layer: UI / Platform                               │
 │ speaks in runtime / platform types                       │
 │ DOM nodes, HTML attributes, browser events               │
 └──────────────────────────────────────────────────────────┘
   translated at the boundary  │
                               ▼
         ┌──────────────────────────────────────────┐
         │ Middle layer: Domain                     │
         │ speaks in plain in-memory types          │
         │ view models, use-case inputs/outputs     │
         └──────────────────────────────────────────┘
   translated at the boundary  │
                               ▼
                 ┌──────────────────────────┐
                 │ Core                     │
                 │ pure domain types only   │
                 │ no platform, no framework│
                 └──────────────────────────┘
```

> A web client's outer layer speaks `HTMLElement` and DOM `Event`; an Android client's outer layer
> speaks `View` and `Intent` instead — either way, the core underneath never imports either
> vocabulary.
