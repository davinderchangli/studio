"use client";

import Link from 'next/link';
import { BookOpen, Search, ShoppingCart, User, Heart } from 'lucide-react';
import { useCart } from '@/context/cart-context';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold">Kitaba Di Dunia</span>
        </Link>
        <div className="hidden flex-1 justify-center md:flex">
          <div className="relative w-full max-w-md">
            <Input
              type="search"
              placeholder="Search by title, author, or keyword..."
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <div className="relative">
            <Button variant="ghost" size="icon" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Shopping Cart</span>
              </Link>
            </Button>
            {itemCount > 0 && (
              <Badge
                variant="destructive"
                className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full p-0"
              >
                {itemCount}
              </Badge>
            )}
          </div>

          <Button variant="ghost" size="icon" asChild>
            <Link href="/wishlist">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link href="/signup">Create Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/login">Login</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
}
