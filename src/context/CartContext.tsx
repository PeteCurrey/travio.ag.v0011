"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '@/data/products/types';

interface CartItem {
  product: Product;
  quantity: number;
  planIndex?: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number, planIndex?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('travio_cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Failed to parse cart', e);
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('travio_cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number, planIndex?: number) => {
    setCart(prev => {
      const existingItem = prev.find(item => item.product.id === product.id && item.planIndex === planIndex);
      if (existingItem) {
        return prev.map(item => 
          (item.product.id === product.id && item.planIndex === planIndex)
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity, planIndex }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  
  const totalPrice = cart.reduce((acc, item) => {
    let price = item.product.price;
    // Plan prices are strings like "£4.99" or "Free"
    // For simplicity, we just add the product price for now
    return acc + (price * item.quantity);
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
