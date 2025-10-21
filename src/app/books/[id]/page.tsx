'use client';

import { useState } from 'react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { books } from '@/lib/data';
import type { BookSize } from '@/lib/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { AddToCartButton } from '@/components/cart/add-to-cart-button';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Badge } from '@/components/ui/badge';
import { QuantityInput } from '@/components/cart/quantity-input';

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book = books.find(b => b.id === params.id);
  
  if (!book) {
    notFound();
  }

  const [selectedSize, setSelectedSize] = useState<BookSize>(book.sizes[0]);
  const [quantity, setQuantity] = useState(1);

  const discountPercentage = book.originalPrice
    ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)
    : 0;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow bg-card">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-16">
            <div className="flex justify-center">
              <div className="relative aspect-[2/3] w-full max-w-sm">
                <Image
                  src={book.imageUrl}
                  alt={book.title}
                  data-ai-hint={book.imageHint}
                  fill
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="font-headline text-3xl font-bold md:text-4xl">{book.title}</h1>
                <p className="mt-2 text-xl text-muted-foreground">by {book.author}</p>
              </div>
              <p className="text-lg leading-relaxed">{book.description}</p>
              
              {book.sizes.length > 1 && (
                <div className="space-y-4">
                  <h3 className="font-headline text-lg font-semibold">Select Size</h3>
                  <RadioGroup value={selectedSize} onValueChange={(value: BookSize) => setSelectedSize(value)} className="flex gap-4">
                    {book.sizes.map(size => (
                      <div key={size} className="flex items-center space-x-2">
                        <RadioGroupItem value={size} id={size} />
                        <Label htmlFor={size} className="cursor-pointer text-base">{size}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              )}

              <div className="flex items-center gap-4">
                <p className="font-headline text-4xl font-bold text-primary">₹{book.price.toFixed(2)}</p>
                 {book.originalPrice && (
                    <p className="text-xl text-muted-foreground line-through">
                    ₹{book.originalPrice.toFixed(2)}
                    </p>
                )}
                {discountPercentage > 0 && (
                  <Badge variant="destructive">
                    SAVE {discountPercentage}%
                  </Badge>
                )}
              </div>

              <div className="space-y-2">
                <Label>Quantity</Label>
                <QuantityInput value={quantity} onChange={setQuantity} />
              </div>
              
              <AddToCartButton book={book} selectedSize={selectedSize} quantity={quantity} size="lg" className="w-full md:w-auto" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
