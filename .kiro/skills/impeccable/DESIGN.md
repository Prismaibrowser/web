---
name: PrismSpace Autonomous Developer OS
description: High-voltage electric mint and obsidian telemetry design system for autonomous AI developer environments and swarm orchestration.
colors:
  primary: "#00df81"
  primary-glow: "rgba(0, 223, 129, 0.25)"
  primary-dark: "#06190e"
  surface-canvas: "#00df81"
  surface-board: "#090c12"
  surface-card: "rgba(255, 255, 255, 0.03)"
  surface-card-active: "rgba(0, 223, 129, 0.08)"
  surface-cutout: "#000000"
  surface-terminal: "#000000"
  surface-hud: "rgba(0, 0, 0, 0.92)"
  text-ink: "#06190e"
  text-ink-strong: "#000000"
  text-highlight-bg: "rgba(255, 255, 255, 0.4)"
  text-white: "#ffffff"
  text-code: "#cbd5e1"
  text-muted: "#94a3b8"
  text-accent: "#00df81"
  border-board: "rgba(0, 0, 0, 0.25)"
  border-board-inner: "rgba(255, 255, 255, 0.08)"
  border-card: "rgba(255, 255, 255, 0.08)"
  border-card-active: "#00df81"
  border-hud: "rgba(0, 223, 129, 0.6)"
typography:
  display:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 900
    lineHeight: 0.92
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "normal"
  code:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.6875rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.08em"
  metric:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
rounded:
  xs: "3px"
  sm: "4px"
  md: "6px"
  lg: "10px"
  xl: "20px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "18px"
  xl: "24px"
  "2xl": "44px"
components:
  cutout-box:
    backgroundColor: "{colors.surface-cutout}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "3px 18px 7px 18px"
  editorial-badge:
    backgroundColor: "{colors.surface-cutout}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "4px 12px"
  terminal-pill:
    backgroundColor: "{colors.surface-terminal}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.lg}"
    padding: "9px 16px"
  architecture-board:
    backgroundColor: "{colors.surface-board}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.xl}"
    padding: "18px 22px"
  layer-row:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.lg}"
    padding: "10px 14px"
  layer-row-active:
    backgroundColor: "{colors.surface-card-active}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.lg}"
    padding: "10px 14px"
  status-badge:
    backgroundColor: "rgba(0, 223, 129, 0.12)"
    textColor: "{colors.primary}"
    rounded: "{rounded.full}"
    padding: "3px 10px"
  subtitle-overlay:
    backgroundColor: "{colors.surface-hud}"
    textColor: "{colors.text-white}"
    rounded: "{rounded.full}"
    padding: "8px 24px"
---

# Design System: PrismSpace Autonomous Developer OS

## 1. Overview

**Creative North Star: "The High-Voltage Mission Control — Where Code Meets Autonomous Orchestration"**

The PrismSpace design system is an uncompromising, high-contrast visual paradigm engineered for autonomous developer operating systems, multi-agent swarms, and live machine learning pipelines. It shatters the timid, beige, and cookie-cutter SaaS templates of generic AI tooling in favor of an electric, cinematic, hardware-console aesthetic.

The canvas is anchored by a high-energy drenched surface of electric mint (`#00df81`), commanding immediate visual focus. Across this canvas sits an asymmetric editorial-and-architecture stage: an editorial column delivering punchy, lowercase grotesque typography (`Space Grotesk` at 900 weight with tight `-0.05em` tracking) paired with inverted solid black cutout highlight boxes (`#000000` background with glowing `#00df81` text), balanced by a floating obsidian hardware console (`#090c12`) featuring precision 24px micro-grid textures, multi-layer telemetry rows, flowing vertical energy beams, and real-time execution metrics rendered in sharp `JetBrains Mono`.

This design system deliberately rejects:
- Desaturated pastel cards and generic warm-cream backgrounds.
- Timid gray-on-gray typography and fuzzy floating drop shadows.
- Generic symmetrical 3-card grids without architectural hierarchy.
- Default browser fonts and loose tracking that dissipates tension.

