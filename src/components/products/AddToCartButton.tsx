'use client';

import { Product } from '@/lib/types';
import { useCartStore } from '@/lib/store';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton = ({ product }: AddToCartButtonProps) => {
  const { addItem } = useCartStore();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  
  const handleAddToCart = () => {
    // Add the product to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    
    // Show success animation
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          className="p-2 border border-gray-300 rounded-l-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          aria-label="Decrease quantity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        
        <div className="w-16 px-4 py-2 text-center border-t border-b border-gray-300 dark:border-gray-600">
          {quantity}
        </div>
        
        <button
          onClick={() => setQuantity(quantity + 1)}
          className="p-2 border border-gray-300 rounded-r-md hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
          aria-label="Increase quantity"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
      
      <motion.button
        onClick={handleAddToCart}
        className={`w-full py-3 px-6 rounded-md font-medium text-white transition-colors ${
          isAdded ? 'bg-green-600' : 'bg-primary hover:bg-primary/90'
        }`}
        whileTap={{ scale: 0.95 }}
        disabled={isAdded}
      >
        {isAdded ? (
          <span className="flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Added to Cart
          </span>
        ) : (
          'Add to Cart'
        )}
      </motion.button>
    </div>
  );
};

export default AddToCartButton;