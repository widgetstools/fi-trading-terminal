# MarketsUI FI Trading Terminal

A fixed income trading terminal built as a monorepo to showcase a **shared design system** across React and Angular frameworks. Both apps look and behave nearly identically — same colors, typography, component styling, and AG Grid theming — all driven from a single set of design tokens.

## Monorepo Structure

```
fi-trading-terminal/
├── design-system/              ← Shared design tokens & adapters
│   ├── tokens/
│   │   ├── primitives.ts       ← Color palettes, type scale, spacing, radius
│   │   ├── semantic.ts         ← Dark/light color schemes (surface, text, border, accent)
│   │   └── components.ts       ← Per-component tokens (button, input, tab, badge, table)
│   ├── adapters/
│   │   ├── shadcn.ts           ← CSS variable generator for shadcn/ui (React)
│   │   ├── primeng.ts          ← definePreset() generator for PrimeNG (Angular)
│   │   └── ag-grid.ts          ← AG Grid param objects for themeQuartz.withParams()
│   ├── themes/
│   │   ├── fi-dark.css         ← Pre-built dark theme CSS variables
│   │   └── fi-light.css        ← Pre-built light theme CSS variables
│   └── index.ts                ← Public API
├── react-app/                  ← React 19 + Vite + shadcn/ui + AG Grid
├── angular-app/                ← Angular 19 + PrimeNG + AG Grid
└── README.md
```

## Quick Start

```bash
# React app
cd react-app
npm install
npm run dev                     # → http://localhost:5173

# Angular app
cd angular-app
npm install
npx ng serve                    # → http://localhost:4200
```

---

## Multiple Design Systems

The terminal ships **seven** interchangeable design systems that can be switched at runtime in both apps. Every DS supports both `dark` and `light` modes.

| ID | Label | Vibe |
|---|---|---|
| `fi` | FI Default | Navy ground, amber primary (Binance heritage) |
| `binance` | Binance | Pixel-faithful Binance Spot — navy + signature yellow, sharp 4px |
| `midnight` | Midnight | Near-black ground, electric blue, 8px radius |
| `gemini` | Gemini | True black, sage green, 12px radius |
| `resq` | Resq | True black, hot-pink primary, indigo accent, 16px pill radius |
| `wallet` | Wallet | Glassy navy, mint-teal primary, soft elevated cards |
| `powerui` | Power UI | Indigo-navy, coral / amber / indigo triad, 6px radius, Segoe UI |

### How it works (one-paragraph mental model)

Each design system is a single CSS file scoped to `[data-ds="<id>"][data-theme="<dark|light>"]` that defines a fixed contract of CSS variables (`--bn-bg`, `--bn-t0`, `--bn-border`, `--bn-yellow`, `--radius`, `--background`, `--primary`, etc.). The active DS is selected by setting two attributes on `<html>`: `data-ds` and `data-theme`. Every component, the AG Grid theme, the dock manager, and the shadcn/PrimeNG layers all read from the same variables — so flipping the attribute reskins the entire app instantly with zero re-renders.

### Adding a new design system (4 steps)

1. **Create the theme files** under `design-system/themes/`:
   ```
   design-system/themes/<id>-dark.css
   design-system/themes/<id>-light.css
   ```
   Each file must define the full `--bn-*` contract plus the shadcn HSL triplets (`--background`, `--foreground`, `--primary`, `--card`, `--border`, `--radius`, …). Copy [`fi-dark.css`](design-system/themes/fi-dark.css) as a starting template.

2. **Register it** in [`design-system/registry.ts`](design-system/registry.ts):
   ```typescript
   { id: '<id>', label: '<Label>', description: '<one-liner>', themes: ['dark','light'] }
   ```

3. **Import the CSS** at the top of both [`react-app/src/index.css`](react-app/src/index.css) and [`angular-app/src/styles.scss`](angular-app/src/styles.scss):
   ```css
   @import '../../design-system/themes/<id>-dark.css';
   @import '../../design-system/themes/<id>-light.css';
   ```

4. **That's it.** The DS picker (top-right of both apps) reads the registry automatically. No component changes, no rebuild config, no per-DS overrides needed.

### Switching at runtime

**React** — via the `ThemeContext`:
```tsx
import { useTheme } from '@/context/ThemeContext';

function Picker() {
  const { ds, setDs, designSystems, theme, toggleTheme } = useTheme();
  return (
    <select value={ds} onChange={e => setDs(e.target.value)}>
      {designSystems.map(d => <option key={d.id} value={d.id}>{d.label}</option>)}
    </select>
  );
}
```

