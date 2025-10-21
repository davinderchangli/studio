'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '@/context/cart-context';
import type { Book, BookSize } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Zap } from 'lucide-react';
import type { ComponentProps } from 'react';

interface BuyNowButtonProps extends ComponentProps<typeof Button> {
  book: Book;
  selectedSize: BookSize;
  quantity?: number;
}

export function BuyNowButton({ book, selectedSize, quantity = 1, ...props }: BuyNowButtonProps) {
  const { addToCart } = useCart();
  const router = useRouter();

  const handleBuyNow = () => {
    addToCart(book, selectedSize, quantity, false); // Don't show toast
    router.push('/checkout');
  };

  return (
    <Button onClick={handleBuyNow} {...props}>
      <Zap className="mr-2 h-5 w-5" />
      Buy Now
    </Button>
  );
}
