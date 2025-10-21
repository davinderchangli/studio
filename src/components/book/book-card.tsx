import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { AddToWishlistButton } from '@/components/wishlist/add-to-wishlist-button';
import { Heart } from 'lucide-react';
import { BuyNowButton } from '@/components/cart/buy-now-button';

interface BookCardProps {
  book: Book;
  showBuyNow?: boolean;
}

export function BookCard({ book, showBuyNow = false }: BookCardProps) {
  const discountPercentage = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
       <div className="relative">
        <Link href={`/books/${book.id}`} className="group block">
          <div className="relative aspect-[2/3] w-full">
            <Image
              src={book.imageUrl}
              alt={book.title}
              data-ai-hint={book.imageHint}
              fill
              className="rounded-t-md object-cover"
            />
          </div>
        </Link>
        <AddToWishlistButton 
          book={book} 
          variant="ghost" 
          size="icon" 
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm rounded-full text-red-500 hover:text-red-600 hover:bg-white"
        >
          <Heart className="h-5 w-5" />
        </AddToWishlistButton>
      </div>
      <CardContent className="flex flex-grow flex-col p-4">
        <h3 className="font-headline text-base font-bold leading-tight truncate">
          <Link href={`/books/${book.id}`} className="hover:underline">
            {book.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground truncate">{book.author}</p>
        
        <div className="mt-2 flex items-baseline gap-2">
           <p className="font-headline text-lg font-bold text-primary">
            ₹{book.price.toFixed(0)}
          </p>
          {book.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              ₹{book.originalPrice.toFixed(0)}
            </p>
          )}
          {discountPercentage > 0 && (
            <p className="text-sm font-semibold text-green-600">
              {discountPercentage}% off
            </p>
          )}
        </div>

        <div className="mt-auto pt-4">
          {showBuyNow ? (
            <BuyNowButton book={book} selectedSize={book.sizes[0]} className="w-full" />
          ) : (
            <AddToCartButton book={book} selectedSize={book.sizes[0]} className="w-full" />
          )}
        </div>
      </CardContent>
    </Card>
  );
}