**Angular** — via the `ThemeService` signals:
```typescript
import { inject } from '@angular/core';
import { ThemeService } from './services/theme.service';

const theme = inject(ThemeService);
theme.setDs('powerui');     // switch design system
theme.toggleTheme();        // flip dark/light
```

Both implementations persist the choice to `localStorage` (`fi-ds`, `fi-theme`) and write the attributes to `<html>`:
```html
<html data-ds="powerui" data-theme="dark">
```

### What re-skins automatically

When you switch DS or theme, the following layers all update from the same CSS variable contract:

- **shadcn/ui (React)** — reads `--background`, `--card`, `--primary`, `--border`, `--radius`, etc.
- **PrimeNG (Angular)** — Aura preset is generated from the same `--bn-*` tokens
- **AG Grid** — `themeQuartz.withParams()` uses `var(--bn-bg1)`, `var(--bn-t0)`, etc. so the grid reskins per-DS without per-DS adapter code
- **Dock Manager** — `--dock-*` HSL triplets are remapped to the shadcn HSL triplets globally (see [`react-app/src/index.css`](react-app/src/index.css)), so panels, splitters, tabs, hover, and overflow all match the active DS
- **Custom components** — anything written against `var(--bn-*)`

### Dock Manager theming

`@widgetstools/*-dock-manager` uses shadcn-style HSL triplets (`hsl(var(--dock-bg))`, `hsl(var(--dock-border))`, etc.) and writes its built-in palette as **inline styles** on the container. To make it follow the active design system, the global stylesheet remaps every `--dock-*` variable to the equivalent shadcn HSL triplet using `!important` (which beats the inline writes):

```css
.dock-manager-root[style],
.dock-manager-container[style] {
  --dock-bg:             var(--background)        !important;
  --dock-surface:        var(--card)              !important;
  --dock-panel-header:   var(--muted)             !important;
  --dock-tab-active:     var(--card)              !important;
  --dock-tab-text:       var(--muted-foreground)  !important;
  --dock-tab-text-active:var(--foreground)        !important;
  --dock-text:           var(--foreground)        !important;
  --dock-border:         var(--border)            !important;
  --dock-splitter:       var(--border)            !important;
  --dock-splitter-hover: var(--primary)           !important;
  --dock-hover:          var(--accent)            !important;
  --dock-primary:        var(--primary)           !important;
  /* …full mapping in react-app/src/index.css and angular-app/src/styles.scss */
}
```

This block is the **only** dock-manager customization needed. Switching DS automatically reskins the dock — no re-init, no JS, no per-DS code paths.

---

## Design System

### Token Architecture

The design system uses a three-tier token hierarchy:

| Tier | File | Purpose |
|------|------|---------|
| **Primitives** | `tokens/primitives.ts` | Raw values — color scales (neutral, teal, red, amber, blue, cyan, purple), font families, 4-tier font sizes (9/11/13/18px), spacing, radius, opacity, transitions |
| **Semantic** | `tokens/semantic.ts` | Purpose-driven mappings — `surface.ground`, `text.primary`, `accent.positive`, `action.buyBg`, etc. Separate `dark` and `light` color schemes |
| **Components** | `tokens/components.ts` | Per-component overrides — button, input, tab, badge, table, card, tooltip, scrollbar |

### Color Palette

| Role | Dark Mode | Light Mode (VS Code Light Modern) |
|------|-----------|-----------------------------------|
| Surface ground | `#0b0e11` | `#f8f8f8` (neutral gray) |
| Surface primary | `#161a1e` | `#ffffff` (white cards) |
| Surface secondary | `#1e2329` | `#f3f3f3` (neutral hover) |
| Surface tertiary | `#2b3139` | `#e8e8e8` (neutral active) |
| Text primary | `#eaecef` | `#3b3b3b` |
| Text secondary | `#a0a8b4` | `#616161` |
| Text muted | `#7a8494` | `#767676` |
| Border | `#313944` | `#e5e5e5` |
| Positive (buy) | `#2dd4bf` (teal-400) | `#0d9488` (teal-600) |
| Negative (sell) | `#f87171` (red-400) | `#dc2626` (red-600) |
| Warning | `#f0b90b` | `#d97706` (amber-600) |
| Info | `#3da0ff` | `#2563eb` (blue-600) |
| Highlight | `#22d3ee` | `#0891b2` (cyan-600) |

