'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define the cart item type
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  discount?: number;
}

// Define the cart context type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize cart items from localStorage if available
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    }
  }, []);

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]);

  // Add an item to the cart
  const addToCart = (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    setCartItems(prevItems => {
      // Check if the item is already in the cart
      const existingItemIndex = prevItems.findIndex(cartItem => cartItem.id === item.id);
      
      if (existingItemIndex >= 0) {
        // If the item exists, update its quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevItems, { ...item, quantity }];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update the quantity of an item in the cart
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total price of items in the cart
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.discount 
        ? item.price * (1 - item.discount / 100) 
        : item.price;
      return total + (itemPrice * item.quantity);
    }, 0);
  };

  // Get the total number of items in the cart
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  // Create the context value
  const contextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartCount
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};