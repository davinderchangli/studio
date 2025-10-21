import Link from 'next/link';
import { BookOpen, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-card">
      <div className="container mx-auto px-4 py-8 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold">Kitaba Di Dunia</span>
            </Link>
            <p className="text-sm text-muted-foreground">Your home for Urdu literature.</p>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Quick Links</h4>
            <ul className="space-y-1">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Home</Link></li>
              <li><Link href="/books" className="text-sm text-muted-foreground hover:text-primary">All Books</Link></li>
              <li><Link href="/cart" className="text-sm text-muted-foreground hover:text-primary">Cart</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Information</h4>
            <ul className="space-y-1">
              <li><Link href="/about-us" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact-us" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary">Disclaimer</Link></li>
              <li><Link href="/admin/login" className="text-sm text-muted-foreground hover:text-primary">Admin Login</Link></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-headline font-semibold">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Kitaba Di Dunia. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
