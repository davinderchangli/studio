'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import type { CartItem as CartItemType } from '@/lib/types';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.id, newQuantity);
    }
  };

  const increment = () => updateQuantity(item.id, item.quantity + 1);
  const decrement = () => updateQuantity(item.id, item.quantity - 1);

  return (
    <div className="flex items-start gap-4 py-4">
      <div className="relative h-24 w-16 flex-shrink-0">
        <Image
          src={item.book.imageUrl}
          alt={item.book.title}
          data-ai-hint={item.book.imageHint}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <div className="flex-grow">
        <Link href={`/books/${item.book.id}`} className="hover:underline">
          <h3 className="font-headline font-semibold">{item.book.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{item.book.author}</p>
        <p className="text-sm text-muted-foreground">Size: {item.size}</p>
        <div className="mt-2 flex items-center gap-2">
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={decrement}>-</Button>
          <Input 
            type="number"
            value={item.quantity}
            onChange={handleQuantityChange}
            className="h-8 w-14 text-center"
            min="1"
          />
          <Button variant="outline" size="icon" className="h-8 w-8" onClick={increment}>+</Button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-headline font-semibold">${(item.book.price * item.quantity).toFixed(2)}</p>
        <Button variant="ghost" size="icon" className="mt-2 h-8 w-8" onClick={() => removeFromCart(item.id)}>
          <X className="h-4 w-4" />
          <span className="sr-only">Remove item</span>
        </Button>
      </div>
    </div>
  );
}
