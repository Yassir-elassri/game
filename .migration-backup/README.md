# Gamesooty

**Gamesooty** is a premium, modern free online gaming platform. Play 268+ browser games instantly — no downloads, no sign-up.

## Features

- Dark futuristic UI with glassmorphism and neon glow effects
- Framer Motion animations throughout
- Homepage sections: Trending, New Games, Most Played, Editor's Picks, Continue Playing
- Full game pages with iframe player, related games, and metadata
- Category browsing across 13 genres
- Client-side search across all games
- Fully responsive design (mobile, tablet, desktop)
- Static export ready for any hosting provider

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Install & Run

```bash
npm install
npm run setup    # links wp-content thumbnails into public/
npm run dev      # start dev server at http://localhost:3000
```

### Build for Production

```bash
npm run build    # outputs static site to out/
```

Serve the `out/` folder with any static host (Netlify, Vercel, GitHub Pages, etc.).

## Project Structure

```
app/                  # Next.js App Router pages
components/
  effects/            # GradientBackground, MotionWrappers
  games/              # GameCard, GameGrid, Hero, GamePlayer
  layout/             # Header, Footer
data/games.json       # Game catalog (268 games)
public/brand/         # Logo, favicon, OG image
public/wp-content/    # Game thumbnails (linked via setup script)
lib/                  # Data utilities and context
```

## Brand Assets

| File | Purpose |
|------|---------|
| `public/brand/logo.png` | Site logo |
| `public/brand/favicon.png` | Browser favicon |
| `public/brand/og-image.png` | Social share image |

## Tech Stack

- **Next.js 15** (App Router, static export)
- **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React** icons
- **Outfit** font (Google Fonts)

## License

Game content belongs to respective developers. Gamesooty branding and code are proprietary.
