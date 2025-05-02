<<<<<<< HEAD
# Mellow Shop - E-Commerce Frontend

A fully functional e-commerce frontend built with Next.js 14, React, TypeScript, and Tailwind CSS, inspired by the Mellow theme.

## Features

- **Home Page**: Responsive, mobile-first design with hero section, featured products, and more
- **Product Listing**: Fetches products from Fake Store API with loading skeletons and error handling
- **Product Details**: Detailed product view with image, description, and add to cart functionality
- **Cart System**: Mini cart dropdown and full cart page with quantity adjustment
- **Checkout Flow**: Simple checkout process with order summary
- **State Management**: Using Zustand for cart state with localStorage persistence
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## Tech Stack

- **Next.js 14** with App Router
- **React 18**
- **TypeScript**
- **Tailwind CSS** for styling
- **Zustand** for state management
- **Framer Motion** for animations

## Getting Started

### Prerequisites

- Node.js 18.17 or later

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ecommerce-frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or use the provided scripts
   ./run.bat    # Windows
   ./run.sh     # Linux/Mac (may need to make executable with chmod +x run.sh)
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Image Configuration

The project uses Next.js Image component with remote images from:
- Fake Store API (product images)
- Unsplash (hero and background images)

These domains are configured in `next.config.js` using `remotePatterns`. If you need to add more image sources, update the configuration accordingly.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── about/            # About page
│   ├── cart/             # Cart page
│   ├── checkout/         # Checkout page
│   ├── products/         # Products listing and detail pages
│   ├── error.tsx         # Error handling component
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   ├── loading.tsx       # Loading state
│   ├── not-found.tsx     # 404 page
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── cart/             # Cart-related components
│   ├── layout/           # Layout components (Header, Footer)
│   └── products/         # Product-related components
└── lib/                  # Utility functions, types, and store
    ├── api.ts            # API functions
    ├── store.ts          # Zustand store
    └── types.ts          # TypeScript interfaces
```

## API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.

## State Management

Cart state is managed using Zustand and persisted in localStorage for a seamless user experience across page refreshes.

## Deployment

This application can be deployed on Vercel, Netlify, or any other platform that supports Next.js applications.

```bash
npm run build
npm start
```

## License

This project is licensed under the MIT License.
md
# Mellowshop-Jayasri

