# slidev-theme-fhnw

A [Slidev](https://github.com/slidevjs/slidev) theme based on the official FHNW (University of Applied Sciences and Arts Northwestern Switzerland) Bootstrap V5 styleguide and LaTeX Beamer template.

## Features

- Yellow header bar with FHNW and swissuniversities logos on the cover slide
- Inter sans-serif headings (weight 500) with solid separators
- Triangle bullet points
- Yellow footer bar with title, author, and page number
- FHNW color palette matching the official Bootstrap V5 styleguide
- Light color scheme optimized for projection

## Install

This theme is published on GitHub Packages. Add the registry to your project's `.npmrc`:

```
@peschmae:registry=https://npm.pkg.github.com
```

Then add the following frontmatter to your `slides.md`. Slidev will prompt you to install the theme automatically:

```yaml
---
theme: '@peschmae/slidev-theme-fhnw'
---
```

Or install manually:

```bash
npm install @peschmae/slidev-theme-fhnw
```

## Usage

### Cover Slide

The first slide uses the `cover` layout. Write your title and metadata directly in the slide content:

```md
---
theme: '@peschmae/slidev-theme-fhnw'
layout: cover
title: My Presentation Title
author: Your Name
---

# My Presentation Title

Your Name &nbsp; <small>&lt;your.email@fhnw.ch&gt;</small>

University of Applied Sciences and Arts, Northwestern Switzerland

July 2026
```

### Regular Slides

Regular slides get the title separator and yellow footer automatically:

```md
---

# Slide Title

- First point
- Second point with **bold emphasis**
  - Nested item
```

### Section Dividers

Use the `section` layout for section breaks (like `\AtBeginSection` in LaTeX):

```md
---
layout: section
---

# Section Name
```

### End Slide

```md
---
layout: end
---

# Thank you for your attention

Questions and Feedback
```

### Two Columns

Use the built-in `two-cols` layout:

```md
---
layout: two-cols
---

# Title

Content on the left

::right::

Content on the right
```

### Two Columns with Header

The built-in `two-cols-header` puts the title above both columns, and its `::bottom::` slot holds a takeaway spanning both:

```md
---
layout: two-cols-header
layoutClass: cols-3-2
---

# Title

::left::

Left column

::right::

Right column

::bottom::

One sentence below both columns
```

`layoutClass` sets the column ratio for `two-cols` and `two-cols-header`: `cols-3-2`, `cols-2-3`, `cols-2-1` or `cols-1-2`. Without it, both columns are equal. The theme adds a `2rem` gap between the columns.

### Compact Slides

For dense tables, long code or many bullets, add `class: compact` to the slide's frontmatter. It reduces the text size, line height, table padding and code size:

```md
---
class: compact
---

# A long table
```

UnoCSS's `text-sm` has no effect on a whole slide, because Slidev's base styles set the slide font size with a rule that takes precedence.

## Components

### Card

A card for short items in a grid. Place cards in a UnoCSS grid:

```md
<div class="grid grid-cols-3 gap-4">
<Card label="Lesson 1" title="OpenTelemetry concepts">

Why instrument, the three signals

</Card>
<Card label="Push" icon="i-game-icons:push" title="Recommended" type="highlight">

Markdown works inside, including lists

</Card>
</div>
```

| Prop | Values | Description |
| --- | --- | --- |
| `title` | text | Card heading |
| `label` | text | Small uppercase label above the title |
| `icon` | UnoCSS icon class | Icon shown before the label, e.g. `i-game-icons:push` |
| `type` | `default`, `highlight`, `warning`, `dark` | Grey, yellow or red top bar, or a black card |

The theme ships the [game-icons](https://icon-sets.iconify.design/game-icons/) set. For icons from another set, install its `@iconify-json/<set>` package in your deck.

### Callout

A box for one remark that should stand out:

```md
<Callout type="warning" title="Pitfall">

Bind to `0.0.0.0` in a container.

</Callout>
```

| Prop | Values | Description |
| --- | --- | --- |
| `type` | `note`, `mantra`, `warning`, `highlight` | Grey with a dark, yellow or red bar, or a yellow box |
| `title` | text | Optional bold heading |

In both components, leave an empty line after the opening tag and before the closing tag so the Markdown inside is rendered.

## Layouts

This theme provides:

| Layout | Description |
| --- | --- |
| `cover` | Title page with yellow header, FHNW + swissuniversities logos, and metadata |

All other built-in Slidev layouts (`default`, `center`, `section`, `end`, `two-cols`, `image-right`, etc.) are styled via CSS to match the FHNW look.

## Color Palette

Based on the official FHNW Bootstrap V5 styleguide:

| Color | Hex | Usage |
| --- | --- | --- |
| Yellow (secondary) | `#fde703` | Header, footer, accents |
| Black (primary) | `#000000` | Emphasis, headings |
| Body text | `#4c4c4c` | Default text color |
| Danger/Red | `#df305b` | Alerts, code highlights |
| Gray 100 | `#f7f7f5` | Table striping, code blocks |
| Gray 200 | `#f1f1ee` | Hover states |
| Gray 400 | `#deded9` | Borders, separators |
| Gray 600 | `#999999` | Subtle elements |
| Gray 700 | `#767573` | Secondary text |
| Gray dark | `#343a40` | Heading separators |
| White | `#ffffff` | Background |

## Fonts

Following the official FHNW Bootstrap V5 styleguide:

- **Headings:** Inter (weight 500)
- **Body:** Inter (weight 400)
- **Blockquotes:** Spectral (italic, weight 300)
- **Code:** System monospace stack (SFMono-Regular, Menlo, Monaco, Consolas)

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit `example.md` and styles to see changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG

## License

MIT
