'use client';

import { Product } from '@/lib/types';
import ProductCard from './ProductCard';
import ProductSkeleton from './ProductSkeleton';
import { motion } from 'framer-motion';

interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductGrid = ({ products, isLoading = false }: ProductGridProps) => {
  // Create an array of 8 items for skeleton loading
  const skeletonArray = Array.from({ length: 8 }, (_, i) => i);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div 
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {isLoading
        ? skeletonArray.map((i) => (
            <div key={i}>
              <ProductSkeleton />
            </div>
          ))
        : products.map((product) => (
            <motion.div key={product.id} variants={item}>
              <ProductCard product={product} />
            </motion.div>
          ))}
    </motion.div>
  );
};

export default ProductGrid;