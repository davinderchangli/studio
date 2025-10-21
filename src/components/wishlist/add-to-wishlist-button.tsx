
'use client';

import { useWishlist } from '@/context/wishlist-context';
import type { Book } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import type { ComponentProps } from 'react';

interface AddToWishlistButtonProps extends ComponentProps<typeof Button> {
  book: Book;
}

export function AddToWishlistButton({ book, children, ...props }: AddToWishlistButtonProps) {
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist();
  const isWishlisted = isInWishlist(book.id);

  const handleWishlistClick = () => {
    if (isWishlisted) {
      removeFromWishlist(book.id);
    } else {
      addToWishlist(book);
    }
  };

  return (
    <Button onClick={handleWishlistClick} {...props}>
      {children || (
        <>
          <Heart className={`mr-2 h-5 w-5 ${isWishlisted ? 'fill-current text-red-500' : ''}`} />
          {isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
        </>
      )}
    </Button>
  );
}
