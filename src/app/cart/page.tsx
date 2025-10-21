'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CartItem } from '@/components/cart/cart-item';
import { ShoppingCart } from 'lucide-react';

export default function CartPage() {
  const { cartItems, cartTotal, itemCount } = useCart();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-8 font-headline text-3xl font-bold">Your Shopping Cart</h1>
          
          {itemCount === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-12 text-center">
                <ShoppingCart className="mb-4 h-16 w-16 text-muted-foreground" />
                <h2 className="font-headline text-2xl font-semibold">Your cart is empty</h2>
                <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
                <Button asChild className="mt-6">
                  <Link href="/">Start Shopping</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="divide-y p-0">
                    {cartItems.map((item) => (
                      <div key={item.id} className="px-6">
                        <CartItem item={item} />
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div className="lg:col-span-1">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-headline">Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal ({itemCount} items)</span>
                      <span>₹{cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold">
                      <span className="font-headline text-lg">Total</span>
                      <span className="font-headline text-lg">₹{cartTotal.toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild size="lg" className="w-full">
                      <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
