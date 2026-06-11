# Kaapi

Kaapi is a high-end, specialty e-commerce coffee website designed with a premium, interactive aesthetic. Inspired by top-tier coffee roasters, it features a gothic-typography-led design, smooth scroll-triggered animations, parallax video backgrounds, an interactive 360-degree product viewer, and a robust Shopify cart integration.

## Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), React 18, and TypeScript.
- **Premium UI/UX**:
  - **Tailwind CSS** for modern, flexible, and responsive styling.
  - **Framer Motion** for scroll-triggered reveal animations, sophisticated hover effects, and smooth layout transitions.
  - Full-screen parallax video backgrounds and 50/50 split-screen sections.
  - Interactive 360-degree product image viewer for an immersive product detail experience.
- **E-Commerce Integration**:
  - Seamless integration with **Shopify**.
  - Uses direct **Shopify Cart Permalinks** to seamlessly handle cart checkout and bypass complex API permission restrictions.
  - "Quick Add" functionality allowing users to add items directly from product cards.
  - **Zustand** for efficient and reliable client-side cart state management.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (14.x)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **E-commerce Backend**: Shopify

## Getting Started

1. Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application running.

## Project Structure

- `/app`: Next.js App Router pages, routing, and main layout structure.
- `/components`: Reusable React components organized by functionality (e.g., UI elements, layout components).
- `/data`: Static data and content files.
- `/lib`: Utility functions, helper scripts, and external service integrations (e.g., Shopify API helpers).
- `/store`: Zustand state management stores (e.g., `useCartStore`).
- `/public`: Static assets including images, local videos, and the 360-degree product frames.
- `/styles`: Global stylesheet and Tailwind directives.
