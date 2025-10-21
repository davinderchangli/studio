import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { Button } from '../ui/button';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
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
      <CardContent className="flex flex-grow flex-col p-4">
        <h3 className="flex-grow font-headline text-base font-bold leading-tight">
          <Link href={`/books/${book.id}`} className="hover:underline">
            {book.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
        <div className="mt-2 flex items-baseline gap-2">
          <p className="font-headline text-lg font-bold text-primary">
            ₹{book.price.toFixed(2)}
          </p>
          {book.originalPrice && (
            <p className="text-sm text-muted-foreground line-through">
              ₹{book.originalPrice.toFixed(2)}
            </p>
          )}
        </div>
        <AddToCartButton book={book} selectedSize={book.sizes[0]} className="mt-4 w-full" />
      </CardContent>
    </Card>
  );
}
