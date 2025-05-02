import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { CartState, Product } from './types';

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      isOpen: false,
      
      addItem: (product: Product) => 
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id);
          
          if (existingItem) {
            return {
              items: state.items.map(item => 
                item.id === product.id 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              )
            };
          }
          
          return {
            items: [...state.items, { ...product, quantity: 1 }]
          };
        }),
      
      removeItem: (productId: number) => 
        set((state) => ({
          items: state.items.filter(item => item.id !== productId)
        })),
      
      updateQuantity: (productId: number, quantity: number) => 
        set((state) => ({
          items: state.items.map(item => 
            item.id === productId 
              ? { ...item, quantity: Math.max(1, quantity) } 
              : item
          )
        })),
      
      clearCart: () => set({ items: [] }),
      
      toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
      
      closeCart: () => set({ isOpen: false })
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => {
        // Check if window is defined (browser environment)
        if (typeof window !== 'undefined') {
          return localStorage;
        }
        return {
          getItem: () => null,
          setItem: () => {},
          removeItem: () => {},
        };
      }),
    }
  )
);

export const calculateOrderSummary = (items: CartState['items']) => {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? (subtotal > 100 ? 0 : 10) : 0;
  
  return {
    subtotal,
    shipping,
    total: subtotal + shipping
  };
};