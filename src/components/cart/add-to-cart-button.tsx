'use client';

import { useCart } from '@/context/cart-context';
import type { Book, BookSize } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import type { ComponentProps } from 'react';

interface AddToCartButtonProps extends ComponentProps<typeof Button> {
  book: Book;
  selectedSize: BookSize;
}

export function AddToCartButton({ book, selectedSize, ...props }: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(book, selectedSize);
  };

  return (
    <Button onClick={handleAddToCart} {...props}>
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}
