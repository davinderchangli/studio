import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:px-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-3xl">About Us</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Welcome to Kitaba Di Dunia, your number one source for all things Urdu literature. We're dedicated to giving you the very best of books, with a focus on quality, customer service, and uniqueness.</p>
            <p>Founded in {new Date().getFullYear()} by literature enthusiasts, Kitaba Di Dunia has come a long way from its beginnings. When we first started out, our passion for sharing the richness of Urdu writing drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world, and are thrilled to be a part of the fair-trade wing of the publishing industry.</p>
            <p>We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