**Key Characteristics:**
- **High-Voltage Contrast:** Drenched electric mint meets obsidian slate and pure black cutouts.
- **Asymmetric Staging:** Balanced dual-engine layout — editorial narrative on the left, live technical hardware telemetry on the right.
- **Typography with Grip:** Tight, heavy lowercase `Space Grotesk` headers paired with technical `JetBrains Mono` telemetry.
- **Instrument-Grade Telemetry:** 6-layer architecture workflow boards with flowing energy rails and pulsing status beacons.

---

## 2. Colors

The palette balances ultra-high-saturation chromatic power with deep obsidian dark-mode discipline.

### Primary
- **Electric Mint / Neon Green** (`#00df81` / `oklch(0.78 0.22 153.5)`): The primary identity anchor. Used as the drenched canvas background, the glowing text inside black cutout boxes, pulsing live status dots, and telemetry highlight values.
- **Primary Glow Halo** (`rgba(0, 223, 129, 0.25)`): Ambient glow applied to active layers, focus states, and energy beams.

### Neutral & Surfaces
- **Obsidian Board** (`#090c12`): Deep slate obsidian surface for the architecture console and telemetry monitors.
- **Solid Black Cutout** (`#000000`): Inverted cutout title boxes, editorial kicker badges, and the terminal command pill.
- **Subtle Layer Card** (`rgba(255, 255, 255, 0.03)`): Default row container inside the obsidian console, providing subtle separation without opaque visual weight.
- **Active Layer Card** (`rgba(0, 223, 129, 0.08)`): Highlighted state for rows currently executing or streaming telemetry.
- **HUD Glass Capsule** (`rgba(0, 0, 0, 0.92)`): High-density floating pill container for closed-caption status and system subtitles.

### Typography & Ink
- **Deep Mint Ink** (`#06190e` / `#000000`): Maximum contrast body text on the electric mint canvas (tested at >10:1 contrast).
- **Text Highlight Pill** (`rgba(255, 255, 255, 0.4)`): Inline pill highlight backing for critical terms on the green background.
- **Console Primary White** (`#ffffff`): Pure white text for headings, terminal command text, and layer titles on obsidian boards.
- **Technical Slate** (`#cbd5e1`): Secondary technical specifications, formulas, and pipeline descriptions.
- **Muted Telemetry Label** (`#94a3b8`): Low-emphasis uppercase metrics descriptors (e.g. `GATEWAY P95`, `REACTIVE UI`).

---

## 3. Typography

The typographic system creates tension between expressive brutalist lowercase grotesque display and precise monospaced telemetry instrumentation.

### Font Families
- **Display & Headings**: `Space Grotesk` (weights 600, 700, 800, 900).
- **Technical UI, Badges, Telemetry & Code**: `JetBrains Mono` (weights 400, 500, 600, 700, 800).

### Hierarchy & Scales

