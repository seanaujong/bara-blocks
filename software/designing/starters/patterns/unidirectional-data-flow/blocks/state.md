# State

The single, immutable snapshot describing everything the UI needs to render one screen — owned by
exactly one place (the state holder) and never mutated by the UI directly. If two places can both
change it, it isn't a single source of truth anymore.

> `data class CheckoutUiState(val items: List<Item>, val total: Money, val isLoading: Boolean)`
