# Vocabulary Boundary

> Which type vocabulary a value is allowed to speak at each [layer](../blocks/layer.md) it crosses
> on its way from the platform to the core — not who may depend on whom (that's
> [Layered Architecture](../layered-architecture/README.md)), but what language each layer's code
> is actually written in. The outer layer speaks the runtime's vocabulary (DOM nodes, `Intent`,
> `Bitmap`); each boundary crossed translates into a plainer, more in-memory type, until the core
> speaks only its own domain types.

**Audience:** developers deciding what a function signature is allowed to accept, or reviewing
whether a platform type has leaked past its boundary.

## Blocks

### [Layer](../blocks/layer.md)

> "Outer layer: UI / Platform", "Middle layer: Domain", "Core"

### [Vocabulary Funnel](./blocks/vocabulary-funnel.md)

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

## Related

The outermost layer here is often exactly where a
[Unidirectional Data Flow](../unidirectional-data-flow/README.md) loop lives — this diagram
doesn't draw that cycle, only which vocabulary is legal at each depth the loop's state and events
would cross.

## Pitfalls

- Treating a passing [Layered Architecture](../layered-architecture/README.md) diagram as proof of
  this one too — a function can respect the dependency direction and still accept a platform type
  as a parameter; that's a vocabulary leak this diagram exists to catch, not that one.
- Drawing more than three or four layers — past that the funnel stops being legible; collapse
  adjacent layers that already speak the same vocabulary.
- A "translation" function that just unwraps and re-wraps the same type — if nothing actually
  changes vocabulary at a boundary, it isn't a real boundary, just a rename.
