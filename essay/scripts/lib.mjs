// Loads essay/data/*.json and renders every essay/docs/*.md file as an in-memory map.
// Shared by generate-docs.mjs (writes the map to disk) and check-docs.mjs (diffs it
// against what's on disk, so drift between data and docs fails the build instead of
// rotting silently).
import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";

export function loadData(root) {
  const dataDir = path.join(root, "data");
  const typesDir = path.join(dataDir, "types");

  const components = JSON.parse(readFileSync(path.join(dataDir, "components.json"), "utf8"));
  const componentsById = new Map(components.map((c) => [c.id, c]));

  const typeFiles = readdirSync(typesDir).filter((f) => f.endsWith(".json")).sort();
  const types = typeFiles.map((f) => JSON.parse(readFileSync(path.join(typesDir, f), "utf8")));
  const typesById = new Map(types.map((t) => [t.id, t]));

  const routing = JSON.parse(readFileSync(path.join(dataDir, "routing.json"), "utf8"));

  return { components, componentsById, types, typesById, routing };
}

function componentRow(ref, componentsById) {
  const c = componentsById.get(ref.ref);
  if (!c) throw new Error(`unknown component ref "${ref.ref}"`);
  const badge = ref.required ? "required" : "optional";
  const lines = [`### ${c.name} (${badge})`, "", c.purpose];
  if (ref.note) lines.push("", `**For this type:** ${ref.note}`);
  else if (c.notes) lines.push("", `**Note:** ${c.notes}`);
  if (c.example) lines.push("", `> ${c.example}`);
  return lines.join("\n");
}

function renderType(t, { componentsById, typesById }) {
  const lines = [];
  lines.push(`# ${t.name}`);
  lines.push("");
  lines.push(`> **At a glance.** ${t.purpose}`);
  if (t.subtype_of) {
    const parent = typesById.get(t.subtype_of);
    lines.push("", `A subtype of [${parent ? parent.name : t.subtype_of}](./${t.subtype_of}.md).`);
  }
  lines.push("");
  lines.push("## Components");
  lines.push("");
  lines.push("In the order they typically appear:");
  lines.push("");
  for (const ref of t.components) {
    lines.push(componentRow(ref, componentsById));
    lines.push("");
  }
  if (t.organizational_patterns?.length) {
    lines.push("## Organizational patterns");
    lines.push("");
    lines.push("Named ways to arrange this type's components, chosen by the writer:");
    lines.push("");
    for (const p of t.organizational_patterns) {
      lines.push(`### ${p.name}`, "", p.description, "");
    }
  }
  if (t.pitfalls?.length) {
    lines.push("## Pitfalls");
    lines.push("");
    for (const p of t.pitfalls) lines.push(`- ${p}`);
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}

function mermaidId(id) {
  return id.replace(/-/g, "_");
}

function renderRouting({ routing, typesById }) {
  const lines = [
    "# Which Essay Type Do I Need?",
    "",
    "> **At a glance.** Answer what the essay's primary job is, and — for expository writing —",
    "> what shape the explanation takes. That narrows straight to one essay type and its",
    "> [components](./components.md). Walk it top to bottom; each question has one right branch",
    "> for a given essay, not several.",
    "",
    "```mermaid",
    "flowchart TD",
  ];
  const nodeIds = Object.keys(routing.nodes);
  for (const id of nodeIds) {
    const n = routing.nodes[id];
    lines.push(`  ${mermaidId(id)}{{"${n.question}"}}`);
  }
  for (const id of nodeIds) {
    const n = routing.nodes[id];
    for (const b of n.branches) {
      const targetId =
        b.leads_to.kind === "question" ? mermaidId(b.leads_to.id) : `type_${mermaidId(b.leads_to.id)}`;
      if (b.leads_to.kind === "type") {
        const t = typesById.get(b.leads_to.id);
        if (!t) throw new Error(`routing references unknown essay type "${b.leads_to.id}"`);
        lines.push(`  ${targetId}["${t.name}"]`);
      }
      lines.push(`  ${mermaidId(id)} -->|"${b.answer}"| ${targetId}`);
    }
  }
  lines.push("```", "");

  function renderNode(id) {
    const n = routing.nodes[id];
    lines.push(`## ${n.question}`, "");
    for (const b of n.branches) {
      if (b.leads_to.kind === "type") {
        const t = typesById.get(b.leads_to.id);
        lines.push(`- **${b.answer}** → [${t.name}](./${t.id}.md)`);
      } else {
        const target = routing.nodes[b.leads_to.id];
        lines.push(`- **${b.answer}** → see *${target.question}*, below`);
      }
    }
    lines.push("");
  }
  for (const id of nodeIds) renderNode(id);

  return lines.join("\n").trimEnd() + "\n";
}

function renderIndex({ types }) {
  const lines = [
    "# Essay Types",
    "",
    "> **At a glance.** Every essay type below is a named composition of the shared",
    "> [components](./components.md) — the same building blocks recombine across types rather",
    "> than each type inventing its own vocabulary. Not sure which type fits? Start at",
    "> [Which Essay Type Do I Need?](./routing.md).",
    "",
  ];
  const top = types.filter((t) => !t.subtype_of);
  const bySubtypeOf = new Map();
  for (const t of types) {
    if (t.subtype_of) {
      if (!bySubtypeOf.has(t.subtype_of)) bySubtypeOf.set(t.subtype_of, []);
      bySubtypeOf.get(t.subtype_of).push(t);
    }
  }
  for (const t of top) {
    lines.push(`- **[${t.name}](./${t.id}.md)** — ${t.purpose}`);
    for (const sub of bySubtypeOf.get(t.id) ?? []) {
      lines.push(`  - [${sub.name}](./${sub.id}.md) — ${sub.purpose}`);
    }
  }
  return lines.join("\n") + "\n";
}

function renderComponents({ components }) {
  const lines = [
    "# Components",
    "",
    "> **At a glance.** A component is an atomic building block an essay is assembled from — a",
    "> paragraph-or-smaller unit with one job. Essay types don't redefine these; they compose",
    "> them, in an order, marking each required or optional for that type.",
    "",
  ];
  for (const c of components) {
    lines.push(`## ${c.name}`, "", c.purpose, "", `**Placement:** ${c.placement}`);
    if (c.notes) lines.push("", c.notes);
    if (c.example) lines.push("", `> ${c.example}`);
    lines.push("");
  }
  return lines.join("\n").trimEnd() + "\n";
}

export function renderAll(data) {
  const files = new Map();
  files.set("README.md", renderIndex(data));
  files.set("components.md", renderComponents(data));
  files.set("routing.md", renderRouting(data));
  for (const t of data.types) {
    files.set(`${t.id}.md`, renderType(t, data));
  }
  return files;
}
