import Image from 'next/image';
import Link from 'next/link';
import type { Book } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="group">
      <Card className="h-full overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
        <CardContent className="flex h-full flex-col p-4">
          <div className="relative mb-4 aspect-[2/3] w-full">
            <Image
              src={book.imageUrl}
              alt={book.title}
              data-ai-hint={book.imageHint}
              fill
              className="rounded-md object-cover"
            />
          </div>
          <div className="flex flex-grow flex-col">
            <h3 className="flex-grow font-headline text-base font-bold leading-tight">
              {book.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{book.author}</p>
            <p className="mt-2 font-headline text-lg font-bold text-primary">
              ${book.price.toFixed(2)}
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
