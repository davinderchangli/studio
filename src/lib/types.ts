export type BookSize = 'Paperback' | 'Hardcover' | 'E-book';

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  price: number;
  originalPrice?: number;
  categoryIds: string[];
  imageUrl: string;
  imageHint: string;
  sizes: BookSize[];
}

export interface Category {
  id: string;
  name: string;
}

export interface CartItem {
  id: string;
  book: Book;
  quantity: number;
  size: BookSize;
}