### Typography Scale

| Tier | Size | Usage |
|------|------|-------|
| `xs` | 10px (light) / 9px (dark) | Column headers, badges, timestamps, captions |
| `sm` | 11px | Body text, table cells, data values **(default)** |
| `md` | 13px | Section titles, CTA buttons |
| `lg` | 18px | KPI headline numbers |

- **Data font**: JetBrains Mono (monospace) — all numbers, prices, codes
- **UI font**: Geist (sans-serif) — labels, navigation, headings

---

## Using the Design System

### Option 1: Drop-in CSS (any framework)

Import the pre-built CSS files — no TypeScript build required:

```css
@import 'path/to/design-system/themes/fi-dark.css';
@import 'path/to/design-system/themes/fi-light.css';
```

Toggle themes by setting `data-theme="dark"` or `data-theme="light"` on the `<html>` element. All `var(--bn-*)` and `var(--fi-*)` CSS variables switch automatically.

### Option 2: React + shadcn/ui

**1. Install shadcn/ui** in your React project as usual.

**2. Import the CSS themes** in your `globals.css` or `index.css`:

```css
@import 'path/to/design-system/themes/fi-dark.css';
@import 'path/to/design-system/themes/fi-light.css';
```

This overrides all shadcn CSS variables (`--background`, `--foreground`, `--primary`, `--border`, etc.) plus adds the FI-specific tokens.

**3. AG Grid theming** — import the shared params and create the theme:

```typescript
// src/lib/agGridTheme.ts
import { themeQuartz } from 'ag-grid-community';
import { agGridLightParams, agGridDarkParams } from 'path/to/design-system/adapters/ag-grid';

export const fiGridTheme = themeQuartz
  .withParams(agGridLightParams as any, 'light')
  .withParams(agGridDarkParams as any, 'dark');
```

```tsx
// In your component
import { fiGridTheme } from './lib/agGridTheme';

<AgGridReact theme={fiGridTheme} ... />
```

**4. Dark mode toggle** — set both attributes:

```typescript
const mode = isDark ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', mode);  // CSS variables
document.body.dataset.agThemeMode = mode;                    // AG Grid
```

**5. Use CSS variables** in your components:

```tsx
<div style={{ background: 'var(--bn-bg1)', color: 'var(--bn-t0)', border: '1px solid var(--bn-border)' }}>
  <span style={{ color: 'var(--bn-green)' }}>+0.25</span>
</div>
```

### Option 3: Angular + PrimeNG

**1. Install PrimeNG** (v19+) with the Aura theme.

**2. Import the CSS themes** in your `styles.scss`:

```scss
@import 'path/to/design-system/themes/fi-dark.css';
@import 'path/to/design-system/themes/fi-light.css';
```

**3. Configure PrimeNG** with the FI preset in `app.config.ts`:

```typescript
import { providePrimeNG } from 'primeng/config';
import { definePreset } from '@primeuix/themes';
import { Aura } from '@primeng/themes/aura';
import { generatePrimeNGPreset } from 'path/to/design-system/adapters/primeng';

const FiTheme = definePreset(Aura, generatePrimeNGPreset() as any);

export const appConfig = {
  providers: [
    providePrimeNG({
      theme: {
        preset: FiTheme,
        options: { darkModeSelector: '[data-theme="dark"]' }
      }
    })
  ]
};
```

**4. AG Grid theming** — same adapter, same pattern:

```typescript
// src/app/services/ag-grid-theme.ts
import { themeQuartz } from 'ag-grid-community';
import { agGridLightParams, agGridDarkParams } from '@design-system/adapters/ag-grid';

export const fiGridTheme = themeQuartz
  .withParams(agGridLightParams as any, 'light')
  .withParams(agGridDarkParams as any, 'dark');
```

```typescript
// In your component
import { fiGridTheme } from '../services/ag-grid-theme';

@Component({
  template: '<ag-grid-angular [theme]="theme" [rowData]="data" [columnDefs]="cols" />'
})
export class MyGrid {
  theme = fiGridTheme;
}
```

**5. Dark mode toggle**:

```typescript
const mode = isDark ? 'dark' : 'light';
document.documentElement.setAttribute('data-theme', mode);
document.body.dataset['agThemeMode'] = mode;
```