| Role | Font Family | Size | Weight | Line Height | Tracking | Case | Application |
|---|---|---|---|---|---|---|---|
| **Display Hero** | Space Grotesk | `64px` (`4rem`) | 900 | `0.92` | `-0.05em` | lowercase | Primary editorial titles (`you code it.`) |
| **Cutout Display** | Space Grotesk | `64px` (`4rem`) | 900 | `0.92` | `-0.05em` | lowercase | Inverted box title (`now orchestrate.`) |
| **Section Title** | Space Grotesk | `28px` (`1.75rem`) | 800 | `1.1` | `-0.04em` | lowercase | Column headers and secondary titles |
| **Editorial Body** | Space Grotesk | `17px` (`1.0625rem`) | 600 | `1.45` | normal | sentence | Narrative descriptions on canvas |
| **Brand Logo** | JetBrains Mono | `17px` (`1.0625rem`) | 800 | `1.0` | `-0.02em` | lowercase | Header brand mark (`/prismspace`) |
| **Nav Links** | Space Grotesk | `13px` (`0.8125rem`) | 700 | `1.0` | `-0.01em` | lowercase | Top navigation items |
| **Kicker / Badge** | JetBrains Mono | `11px` (`0.6875rem`) | 800 | `1.0` | `0.08em` | uppercase | Tag badges (`END-TO-END SYSTEM`) |
| **Board Header** | JetBrains Mono | `11px` (`0.6875rem`) | 800 | `1.0` | `0.10em` | uppercase | Telemetry board label (`FIGURE 4.2`) |
| **Layer Number** | JetBrains Mono | `9px` (`0.5625rem`) | 800 | `1.0` | `0.08em` | uppercase | Layer identifiers (`LAYER 01`) |
| **Layer Name** | Space Grotesk | `13px` (`0.8125rem`) | 700 | `1.2` | `-0.01em` | Title Case | Component titles (`Presentation`) |
| **Layer Specs** | JetBrains Mono | `11px` (`0.6875rem`) | 500/700 | `1.35` | normal | mixed | Technical pipeline architecture specs |
| **Metric Value** | JetBrains Mono | `12px` (`0.75rem`) | 700 | `1.0` | normal | mixed | Live telemetry metrics (`60 FPS`, `18 ms`) |
| **Metric Label** | JetBrains Mono | `9px` (`0.5625rem`) | 600 | `1.0` | `0.05em` | uppercase | Metric unit descriptors (`REACTIVE UI`) |
| **Terminal Code** | JetBrains Mono | `12px` (`0.75rem`) | 500 | `1.4` | normal | mixed | CLI commands (`$ npx prismspace ...`) |

---

## 4. Elevation & Depth

Elevation is achieved through architectural layering, precision borders, dark volumetric drop shadows, and subtle micro-grid textures rather than fuzzy ambient blurs.

### Elevation Vocabulary
- **Level 1 (Inverted Cutout & Badges):**
  - Background: `#000000`
  - Shadow: `0 10px 25px rgba(0, 0, 0, 0.25)`
  - Radius: `4px`
- **Level 2 (Terminal Command Pill):**
  - Background: `#000000`
  - Shadow: `0 10px 20px rgba(0, 0, 0, 0.2)`
  - Radius: `10px`
- **Level 3 (Architecture Telemetry Board):**
  - Background: `#090c12`
  - Border: Dual border system — outer `2px solid rgba(0, 0, 0, 0.25)`, inner outline `1px solid rgba(255, 255, 255, 0.08)`.
  - Shadow: Deep volumetric drop shadow `0 30px 60px -15px rgba(0, 0, 0, 0.5)`.
  - Radius: `20px`
  - Texture: 24px x 24px micro-grid overlay using `linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)`.
- **Level 4 (Active Telemetry Row):**
  - Background: `rgba(0, 223, 129, 0.08)`
  - Border: `1px solid #00df81`
  - Glow: Neon halo `box-shadow: 0 0 20px rgba(0, 223, 129, 0.25)`
  - Radius: `10px`
- **Level 5 (Floating HUD Subtitle Capsule):**
  - Background: `rgba(0, 0, 0, 0.92)`
  - Border: `1px solid rgba(0, 223, 129, 0.6)`
  - Shadow: `0 10px 30px rgba(0, 0, 0, 0.7)`
  - Radius: `9999px` (full pill)

---

## 5. Components

### 5.1 Cutout Display Title Box
The signature typographic element. Creates an immediate high-impact contrast stop.
```css
.cutout-box {
  display: inline-block;
  background-color: #000000;
  padding: 3px 18px 7px 18px;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
}
.cutout-text {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 64px;
  font-weight: 900;
  line-height: 0.92;
  letter-spacing: -0.05em;
  color: #00df81;
  text-transform: lowercase;
}
```

### 5.2 Editorial Monospace Badge
Used as section kickers and stage indicators.
```css
.editorial-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: #000000;
  color: #00df81;
  border-radius: 6px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'JetBrains Mono', monospace;
  margin-bottom: 14px;
}
```

