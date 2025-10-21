'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { books, categories } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { BookCard } from '@/components/book/book-card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CategoryNav } from '@/components/layout/category-nav';
import { placeholderImages } from '@/lib/placeholder-images.json';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useState, useEffect } from 'react';
import type { CarouselApi } from '@/components/ui/carousel';

const heroImage = placeholderImages.find(p => p.id === 'hero');

export default function Home() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        <section className="relative w-full bg-primary/10 py-20 md:py-32">
          <div className="container mx-auto grid grid-cols-1 items-center gap-8 px-4 md:grid-cols-2 md:px-6">
            <div className="space-y-4">
              <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary md:text-5xl lg:text-6xl">
                Welcome to Kitaba Di Dunia
              </h1>
              <p className="max-w-[600px] text-lg text-foreground/80 md:text-xl">
                Discover the rich world of Urdu literature. From timeless classics to contemporary masterpieces, find your next favorite read with us.
              </p>
              <Button asChild size="lg">
                <Link href="#featured-books">
                  Explore Books <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="relative h-64 w-full md:h-96">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  data-ai-hint={heroImage.imageHint}
                  fill
                  className="rounded-lg object-cover shadow-2xl"
                />
              )}
            </div>
          </div>
        </section>

        <CategoryNav categories={categories} />

        <section id="featured-books" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="font-headline text-3xl font-bold tracking-tighter">
                Featured Books
              </h2>
              <Button variant="link" asChild>
                <Link href="/books">View All</Link>
              </Button>
            </div>
            <Carousel
              setApi={setApi}
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {books.map((book, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/4 lg:basis-1/7"
                  >
                    <div className="p-1">
                      <BookCard book={book} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="py-2 text-center text-sm text-muted-foreground">
              {current} of {count}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
