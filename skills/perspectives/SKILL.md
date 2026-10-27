---
name: perspectives
description: >
  A requirements pass for one feature: predict how each perspective it actually has meets it (by
  default the customer using it, the business measuring it, the maintainers evolving it, other
  teams extending it), then cross-examine those perspectives until every tension between them has
  a decider. Publishes an interactive page with one tab per perspective, then Tensions and
  Proposed tickets. Run it explicitly as `/perspectives <feature>`; it isn't meant to trigger from
  context alone.
disable-model-invocation: true
---

# Perspectives

**Requirements are clear once we can predict how each perspective meets one feature.**
`/perspectives <feature>`

The argument is the feature: a ticket key or URL, a doc URL, or a one-sentence description. A good
input already sorts its questions by perspective — a ticket whose description splits into user
stories, success measures and developer stories hands you three of the tabs.

The premise: a requirement nobody can picture is a requirement nobody can check. Picture the end
goal by predicting how each audience meets the feature, then iterate by switching between those
perspectives, because most open questions are two perspectives that disagree without anyone having
said so.

## How to run it

### 1. Gather from primary sources

Read the feature's ticket and its children (each child that already exists is a requirement's
ticket), the notes and docs they link, the code on the default branch, and any discussion threads
they mention. Cite the source for every row. A row with no source is marked `predicted`, so the
reader knows which parts are guesses waiting for a decision.

- **If a source needs a sign-in you don't have** (a connector reporting it needs auth, a private
  doc), ask the user to sign in, or say the source is unread. Don't reconstruct its contents from
  what other sources say about it.
- **The default branch is checked twice: now, and again at build time** (step 6). It moves while the
  draft is trimmed; a function the draft describes can be deleted by a merged change before the page
  goes up, and then the page is wrong on arrival.

### 2. Choose the perspectives

The default four are **customer**, **business**, **maintainers** (the owning team or person) and
**integrators** (other teams extending the feature). Maintainers and integrators are both
developers, kept apart because their asks collide.

**The perspectives fit the feature; they aren't a fixed four.** Name the audiences the feature
actually has. A platform design, for example, is met by feature developers, product managers and
platform developers, not by an end customer. When the feature is a design replacing a current
state, use the comparison variant: tabs Overview / Today / With <design> / Tensions, each audience a
sub-tab under Today and under With <design>, so one audience reads both states side by side. The
template's head comment describes the variant.

### 3. Write each perspective

