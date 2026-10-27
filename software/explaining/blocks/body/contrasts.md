# Contrasts

A flat list, one entry per question two or more of the
[Documents Consulted](documents-consulted.md) speak to. Each entry names the question, says by tag
which documents agree, which conflict and which are silent, and ends in a ruling: the document that
wins and the rule that picked it. Comparing the documents is what justifies the decision —
summarizing each in turn doesn't.

The ruling's rule is the part a reviewer can push back on, so state it. In software, one pair of
rules settles most contrasts: on what *is* true, the running artifact — code, config, data — beats
any document about it; on what *should* be true, the decision record beats the code. Others recur:
the owner of a fact beats a bystander, a primary record beats a later account, and a document that
restates another counts once.

Record silence too. A document that says nothing where its author should have spoken — a cost
sheet with no line for downtime — is an open question, not an absent one; list it as a contrast
with no ruling.

The [Decision and Rationale](../opening/decision-and-rationale.md) cites each contrast it settles,
by name and with the documents behind it, so a reviewer can trace every choice back to the sources
that forced it. A point that rests on one document cites just its tag; a point that cites neither
a contrast nor a document is an assumption, and says so. A contrast the decision never cites is
either not a real disagreement or a choice the decision skipped — say which. Keep the list flat: a
contrast is one question, and nesting them hides which one a decision actually settles.

> - **Who queues at peak hours** — mostly quick one-item checkouts a kiosk handles [PITCH],
>   against a sizable group who would rather wait for staff [SURVEY]. Ruling: SURVEY — patrons
>   asked directly beat a proposal's estimate of them.
> - **Running cost** — maintenance is left out [PITCH]; it's $1,200 a year per kiosk against
>   $38,000 for a second staffed register [COSTS]. Ruling: COSTS — finance owns the numbers, and
>   PITCH was written to win budget.
> - **Kiosk downtime** — silent: PITCH, COSTS. Open question.
>
> Decision: "Self-checkout kiosks, keeping one staffed register. *Who queues at peak hours*
> [PITCH][SURVEY] is why one register stays; *Running cost* [PITCH][COSTS] favors kiosks even with
> maintenance counted. *Kiosk downtime* is open — assumption: the staffed register covers outages."
