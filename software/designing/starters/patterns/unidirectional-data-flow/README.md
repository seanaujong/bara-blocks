# Unidirectional Data Flow

> The cyclic contract at the heart of Android's recommended app architecture — also Flux, Redux,
> MVI, and the Elm architecture: a state holder owns [state](./blocks/state.md) and reduces
> incoming [events](./blocks/event.md) into new state; the UI only renders state and only emits
> events, never mutating state directly. Distinct from a C4 [Dynamic](../../c4/dynamic/README.md)
> diagram: Dynamic narrates one scenario's order, once. This is the standing contract those
> scenarios all run inside of, true on every frame — not a scenario at all.

**Audience:** developers implementing or reviewing a screen and its state holder.

## Blocks

### [State Holder](../../../blocks/component.md), as a role

**For this starter:** the one component that owns and reduces state — usually a ViewModel,
presenter, or reducer function. Reuses the same box vocabulary as a C4
[Component](../../c4/component/README.md); this diagram narrows to just the one loop that matters.

> "Checkout ViewModel"

### [State](./blocks/state.md)

> `data class CheckoutUiState(val items: List<Item>, val total: Money, val isLoading: Boolean)`

### [Event](./blocks/event.md)

> `ItemScanned(barcode)`, `CheckoutClicked`, `PaymentFailed(reason)`

Drawn as a loop — state down, events up:

```
┌──────────────────────────────────────────┐
│ State Holder (ViewModel)                 │
│ reduces Event into new State             │
│ single source of truth for the screen    │
└──────────────────────────────────────────┘
            │ State           │ Event
            ▼                 ▲
┌──────────────────────────────────────────┐
│ UI (Composable / View)                   │
│ renders State                            │
│ emits Event on user action               │
└──────────────────────────────────────────┘
```

## Related

The state holder and UI here are usually the outermost layer of a
[Vocabulary Boundary](../vocabulary-boundary/README.md) funnel — this diagram doesn't draw what
vocabulary either side speaks, only that state and events are the only things crossing between
them.

## Pitfalls

- The UI mutating state directly, skipping the state holder — this breaks the single-source-of-
  truth invariant the whole pattern exists to protect.
- An event that already carries the new state instead of just describing what happened — that
  moves the reducer's decision into the UI.
- Confusing this with a C4 [Dynamic](../../c4/dynamic/README.md) diagram — Dynamic traces one
  scenario's order; this states the standing contract every scenario runs inside of.
