import { getProducts, getProductsByCategory } from '@/lib/api';
import ProductGrid from '@/components/products/ProductGrid';
import { Suspense } from 'react';
import ProductSkeleton from '@/components/products/ProductSkeleton';

interface ProductsPageProps {
  searchParams: {
    category?: string;
  };
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { category } = searchParams;
  
  // Fetch products based on category filter
  const products = category 
    ? await getProductsByCategory(category)
    : await getProducts();
  
  return (
    <div className="py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">
            {category ? `${category.charAt(0).toUpperCase() + category.slice(1)}` : 'All Products'}
          </h1>
          <p className="text-muted">
            {category 
              ? `Browse our collection of ${category} products.`
              : 'Explore our wide range of high-quality products.'}
          </p>
        </div>
        
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        }>
          <ProductGrid products={products} />
        </Suspense>
      </div>
    </div>
  );
}