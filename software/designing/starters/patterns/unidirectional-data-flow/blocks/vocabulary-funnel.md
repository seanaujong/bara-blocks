# Vocabulary Funnel

An abridged form of the [State](./state.md)/[Event](./event.md) loop that drops the cycle and
instead stacks the [layers](../../blocks/layer.md) a value crosses on its way from the platform to
the core, narrowing at each boundary: the outer layer speaks the runtime's vocabulary (DOM nodes,
`Intent`, `Bitmap`), and each boundary crossed translates into a plainer, more in-memory type,
until the core speaks only its own domain types. Use this instead of the full loop when the point
isn't the cycle itself but which layer is allowed to know about the platform.

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