**6. Path alias** — add to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@design-system/*": ["../design-system/*"]
    }
  }
}
```

### Option 4: Programmatic Token Access

Import tokens directly in TypeScript for dynamic use:

```typescript
import { dark, light, shared } from 'path/to/design-system/tokens/semantic';
import { colors, typography } from 'path/to/design-system/tokens/primitives';
import { componentTokens } from 'path/to/design-system/tokens/components';

// Access semantic values
console.log(dark.surface.primary);     // '#161a1e'
console.log(dark.accent.positive);     // '#2dd4bf'
console.log(shared.typography.fontSize.sm); // '11px'

// Get component-level tokens for a scheme
const darkComponents = componentTokens(dark);
console.log(darkComponents.button.buy.background); // '#0d9488'
console.log(darkComponents.table.headerBackground); // '#1e2329'
```

---

## CSS Variable Reference

### Surface & Layout

| Variable | Dark | Light | Usage |
|----------|------|-------|-------|
| `--bn-bg` | `#0b0e11` | `#f8f8f8` | Page background |
| `--bn-bg1` | `#161a1e` | `#ffffff` | Card/panel background |
| `--bn-bg2` | `#1e2329` | `#f3f3f3` | Hover/header background |
| `--bn-bg3` | `#2b3139` | `#e8e8e8` | Active/pressed background |
| `--bn-border` | `#313944` | `#e5e5e5` | Borders, dividers |
| `--bn-border2` | `#3e4754` | `#d4d4d4` | Interactive borders |

### Text

| Variable | Dark | Light | Usage |
|----------|------|-------|-------|
| `--bn-t0` | `#eaecef` | `#3b3b3b` | Primary text |
| `--bn-t1` | `#a0a8b4` | `#616161` | Labels, descriptions |
| `--bn-t2` | `#7a8494` | `#767676` | Captions, muted |
| `--bn-t3` | `#4a5568` | `#a0a0a0` | Disabled, placeholder |

### Semantic Colors

| Variable | Dark | Light | Usage |
|----------|------|-------|-------|
| `--bn-green` | `#2dd4bf` | `#0d9488` | Buy, positive, success |
| `--bn-red` | `#f87171` | `#dc2626` | Sell, negative, error |
| `--bn-yellow` | `#f0b90b` | `#d97706` | Warning, highlight |
| `--bn-blue` | `#3da0ff` | `#2563eb` | Info, links |
| `--bn-cyan` | `#22d3ee` | `#0891b2` | Secondary accent |

### Typography

| Variable | Value | Usage |
|----------|-------|-------|
| `--fi-mono` | `'JetBrains Mono', monospace` | Data, numbers |
| `--fi-sans` | `'Geist', sans-serif` | UI labels |
| `--fi-font-xs` | `9px` (dark) / `10px` (light) | Column headers, badges |
| `--fi-font-sm` | `11px` | Body text (default) |
| `--fi-font-md` | `13px` | Buttons, titles |
| `--fi-font-lg` | `18px` | KPI numbers |

### Light Mode Enhancements

The light theme ("Cool Ivory") includes additional styling beyond color swaps:

- **Panel shadows**: `box-shadow: 0 1px 3px rgba(0,0,0,0.05)` on dock panels for depth
- **Nav shadow**: subtle bottom shadow on the navigation bar
- **Badge overrides**: vibrant rgba backgrounds tuned for white card surfaces
- **Focus rings**: `outline: 2px solid var(--bn-blue)` on `:focus-visible` for keyboard navigation

---

## Tech Stack

| | React App | Angular App |
|---|---|---|
| Framework | React 19 + Vite 8 | Angular 19 |
| Components | shadcn/ui (Radix) | PrimeNG (Aura) |
| Data Grid | AG Grid Enterprise 35 | AG Grid Enterprise 35 |
| Layout | @widgetstools/react-dock-manager | @widgetstools/angular-dock-manager |
| Styling | Tailwind CSS 3.4 | SCSS + CSS variables |
| Fonts | JetBrains Mono + Geist | JetBrains Mono + Geist |

## AG Grid Enterprise License

Both apps use AG Grid Enterprise 35. For production, replace the empty license key:

```typescript
LicenseManager.setLicenseKey('YOUR_LICENSE_KEY_HERE');
```

Without a valid key, AG Grid runs in trial mode (watermark only, fully functional).
