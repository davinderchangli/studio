"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import type { Book, BookSize, CartItem } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (book: Book, size: BookSize, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (book: Book, size: BookSize, quantity: number = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.book.id === book.id && item.size === size);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      const newItemId = `${book.id}-${size}`;
      return [...prevItems, { id: newItemId, book, quantity, size }];
    });
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
     toast({
      title: "Item removed",
      description: `The item has been removed from your cart.`,
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };
  
  const cartTotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0)
  }, [cartItems]);

  const itemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    itemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