### 5.3 Terminal Command Pill
Tactile CLI invocation element with green prompt character and integrated copy button.
```css
.terminal-pill {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background-color: #000000;
  color: #ffffff;
  padding: 9px 16px;
  border-radius: 10px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 12px;
  font-weight: 500;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.terminal-prompt-char {
  color: #00df81;
  font-weight: 700;
}
.copy-btn {
  background: rgba(255, 255, 255, 0.15);
  color: #ffffff;
  padding: 3px 8px;
  border-radius: 5px;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.05em;
  cursor: pointer;
}
```

### 5.4 Architecture Telemetry Board & Rows
The hardware instrumentation panel displaying multi-tier execution pipelines.
```css
.architecture-board {
  background: #090c12;
  border-radius: 20px;
  border: 2px solid rgba(0, 0, 0, 0.25);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.08);
  padding: 18px 22px;
  position: relative;
}
.layer-row {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 10px;
  padding: 10px 14px;
  display: grid;
  grid-template-columns: 140px 1fr 140px;
  align-items: center;
  gap: 12px;
}
.layer-row.highlighted {
  background: rgba(0, 223, 129, 0.08);
  border-color: #00df81;
  box-shadow: 0 0 20px rgba(0, 223, 129, 0.25);
}
```

### 5.5 Flow Rail & Energy Beam
A vertical data flow conduit running down the telemetry board, indicating current execution position.
```css
.flow-rail {
  position: absolute;
  left: 3px;
  top: 4px;
  bottom: 4px;
  width: 3px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 999px;
}
.flow-beam {
  position: absolute;
  top: 0;
  left: -1px;
  width: 5px;
  height: 70px;
  background: linear-gradient(180deg, transparent, #00df81 50%, #ffffff 80%, #00df81);
  box-shadow: 0 0 10px #00df81;
  border-radius: 999px;
  opacity: 0.95;
}
```

### 5.6 Live Status Radar Badge
Pill with pulsing emerald LED indicator showing live connection status.
```css
.live-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(0, 223, 129, 0.12);
  border: 1px solid rgba(0, 223, 129, 0.3);
  font-size: 10px;
  font-weight: 700;
  color: #00df81;
  font-family: 'JetBrains Mono', monospace;
}
.status-dot-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00df81;
  box-shadow: 0 0 8px #00df81;
  animation: pulseDot 1.4s infinite;
}
@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}
```

---

## 6. Do's and Don'ts

### Do
- **Commit to the electric mint canvas** (`#00df81`). Let the drenched surface define the primary energy of the interface.
- **Use all-lowercase for bold hero titles** (`you code it.`, `now orchestrate.`, `raw prompt in.`). The lowercase phrasing gives the brand its confident, unpretentious tone.
- **Enforce `-0.05em` letter-spacing on heavy grotesque display headings**. This keeps the letterforms compact, tight, and punchy.
- **Pair Space Grotesk with JetBrains Mono**. Use Space Grotesk for human-facing editorial titles and JetBrains Mono for system-level telemetry, layer indexes, latency metrics, and commands.
- **Use the inverted cutout box** (`.cutout-box`) to highlight the operative phrase of every primary header.
- **Structure architecture telemetry with 3-column rows** (`layer-tag / technical-specs / live-metrics`).

### Don't
- **Don't fade into muted gray backgrounds or warm-cream paper textures**. That dilutes the high-voltage character.
- **Don't use uppercase tracking on long editorial headlines**. Reserve uppercase tracking exclusively for short monospace badges (`END-TO-END SYSTEM`, `FIGURE 4.2`).
- **Don't use generic rounded pill buttons with soft drop shadows**. Use sharp, disciplined geometries (4px for cutout boxes, 10px for cards/pills, 20px for the master console).
- **Don't omit the terminal prompt symbol (`$`) or copy button on CLI blocks**.
- **Don't use low-contrast text**. Always ensure `#06190e` / `#000000` on the electric mint surface (>10:1 ratio) and `#ffffff` / `#cbd5e1` on the obsidian board.
