# SonicZone - Premium Audio Ecommerce

A state-of-the-art ecommerce application for premium audio gear, built with Next.js, Sanity.io, and Stripe.

## Features
- **Dynamic Frontend**: Modern, responsive UI built with React and Next.js.
- **Premium Design System**: Custom vanilla CSS implementation featuring glassmorphism, fluid animations, and a rich token-based design system.
- **Content Management**: Seamless content editing and product management powered by Sanity.io.
- **Global State Management**: React Context API used for managing cart state and immutable cart operations.
- **Payments**: Fully integrated secure checkout process with Stripe.
- **Interactive UI**: Image lightbox, responsive grid layouts, and smooth marquee product displays.

## Tech Stack
- **Framework**: Next.js
- **CMS**: Sanity.io
- **Payments**: Stripe
- **Styling**: Vanilla CSS (CSS Modules & Custom Properties)

## Getting Started

First, install the dependencies:
```bash
npm install
```

Set up your `.env` variables for Sanity and Stripe:
```
NEXT_PUBLIC_SANITY_TOKEN=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
