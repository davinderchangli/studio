
"use client";

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';
import type { Book } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface WishlistContextType {
  wishlistItems: Book[];
  addToWishlist: (book: Book) => void;
  removeFromWishlist: (bookId: string) => void;
  isInWishlist: (bookId: string) => boolean;
  wishlistItemCount: number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<Book[]>([]);
  const { toast } = useToast();

  const addToWishlist = (book: Book) => {
    setWishlistItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      if (existingItem) {
        // To prevent adding duplicates, you can either do nothing or remove it (toggle behavior)
        toast({
          variant: "destructive",
          title: "Already in Wishlist",
          description: `${book.title} is already in your wishlist.`,
        });
        return prevItems;
      }
      toast({
        title: "Added to Wishlist",
        description: `${book.title} has been added to your wishlist.`,
      });
      return [...prevItems, book];
    });
  };

  const removeFromWishlist = (bookId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== bookId));
    toast({
      title: "Removed from Wishlist",
      description: `The item has been removed from your wishlist.`,
    });
  };

  const isInWishlist = (bookId: string) => {
    return wishlistItems.some(item => item.id === bookId);
  };

  const wishlistItemCount = useMemo(() => {
    return wishlistItems.length;
  }, [wishlistItems]);

  const value = {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    wishlistItemCount,
  };

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
