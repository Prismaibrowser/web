---
name: impeccable
description: Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior, theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions, UX copy, error states, edge cases, i18n, and reusable design systems or tokens. Also use for bland designs that need to become bolder or more delightful, loud designs that should become quieter, live browser iteration on UI elements, or ambitious visual effects that should feel technically extraordinary. Not for backend-only or non-UI tasks.
version: 3.9.1
license: Apache 2.0
---

Designs and iterates production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Setup

You MUST do these steps before proceeding:

1. Run `node .kiro/skills/impeccable/scripts/context.mjs` once per session; if the runtime shows this skill's loaded base directory, run `node <skill-base-dir>/scripts/context.mjs` instead. Keep cwd/workdir at the user's project, not the skill directory. If the request names or implies a file, route, or app inside a monorepo, infer the concrete path and append `--target <path>` to the same command. If you've already seen its output in this conversation, do not re-run it. The script either prints the project's PRODUCT.md (and DESIGN.md when present) as a markdown block, or tells you it's missing. Follow whatever it prints. **If it reports `NO_PRODUCT_MD`:** divert into `reference/init.md` first when the user invoked `init`, `teach`, `craft`, or `shape`, or when their wording clearly maps to one of those from-scratch build flows (for example: "build/create/make a landing page", "design a new app", or "shape a feature"). Captured product context is the point of those flows. For any other command, a scoped evaluate / refine / enhance / fix / iterate request against existing code, do **not** divert into init. The existing code is the context: proceed with the requested command, infer the register from the surface in focus (step 4), and offer `/impeccable init` once as a suggestion the user can take later. A missing PRODUCT.md must never block a scoped request. If the output ends with an `UPDATE_AVAILABLE` directive, follow it (ask the user once about updating, then continue). It never blocks the current task.
2. If the user invoked a sub-command (`craft`, `shape`, `audit`, `polish`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow; without it you will skip steps the user expects.
3. Familiarize yourself with any existing design system, conventions, and components in the code. Read at least one project file (CSS / tokens / theme / a representative component or page). **Required even when you've loaded a sub-command reference in step 2.** Don't reinvent the wheel; use what's there when it works, branch out when the UX wins.
4. Read the matching register reference. **This is non-optional; skipping it produces generic output.** If the project is marketing, a landing page, a campaign, long-form content, or a portfolio (design IS the product), read `reference/brand.md`. If it is app UI, admin, a dashboard, or a tool (design SERVES the product), read `reference/product.md`. Pick by first match: (1) task cue ("landing page" vs "dashboard"); (2) surface in focus (the page, file, or route being worked on); (3) `register` field in PRODUCT.md.
5. **If the project is brand-new (no existing CSS tokens / theme / committed brand colors found in step 3)**, run `node .kiro/skills/impeccable/scripts/palette.mjs` to receive a brand seed color and composition guidance. This is the anchor for your primary brand color. Compose the rest of the palette (bg, surface, ink, accent, muted) around it per the script's instructions. Use OKLCH throughout. **Skip this step only if step 3 found committed brand colors in existing tokens; in that case identity-preservation wins.**

## Design guidance

Produce ready-to-ship, production-grade code, not prototypes or starting points. Take no shortcuts unless the user asks for them (when in doubt, ask). Don't stop until arriving at a complete implementation (beautiful, responsive, fast, precise, bug-free, on brand). You take attention to detail seriously: every page, section or component crafted is battle tested using the tools available to you.

The core visual design system for Impeccable is the **PrismSpace High-Voltage Developer OS & Autonomous Swarm Design System** (documented in full specification at [DESIGN.md](DESIGN.md)).

### Core Design System Principles

#### Color & Surfaces
- **Drenched Electric Mint Canvas**: The primary background anchor is saturated electric mint / neon green (`#00df81` / `oklch(0.78 0.22 153.5)`). It delivers unapologetic visual voltage, eliminating generic white or muted-gray SaaS monotony.
- **Obsidian Hardware Board**: Deep slate obsidian (`#090c12`) creates the foundation for architecture monitors, telemetry boards, and technical consoles.
- **Solid Black Cutouts & Accents**: Pure `#000000` is used for inverted title cutout boxes, editorial kicker badges, and terminal command pills.
- **Ink Contrast**: On the electric mint canvas, body prose uses Deep Mint Ink (`#06190e` / `#000000`, font-weight 600) with inline highlight spans backed by `rgba(255, 255, 255, 0.4)`. Contrast exceeds 10:1.
- **Console Typography**: Pure white (`#ffffff`) for titles, slate (`#cbd5e1`) for technical specifications, muted gray (`#94a3b8`) for uppercase telemetry labels, and electric mint (`#00df81`) for live metrics and prompt characters.
- **Telemetry Glow**: `rgba(0, 223, 129, 0.25)` neon halos for active layers, pulsing status LEDs, and traveling energy beams.

#### Typography & Hierarchy
- **Pairing**: `Space Grotesk` (Google Fonts) for editorial display and body prose + `JetBrains Mono` (Google Fonts) for technical instrumentation, telemetry, code, and system badges.
- **Display Headings**:
  - `Space Grotesk`, weight 900, line-height `0.92`, letter-spacing `-0.05em`.
  - All-lowercase phrasing for bold conversational titles (`you code it.`, `raw prompt in.`, `four models.`).
- **Signature Cutout Box (`.cutout-box`)**:
  - Inverted display container: background `#000000`, padding `3px 18px 7px 18px`, radius `4px`, drop shadow `0 10px 25px rgba(0, 0, 0, 0.25)`.
  - Display text inside: `Space Grotesk` 900, lowercase, `#00df81` text color.
- **Technical Monospace Hierarchy**:
  - Section Kickers / Badges: `JetBrains Mono` 800, `11px`, `letter-spacing: 0.08em`, uppercase, black background with mint text.
  - Architecture Board Header: `JetBrains Mono` 800, `11px`, `letter-spacing: 0.10em`, uppercase, `#00df81`.
  - Layer Tags: `JetBrains Mono` 800, `9px`, `letter-spacing: 0.08em`, uppercase, `#00df81`.
  - Layer Specifications: `JetBrains Mono` 500/700, `11px`, line-height `1.35`, `#cbd5e1` with `#00df81` highlights.
  - Live Metrics: `JetBrains Mono` 700, `12px`, `#00df81` with `9px` uppercase label in `#94a3b8`.
  - CLI Commands: `JetBrains Mono` 500, `12px`, white text with green prompt char `---
name: impeccable
description: Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior, theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions, UX copy, error states, edge cases, i18n, and reusable design systems or tokens. Also use for bland designs that need to become bolder or more delightful, loud designs that should become quieter, live browser iteration on UI elements, or ambitious visual effects that should feel technically extraordinary. Not for backend-only or non-UI tasks.
version: 3.9.1
license: Apache 2.0
---

Designs and iterates production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Setup

You MUST do these steps before proceeding:

1. Run `node .kiro/skills/impeccable/scripts/context.mjs` once per session; if the runtime shows this skill's loaded base directory, run `node <skill-base-dir>/scripts/context.mjs` instead. Keep cwd/workdir at the user's project, not the skill directory. If the request names or implies a file, route, or app inside a monorepo, infer the concrete path and append `--target <path>` to the same command. If you've already seen its output in this conversation, do not re-run it. The script either prints the project's PRODUCT.md (and DESIGN.md when present) as a markdown block, or tells you it's missing. Follow whatever it prints. **If it reports `NO_PRODUCT_MD`:** divert into `reference/init.md` first when the user invoked `init`, `teach`, `craft`, or `shape`, or when their wording clearly maps to one of those from-scratch build flows (for example: "build/create/make a landing page", "design a new app", or "shape a feature"). Captured product context is the point of those flows. For any other command, a scoped evaluate / refine / enhance / fix / iterate request against existing code, do **not** divert into init. The existing code is the context: proceed with the requested command, infer the register from the surface in focus (step 4), and offer `/impeccable init` once as a suggestion the user can take later. A missing PRODUCT.md must never block a scoped request. If the output ends with an `UPDATE_AVAILABLE` directive, follow it (ask the user once about updating, then continue). It never blocks the current task.
2. If the user invoked a sub-command (`craft`, `shape`, `audit`, `polish`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow; without it you will skip steps the user expects.
3. Familiarize yourself with any existing design system, conventions, and components in the code. Read at least one project file (CSS / tokens / theme / a representative component or page). **Required even when you've loaded a sub-command reference in step 2.** Don't reinvent the wheel; use what's there when it works, branch out when the UX wins.
4. Read the matching register reference. **This is non-optional; skipping it produces generic output.** If the project is marketing, a landing page, a campaign, long-form content, or a portfolio (design IS the product), read `reference/brand.md`. If it is app UI, admin, a dashboard, or a tool (design SERVES the product), read `reference/product.md`. Pick by first match: (1) task cue ("landing page" vs "dashboard"); (2) surface in focus (the page, file, or route being worked on); (3) `register` field in PRODUCT.md.
5. **If the project is brand-new (no existing CSS tokens / theme / committed brand colors found in step 3)**, run `node .kiro/skills/impeccable/scripts/palette.mjs` to receive a brand seed color and composition guidance. This is the anchor for your primary brand color. Compose the rest of the palette (bg, surface, ink, accent, muted) around it per the script's instructions. Use OKLCH throughout. **Skip this step only if step 3 found committed brand colors in existing tokens; in that case identity-preservation wins.**

.

#### Layout & Staging
- **Asymmetric Split Canvas**:
  - **Editorial Column** (left, e.g. ~460px): Monospace kicker badge -> Punchy lowercase grotesque headline -> Inverted black cutout box -> Explanatory paragraph with highlight tags -> Terminal command pill at bottom.
  - **Architecture Telemetry Board** (right, e.g. ~730px): Deep obsidian slate card (`#090c12`, 20px radius, dual borders) displaying multi-layer processing pipelines with live metrics and real-time execution states.
- **Precision Hardware Micro-Grid**: 24px x 24px grid overlay built from `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)` gives tactile hardware texture to console surfaces.
- **Connected Flow Rail**: Vertical data rail (`rgba(255, 255, 255, 0.08)`) with glowing traveling gradient energy beam (`.flow-beam`) connecting pipeline layers.

#### Motion & Micro-Interactions
- **Live Status Pulse (`status-dot-pulse`)**: 1.4s infinite pulsing emerald beacon with scale and opacity respiration.
- **Flow Beam Animation**: Traveling gradient light packet down the vertical flow rail.
- **Layer State Transitions**: Hover and active transitions using crisp exponential curves (`cubic-bezier(0.16, 1, 0.3, 1)`), illuminating active rows with an emerald halo (`0 0 20px rgba(0, 223, 129, 0.25)`).
- **Reduced Motion**: Provide instant transition and non-animating glowing indicator fallbacks under `@media (prefers-reduced-motion: reduce)`.

### Component Vocabulary
1. **Cutout Display Box (`.cutout-box`)**: High-impact black highlight box for lowercase display titles.
2. **Editorial Monospace Badge (`.editorial-badge`)**: High-contrast black pill with mint text for phase and category labels.
3. **Terminal Command Pill (`.terminal-pill`)**: CLI invocation capsule with green prompt (`---
name: impeccable
description: Use when the user wants to design, redesign, shape, critique, audit, polish, clarify, distill, harden, optimize, adapt, animate, colorize, extract, or otherwise improve a frontend interface. Covers websites, landing pages, dashboards, product UI, app shells, components, forms, settings, onboarding, and empty states. Handles UX review, visual hierarchy, information architecture, cognitive load, accessibility, performance, responsive behavior, theming, anti-patterns, typography, fonts, spacing, layout, alignment, color, motion, micro-interactions, UX copy, error states, edge cases, i18n, and reusable design systems or tokens. Also use for bland designs that need to become bolder or more delightful, loud designs that should become quieter, live browser iteration on UI elements, or ambitious visual effects that should feel technically extraordinary. Not for backend-only or non-UI tasks.
version: 3.9.1
license: Apache 2.0
---

Designs and iterates production-grade frontend interfaces. Real working code, committed design choices, exceptional craft.

## Setup

You MUST do these steps before proceeding:

1. Run `node .kiro/skills/impeccable/scripts/context.mjs` once per session; if the runtime shows this skill's loaded base directory, run `node <skill-base-dir>/scripts/context.mjs` instead. Keep cwd/workdir at the user's project, not the skill directory. If the request names or implies a file, route, or app inside a monorepo, infer the concrete path and append `--target <path>` to the same command. If you've already seen its output in this conversation, do not re-run it. The script either prints the project's PRODUCT.md (and DESIGN.md when present) as a markdown block, or tells you it's missing. Follow whatever it prints. **If it reports `NO_PRODUCT_MD`:** divert into `reference/init.md` first when the user invoked `init`, `teach`, `craft`, or `shape`, or when their wording clearly maps to one of those from-scratch build flows (for example: "build/create/make a landing page", "design a new app", or "shape a feature"). Captured product context is the point of those flows. For any other command, a scoped evaluate / refine / enhance / fix / iterate request against existing code, do **not** divert into init. The existing code is the context: proceed with the requested command, infer the register from the surface in focus (step 4), and offer `/impeccable init` once as a suggestion the user can take later. A missing PRODUCT.md must never block a scoped request. If the output ends with an `UPDATE_AVAILABLE` directive, follow it (ask the user once about updating, then continue). It never blocks the current task.
2. If the user invoked a sub-command (`craft`, `shape`, `audit`, `polish`, ...), you MUST read `reference/<command>.md` next. Non-optional. The reference defines the command's flow; without it you will skip steps the user expects.
3. Familiarize yourself with any existing design system, conventions, and components in the code. Read at least one project file (CSS / tokens / theme / a representative component or page). **Required even when you've loaded a sub-command reference in step 2.** Don't reinvent the wheel; use what's there when it works, branch out when the UX wins.
4. Read the matching register reference. **This is non-optional; skipping it produces generic output.** If the project is marketing, a landing page, a campaign, long-form content, or a portfolio (design IS the product), read `reference/brand.md`. If it is app UI, admin, a dashboard, or a tool (design SERVES the product), read `reference/product.md`. Pick by first match: (1) task cue ("landing page" vs "dashboard"); (2) surface in focus (the page, file, or route being worked on); (3) `register` field in PRODUCT.md.
5. **If the project is brand-new (no existing CSS tokens / theme / committed brand colors found in step 3)**, run `node .kiro/skills/impeccable/scripts/palette.mjs` to receive a brand seed color and composition guidance. This is the anchor for your primary brand color. Compose the rest of the palette (bg, surface, ink, accent, muted) around it per the script's instructions. Use OKLCH throughout. **Skip this step only if step 3 found committed brand colors in existing tokens; in that case identity-preservation wins.**

), code string, and translucent copy button.
4. **Architecture Telemetry Board (`.architecture-board`)**: 20px-radius obsidian hardware chassis with micro-grid overlay and live status radar badge.
5. **3-Column Layer Row (`.layer-row`)**: Structured data card with layer identity, technical specs, and right-aligned metrics.
6. **Flow Rail & Energy Beam (`.flow-rail`, `.flow-beam`)**: Vertical telemetry conduit with traveling photon beam.
7. **Live Status Radar Badge (`.live-status-badge`)**: Pill badge with pulsing emerald dot and active status text.
8. **Floating HUD Capsule (`.subtitle-overlay`)**: Floating black glass capsule with emerald border and CC status pill.

### Absolute Quality Standards
- **Contrast**: Body text on mint canvas must hit ≥10:1 (`#06190e` or `#000000`). Console text must maintain ≥4.5:1 against `#090c12`.
- **Typographic Discipline**: Keep letter-spacing at `-0.05em` for large lowercase Space Grotesk display headings; never apply negative tracking to small body text or monospace code.
- **No Generic AI Slop**: Refuse desaturated pastel cards, generic warm-cream paper backgrounds, and cookie-cutter SaaS layouts.
- **No Broken Layouts**: Responsive grids with graceful wrapping; test that large display headers do not overflow narrow containers.

## Commands

| Command | Category | Description | Reference |
|---|---|---|---|
| `craft [feature]` | Build | Shape, then build a feature end-to-end | [reference/craft.md](reference/craft.md) |
| `shape [feature]` | Build | Plan UX/UI before writing code | [reference/shape.md](reference/shape.md) |
| `init` | Build | Set up project context: PRODUCT.md, DESIGN.md, live config, next steps | [reference/init.md](reference/init.md) |
| `document` | Build | Generate DESIGN.md from existing project code | [reference/document.md](reference/document.md) |
| `extract [target]` | Build | Pull reusable tokens and components into design system | [reference/extract.md](reference/extract.md) |
| `critique [target]` | Evaluate | UX design review with heuristic scoring | [reference/critique.md](reference/critique.md) |
| `audit [target]` | Evaluate | Technical quality checks (a11y, perf, responsive) | [reference/audit.md](reference/audit.md) |
| `polish [target]` | Refine | Final quality pass before shipping | [reference/polish.md](reference/polish.md) |
| `bolder [target]` | Refine | Amplify safe or bland designs | [reference/bolder.md](reference/bolder.md) |
| `quieter [target]` | Refine | Tone down aggressive or overstimulating designs | [reference/quieter.md](reference/quieter.md) |
| `distill [target]` | Refine | Strip to essence, remove complexity | [reference/distill.md](reference/distill.md) |
| `harden [target]` | Refine | Production-ready: errors, i18n, edge cases | [reference/harden.md](reference/harden.md) |
| `onboard [target]` | Refine | Design first-run flows, empty states, activation | [reference/onboard.md](reference/onboard.md) |
| `animate [target]` | Enhance | Add purposeful animations and motion | [reference/animate.md](reference/animate.md) |
| `colorize [target]` | Enhance | Add strategic color to monochromatic UIs | [reference/colorize.md](reference/colorize.md) |
| `typeset [target]` | Enhance | Improve typography hierarchy and fonts | [reference/typeset.md](reference/typeset.md) |
| `layout [target]` | Enhance | Fix spacing, rhythm, and visual hierarchy | [reference/layout.md](reference/layout.md) |
| `delight [target]` | Enhance | Add personality and memorable touches | [reference/delight.md](reference/delight.md) |
| `overdrive [target]` | Enhance | Push past conventional limits | [reference/overdrive.md](reference/overdrive.md) |
| `clarify [target]` | Fix | Improve UX copy, labels, and error messages | [reference/clarify.md](reference/clarify.md) |
| `adapt [target]` | Fix | Adapt for different devices and screen sizes | [reference/adapt.md](reference/adapt.md) |
| `optimize [target]` | Fix | Diagnose and fix UI performance | [reference/optimize.md](reference/optimize.md) |
| `live` | Iterate | Visual variant mode: pick elements in the browser, generate alternatives | [reference/live.md](reference/live.md) |

Plus three management commands: `pin <command>`, `unpin <command>`, and `hooks <on|off|status|...>`, detailed below.

### Routing rules

1. **No argument**: the user is asking "what should I do?" Make the menu context-aware instead of static. Setup has already run `context.mjs`; if that reported `NO_PRODUCT_MD` the project has no captured context yet, so lead the menu with `/impeccable init` as the top recommendation (one line on why) and still show the rest below; don't silently jump into init. Otherwise run `node .kiro/skills/impeccable/scripts/context-signals.mjs` once and read its JSON, then lead with the **2-3 highest-value next commands**, each with a one-line reason pulled from the signals, followed by the full menu (the table above, grouped by category). **Never auto-run a command; the recommendation is a suggestion the user confirms.**

   Reason over the signals; there is no score to obey:
   - `setup.hasDesign` false while `setup.hasCode` true → `document` (capture the visual system).
   - `critique.latest` is `null` → the project has never been critiqued; for a set-up project with a real surface, offering `/impeccable critique <surface>` is a strong default.
   - `critique.latest` with a low `score` or non-zero `p0` / `p1` → `polish` (it reads that snapshot as its backlog), or re-run `critique` if the snapshot looks stale.
   - `git.changedFiles` pointing at one surface → scope `audit` or `polish` to those files specifically, naming them.
   - `devServer.running` true → `live` is available for in-browser iteration; if false, don't lead with `live`.
   - Otherwise group by intent exactly as init's "Recommend starting points" step does (build new / improve what's there / iterate visually), tailored to `setup.register`.

   **If `scan.targets` is non-empty, run `node .kiro/skills/impeccable/scripts/detect.mjs --json <scan.targets joined by spaces>` once** (the bundled detector over local files: no network, no npx). `scan.via` tells you what they are: `git-changes` (the markup/style files in your dirty tree, the most relevant set), `source-dir` (e.g. `src`, `app`), `html`, or `root`. Fold the hits into your picks: many quality / contrast hits → `audit` or `polish`; a specific slop family → the matching command (gradient text or eyebrows → `quieter` / `typeset`, flat or gray palette → `colorize`, and so on). It's a real, current signal that beats guessing. If detect errors or the tree is large and slow, skip it and recommend the user run `audit` themselves; never block the suggestion on it.

   Keep it to 2-3 pointed picks with the exact command to type. The menu stays the fallback; the recommendation is the lede.
2. **First word matches a command** (table above OR `pin` / `unpin` / `hooks`): load its reference file and follow its instructions. Everything after the command name is the target.
3. **First word doesn't match, but the intent clearly maps to one command** (e.g. "fix the spacing" → `layout`, "rewrite this error message" → `clarify`, "the colors feel flat" → `colorize`): load that command's reference and proceed as if invoked. If two commands could fit, ask once which.
4. **No clear command match**: general design invocation. Apply the setup steps, the General rules, and the loaded register reference, using the full argument as context.

Setup (context gathering, register) is already loaded by then; sub-commands don't re-invoke `/impeccable`.

If the first word is `craft` or `shape`, or routing rule 3 clearly maps the user's intent to either command, setup still runs first, but the matching reference ([reference/craft.md](reference/craft.md) or [reference/shape.md](reference/shape.md)) owns the rest of the flow. Both are from-scratch build flows: if setup invokes `init` as a blocker, finish init, refresh context, then resume the original command and target.

`teach` is a deprecated alias for `init`: if the user types it, load [reference/init.md](reference/init.md) and proceed as if they ran `init`.

## Pin / Unpin

**Pin** creates a standalone shortcut so `/<command>` invokes `/impeccable <command>` directly. **Unpin** removes it. The script writes to every harness directory present in the project.

```bash
node .kiro/skills/impeccable/scripts/pin.mjs <pin|unpin> <command>
```

Valid `<command>` is any command from the table above. Report the script's result concisely. Confirm the new shortcut on success, relay stderr verbatim on error.

## Hooks

`/impeccable hooks <on|off|status|ignore-rule|ignore-file|ignore-value|reset>` manages the design detector hook for this project. The hook auto-runs the detector after direct UI file edits and surfaces findings as system reminders. Full flow is in [reference/hooks.md](reference/hooks.md); load it when the user invokes `/impeccable hooks` with any argument.