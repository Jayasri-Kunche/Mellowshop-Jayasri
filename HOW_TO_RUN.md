# How to Run Mellow Shop E-Commerce Frontend

This document provides step-by-step instructions to run the Mellow Shop e-commerce frontend application.

## Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

## Running the Application

### Option 1: Using the Batch Files (Windows)

1. **Development Mode**
   - Double-click the `run.bat` file in the project root directory
   - This will start the development server on http://localhost:3000

2. **Production Mode**
   - Double-click the `start-prod.bat` file in the project root directory
   - This will build the application and start the production server on http://localhost:3000

### Option 2: Using Command Line

1. **Navigate to the Project Directory**
   ```bash
   cd path/to/ecommerce-frontend
   ```

2. **Install Dependencies** (if not already installed)
   ```bash
   npm install
   ```

3. **Development Mode**
   ```bash
   npm run dev
   ```
   This will start the development server on http://localhost:3000

4. **Production Mode**
   ```bash
   npm run build
   npm start
   ```
   This will build the application and start the production server on http://localhost:3000

## Accessing the Application

Once the server is running, open your web browser and navigate to:
- http://localhost:3000

## Features to Explore

1. **Home Page**
   - Browse featured products
   - Navigate through different sections

2. **Products Page**
   - View all products
   - Filter by category using the URL parameter `?category=electronics` (or other categories)

3. **Product Details**
   - Click on any product to view its details
   - Adjust quantity and add to cart

4. **Cart Functionality**
   - Add products to cart
   - View mini cart by clicking the cart icon in the header
   - Visit the full cart page to adjust quantities or remove items

5. **Checkout Flow**
   - Proceed to checkout from the cart page
   - Fill in shipping and payment information (demo only)

## Troubleshooting

If you encounter any issues:

1. **Port Already in Use**
   - If port 3000 is already in use, you can specify a different port:
   ```bash
   npm run dev -- -p 3001
   ```

2. **Dependencies Issues**
   - Try reinstalling the dependencies:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. **Image Loading Issues**
   - If you see errors about unconfigured hosts for images, check the `next.config.js` file
   - The application is configured to use images from:
     - fakestoreapi.com (for product images)
     - images.unsplash.com (for hero and background images)
   - If you need to use images from other domains, add them to the `remotePatterns` in `next.config.js`

4. **Build Errors**
   - Check for any TypeScript errors in your code
   - Make sure all required environment variables are set

## Additional Information

- The application uses the Fake Store API (https://fakestoreapi.com/) to fetch product data
- Cart state is persisted in localStorage, so your cart items will remain even if you refresh the page
- The application is fully responsive and works on mobile devices