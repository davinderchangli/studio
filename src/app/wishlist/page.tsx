'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Heart } from 'lucide-react';

export default function WishlistPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-8 font-headline text-3xl font-bold">Your Wishlist</h1>
          
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-12 text-center">
              <Heart className="mb-4 h-16 w-16 text-muted-foreground" />
              <h2 className="font-headline text-2xl font-semibold">Your wishlist is empty</h2>
              <p className="mt-2 text-muted-foreground">Looks like you haven't added any books to your wishlist yet.</p>
              <Button asChild className="mt-6">
                <Link href="/">Start Browsing</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