- **Customer** — use cases in Alistair Cockburn's style: an actor with a goal, numbered steps, a
  screenshot slot per step, the action each step takes, and the extensions (what happens when a step
  goes differently, numbered off that step: 2a, 2b).
  - Choose use cases **one per mechanism or path**, not one per screen. Two screens on one mechanism
    are one use case; one screen with two paths is two.
  - Show the same goal on several hosts as host cards side by side (the template's host-card block).
    Name hosts the way readers know them: web, iOS, Android, CLI.
- **Business** — a success funnel, from first exposure to the step the feature exists to produce
  (a signup, a purchase, a completed task).
  - Each stage names the **signal** that measures it — an analytics event, a metric, a database row,
    a log line, a manual check — and lists its **fields and join keys**, not only its name. A stage
    nothing measures is a gap. The strongest finding is usually a missing join key: an action that
    can't be joined to the thing it acted on.
  - "Who reads it" (product, analytics, leadership, you) is sourced from a dashboard, an alert or a
    doc that names the metric; otherwise it's marked `predicted`.
  - When the project states where new measurements must go, follow it and cite it.
- **Maintainers** — the owning team's predicted changes over the next year. For each one: the seam
  it lands on (where in the code the change happens), the invariant it must keep, and the guard that
  keeps it (a test, type, lint rule or check — or `unguarded`).
  - Add an app-version-compatibility column **only** when stored data or a shipped client outlives
    the change. Then ask how long a written record lives and what reads it, because a read-time gate
    is not a write-time gate: a record is read by whichever client is installed when it's read, not
    only by the one that wrote it.
  - Otherwise scope the page to the deployables the feature serves (for example the web app and the
    iOS app, not "every version"), and name those deployables in the title.
  - Draw the deployables as an inline SVG diagram in three states: live on the default branch, to
    build, and legacy left alone, with the owning deployable grouped. Use the template's `d-*`
    classes and the `artifact-diagramming` skill.
- **Integrators** — other teams extending the feature, each written as "If <team> wants X, then:":
  a recipe with real symbols from the code, ending in an **Involve** line naming whom they must
  bring in.
  - **"No path today" is a valid and important answer.** When no recipe exists, use the template's
    no-path block and say what blocks it; that gap is the requirement.

### 4. Cross-examine the perspectives

This is the core step. Read each perspective against the others: a customer step with no funnel
stage, a funnel stage no signal measures, a maintainer change that breaks an integrator's extension
point, an integrator ask the owning team never predicted. Each collision becomes a **Tension**.
Resolving a tension changes the other perspectives, so walk them again; that loop is what makes
requirements-gathering iterative instead of a one-pass spec. When a tension splits into cases, give
it a case table: one row per case, named the way the reader meets it, with a column per side.

**Every tension names a decider from a roster source**: a `CODEOWNERS` file, the repo's maintainers,
or the stakeholders the ticket names. When no name is sourced, a role ("the iOS tech lead") is
acceptable; an invented name is not.

### 5. Link every requirement to a ticket, and give it a slug

Each requirement points at a ticket under the feature's ticket, in whatever tracker the project uses
— a key or a URL. Its status and linked changes are how anyone tracking the page sees how close the
default branch is to the end goal. A requirement with no ticket is shown as *no ticket*, which is a
finding: the work isn't broken down yet. Propose new tickets, but file them only after the user says
yes, because filing is outward-facing. Tensions are decisions, not work, so they never become
tickets: they stay on the page, and go into the feature's ticket only once the user approves.

**Every requirement also gets a stable slug**, prefixed `cust-`, `biz-`, `maint-` or `int-`, never
renamed once published. A feature often has no child tickets yet, so a ticket key alone can't
identify a requirement; the page carries both `data-req` and `data-slug`.

Add a **Proposed tickets** tab: the tickets that would give every no-ticket requirement a key, each
listing the slugs it covers. Every `data-req="none"` slug appears in exactly one proposed ticket.

### 6. Draft, trim, build, publish

Three phases: a prose draft, trims in the terminal, then the build and publish.

**Draft the prose first**, in the scratchpad, before any HTML.

- Each header states what the named reader gains: "X helps developers and product managers connect
  features", never "X adds no new capability".
- Don't overstate an alternative. Say what it actually does or doesn't do ("it works; it just
  doesn't get adopted"), not a stronger claim the reader can knock down.
- Frame the end goal as a working product, improved over time, not as details that must all be
  agreed before anything ships.

**Trim in the terminal.** Show the draft, cut what doesn't earn its place, and settle wording before
it's locked into markup.

**Build.**

- **Re-verify the default branch before building.** Fetch, and re-read every symbol, endpoint and
  route the draft names; anything deleted or renamed since the draft changes the text first.
- **Start from the template.** Copy [`template.html`](./template.html) and read its head comment.
  Fill every `<!-- SLOT -->` with real text in the HTML itself — JavaScript only navigates, so the
  page's content stays readable and diffable as source. Repeat a BLOCK to add an item and delete the
  BLOCKs you don't use. Keep the contract: each requirement is `<article class="sub req">` with
  `data-req` (a ticket key or URL, or `none`), `data-slug` and `data-perspective`; tensions carry
  `data-tension`, proposed tickets `data-proposed`.
- **Build with a throwaway script.** A script in the scratchpad that turns the trimmed draft into the
  page (draft.md → page.html) makes every later trim a re-run instead of a hand edit. Don't commit
  it.
- **One column for a goal and its steps.** Two columns leave the left side empty; spend the
  horizontal space on screenshots instead.
- **Keep each sub-tab to about one screen.** Panels are grid-stacked, so every tab is as tall as the
  tallest; one long sub-tab makes every tab scroll.
- **Capture real screenshots yourself** from a running build — a browser for web, a simulator or
  emulator for mobile — and embed them as `data:` URIs in `<figure class="shot img">`. When a capture
  needs an account you don't have, leave the slot describing what it must show; never ask the user
  for credentials.

**Publish** as a claude.ai Artifact (the `artifact-design` skill owns the page mechanics), unless the
user names somewhere else.

- Upload a complete HTML document, and keep state in memory: browser storage can throw in an
  artifact's sandbox.
- Before publishing, run the checks: tag balance, every class has a rule, every `var()` resolves,
  and each colour token is defined exactly once in each of the three theme states (light, dark by
  media query, dark by `data-theme`).

## Output

An interactive page that keeps the whole requirements pass inside one browser view without
scrolling:

- one tab per perspective (Customer, Business, Maintainers, Integrators by default), then Tensions,
  then Proposed tickets;
- sub-tabs within a tab, stepped with ←/→ and labelled "N of M";
- digit keys to jump between tabs, Option+digit between sub-tabs.

End the run by listing in the terminal:

- **Open tensions**, each with its decider, since those are the next conversations to have;
- **Proposed tickets awaiting a yes**, each with the slugs it covers, since nothing is filed until
  the user says so.
