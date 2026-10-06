---
name: Editorial Craft Portfolio
colors:
  surface: '#fbf8ff'
  surface-dim: '#dad9e3'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2fd'
  surface-container: '#eeedf7'
  surface-container-high: '#e8e7f1'
  surface-container-highest: '#e3e1ec'
  on-surface: '#1a1b22'
  on-surface-variant: '#47464b'
  inverse-surface: '#2f3038'
  inverse-on-surface: '#f1effa'
  outline: '#77767b'
  outline-variant: '#c8c5cb'
  surface-tint: '#5f5e61'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1e'
  on-primary-container: '#858387'
  inverse-primary: '#c8c5ca'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1b16'
  on-tertiary-container: '#88837c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e4e1e6'
  primary-fixed-dim: '#c8c5ca'
  on-primary-fixed: '#1b1b1e'
  on-primary-fixed-variant: '#47464a'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#e8e2d9'
  tertiary-fixed-dim: '#cbc6bd'
  on-tertiary-fixed: '#1d1b16'
  on-tertiary-fixed-variant: '#494640'
  background: '#fbf8ff'
  on-background: '#1a1b22'
  surface-variant: '#e3e1ec'
  canvas: '#FFFFFF'
  surface-subtle: '#F4F4F5'
  border-subtle: '#E4E4E7'
  success: '#16A34A'
typography:
  display:
    fontFamily: Public Sans
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Public Sans
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Public Sans
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Public Sans
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: 2rem
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Public Sans
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Public Sans
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.005em
  body-md:
    fontFamily: Public Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Public Sans
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  label-md:
    fontFamily: Public Sans
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: 1.25rem
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Public Sans
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies high-craft digital minimalism, tailored for modern developers, technical designers, and creative technologists. It blends architectural precision with an understated editorial aesthetic.

The visual style pairs generous whitespace and meticulous typographic rhythm with subtle hairline borders, muted neutral surface layers, and high-contrast typographic accents. Restraint defines the experience: chrome is minimized to focus on project case studies, technical writing, and visual artifacts. Interactions feel tactile, weightless, and immediate, using subtle surface elevation and precise boundary delineations rather than heavy ornamentation.

## Colors

The palette operates on high-contrast monospaced and sans-serif legibility anchored by neutral monochrome tones, with deliberate functional accents.

- **Primary (`#18181B`)**: Used for primary headlines, active visual anchors, high-contrast actions, and key typographic hierarchy.
- **Secondary (`#2563EB`)**: A vibrant digital cobalt reserved for interactive affordances, inline textual links, focused selection states, and live project tags.
- **Neutral (`#71717A`)**: Governs secondary body copy, captions, timestamps, metadata, and structural micro-copy.
- **Canvas & Surface Subtle (`#FFFFFF` & `#F4F4F5`)**: Form the clean structural ground plane and alternating content zones, maintaining airy readability.
- **Border Subtle (`#E4E4E7`)**: Defines hairline divisions, component perimeters, and layout grids without visual clutter.
- **Success (`#16A34A`)**: Highlights availability indicators (e.g., "Available for work") and live deployment statuses.

## Typography

The typographic hierarchy utilizes `Public Sans` across all roles, establishing an objective, clean, and highly legible tone. Strict optical trackings ensure large scale titles remain tight and editorial, while body and metadata roles retain comfortable openness for sustained reading.

- Use **display** and **headline-lg** for personal introductions, hero statements, and major case study titles.
- Use **headline-md** and **headline-sm** for section titles, article headers, and project card titles.
- Maintain **body-lg** for lead paragraphs and editorial abstracts; rely on **body-md** for standard writing and case study descriptions.
- Use **label-sm** in uppercase or title-case for status pills, category tags, technology stacks, and dates.

## Layout & Spacing

The layout is grounded in a centered, fixed-max content rail (max-width `72rem` for global views, `48rem` for long-form editorial case studies and writing). Content aligns along a 12-column system on desktop and tablet, collapsing to a single unified flow on mobile.

