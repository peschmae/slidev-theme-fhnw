# slidev-theme-fhnw

A [Slidev](https://github.com/slidevjs/slidev) theme based on the official FHNW (University of Applied Sciences and Arts Northwestern Switzerland) LaTeX Beamer template.

## Features

- Yellow header bar with FHNW and swissuniversities logos on the cover slide
- Georgia serif headings with dashed separators
- Triangle bullet points
- Yellow footer bar with title, author, and page number
- FHNW color palette (yellow, charcoal, red, teal)
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

Regular slides get the dashed title separator and yellow footer automatically:

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

## Layouts

This theme provides:

| Layout | Description |
| --- | --- |
| `cover` | Title page with yellow header, FHNW + swissuniversities logos, and metadata |

All other built-in Slidev layouts (`default`, `center`, `section`, `end`, `two-cols`, `image-right`, etc.) are styled via CSS to match the FHNW look.

## Color Palette

| Color | Hex | Usage |
| --- | --- | --- |
| Yellow | `#FDE70E` | Header, footer, blocks |
| Charcoal | `#2D373C` | Separators, secondary text |
| Red | `#D20537` | Highlights, alerts |
| Teal | `#006E6E` | Links |
| Gray | `#8C9196` | Subtle elements |
| Black | `#000000` | Body text |
| White | `#FFFFFF` | Background |

## Fonts

- **Headings:** Arial (sans-serif)
- **Body:** Arial (sans-serif)
- **Code:** Inconsolata (monospace)

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit `example.md` and styles to see changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG

## License

MIT
