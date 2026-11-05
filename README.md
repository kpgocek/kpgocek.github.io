# KPG @ GitHub Pages

Personal site of Krzysztof P. Gocek, served at <https://kpgocek.github.io>.

A single static page: plain HTML and CSS with one image (the portrait) and no dependencies or build steps. The only JavaScript is the theme toggle.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page |
| `styles.css` | All styling, shared by both pages |
| `404.html` | Shown by GitHub Pages for any missing URL |
| `theme.js` | Dark/light toggle; dark unless the visitor picks light |
| `fonts/` | Self-hosted Newsreader (headings, display optical size) and Atkinson Hyperlegible Next (everything else), Latin subsets, and their licences |
| `img/` | The portrait: `portrait.jpg` is the unpublished source, the `.webp` files are what the page loads |
| `_config.yml` | Keeps the source portrait and the project notes (`README.md`, `PRODUCT.md`, `DESIGN.md`) from being published |

## Deployment

GitHub Pages publishes the site from `main`, so pushing is all it takes.