- **Desktop (>= 1024px)**: 12-column grid, `1.5rem` gutters, `2rem` outer margins.
- **Tablet (640px - 1023px)**: 6-column grid, `1.25rem` gutters, `1.5rem` outer margins.
- **Mobile (< 640px)**: 1-column stack, `1rem` margins, with card items spanning the full usable width.
- Vertical cadence enforces deliberate section separation (`4rem` to `6rem`) to maintain editorial openness and breathing room around media assets.

## Elevation & Depth

Visual depth is achieved through structural crispness and translucent floating layers rather than heavy ambient drops:

- **Surface Framing**: Standard depth uses `1px` solid borders (`#E4E4E7`) over clean white backgrounds (`#FFFFFF`). Content containers achieve visual separation through contrasting `#F4F4F5` sub-panels.
- **Floating Navigation Dock**: Positioned fixed at the bottom center or top center of the viewport. Uses a backdrop blur (`blur(16px)`), a semi-transparent surface (`rgba(255, 255, 255, 0.8)`), a subtle hairline border (`rgba(228, 228, 231, 0.8)`), and an ultra-diffused shadow (`0 8px 30px rgba(0, 0, 0, 0.06)`).
- **Interactive Card Lift**: On hover, interactive cards do not cast dramatic drop shadows; instead, borders transition subtly to `#D4D4D8` and elevate slightly (`translateY(-2px)`) with an ultra-soft diffuse drop (`0 10px 25px rgba(0, 0, 0, 0.04)`).

## Shapes

The geometric personality balances architectural precision with approachable modern touchpoints:

- Base cards, containers, input blocks, and preview frames utilize standard rounded corners (`0.5rem` / `8px`).
- Interactive showcase panels and modal dialogues expand to large roundings (`1rem` / `16px`).
- Badges, status indicators, floating dock navigations, and icon pill buttons utilize complete pill shapes (`9999px`) to create clear visual contrast against structured rectangular project grids.

## Components

### Floating Navigation Dock
- **Structure**: Horizontally centered, fixed floating bar.
- **Style**: Fully pill-shaped (`9999px`), translucent background with `backdrop-filter: blur(16px)`, enclosed by `1px` subtle border (`#E4E4E7`).
- **Items**: Nav icons and text labels spaced with `space-sm` horizontal padding; active item highlighted with a high-contrast dark fill (`#18181B`) and white text/icon.

### Buttons
- **Primary**: Solid `#18181B` fill, `#FFFFFF` text, `0.5rem` radius, `space-sm` by `space-md` padding. Subtly dims to `#27272A` on hover.
- **Secondary / Outline**: `#FFFFFF` canvas, `1px` solid `#E4E4E7` border, `#18181B` text. Transitions to `#F4F4F5` background on hover.
- **Ghost / Icon**: Transparent background, `#71717A` icon tone, shifts to `#18181B` with `#F4F4F5` background on hover.

### Project Showcase Cards
- **Container**: Canvas background framed with `1px` `#E4E4E7` border, `1rem` radius.
- **Media Frame**: Embedded image or interactive viewport with `0.5rem` internal margin, clipped with `0.5rem` border-radius and neutral `#F4F4F5` backdrop.
- **Metadata**: Title in `headline-sm`, summary in `body-sm` (`#71717A`), accompanied by tech stack chips and a subtle arrow affordance that shifts on card hover.

### Chips & Status Tags
- **Technology Chips**: `#F4F4F5` background, `#18181B` text, `label-sm`, pill-shaped, `space-xs` vertical and `space-sm` horizontal padding.
- **Availability Pill**: Bordered chip with a pulsing `#16A34A` indicator dot alongside `label-sm` copy reading "Available for work".

### Input Fields
- **Appearance**: Flat `#FFFFFF` surface with `1px` solid `#E4E4E7` border, `0.5rem` radius, `0.625rem 0.875rem` padding.
- **Focus State**: Hairline transition to `#18181B` border with a crisp `2px` focus ring offset.

### Article & Writing Rows
- **Layout**: Clean horizontal rule (`1px` `#E4E4E7`) separated list items.
- **Typography**: Publication date in monospace or `label-sm` (`#71717A`), post title in `body-lg` (`#18181B`), sliding external link indicator on hover.