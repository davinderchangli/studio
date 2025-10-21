import { notFound } from 'next/navigation';
import { books } from '@/lib/data';
import type { Book } from '@/lib/types';
import ClientPage from './ClientPage';

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export const dynamicParams = false;

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const book: Book | undefined = books.find((b) => b.id === params.id);
  if (!book) {
    notFound();
  }

  return <ClientPage book={book} />;
}
