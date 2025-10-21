import type { Book, Category } from './types';
import { placeholderImages } from './placeholder-images.json';

export const categories: Category[] = [
  { id: '1', name: 'Poetry' },
  { id: '2', name: 'Novels' },
  { id: '3', name: 'Short Stories' },
  { id: '4', name: 'History' },
  { id: '5', name: 'Criticism' },
  { id: '6', name: 'Children' },
  { id: '7', name: 'Biographies' },
  { id: '8', name: 'Classic Literature' },
];

const getImage = (id: string) => {
    const imageData = placeholderImages.find(img => img.id === id);
    if (!imageData) {
        // Fallback to a generic image if not found
        return { imageUrl: 'https://picsum.photos/seed/fallback/400/600', imageHint: 'book cover' };
    }
    return { imageUrl: imageData.imageUrl, imageHint: imageData.imageHint };
}

export const books: Book[] = [
  {
    id: '1',
    title: 'Diwan-e-Ghalib',
    author: 'Mirza Ghalib',
    description: 'A timeless collection of Urdu poetry by the legendary Mirza Ghalib. This volume contains his most famous ghazals and philosophical musings.',
    price: 1199,
    originalPrice: 1499,
    categoryIds: ['1', '8'],
    ...getImage('book-1'),
    sizes: ['Paperback', 'Hardcover'],
  },
  {
    id: '2',
    title: 'Aangan',
    author: 'Khadija Mastoor',
    description: 'A historical novel set during the partition of India, Aangan provides a poignant look at the lives of women in a changing world.',
    price: 1399,
    categoryIds: ['2', '4'],
    ...getImage('book-2'),
    sizes: ['Paperback', 'Hardcover'],
  },
  {
    id: '3',
    title: 'Toba Tek Singh',
    author: 'Saadat Hasan Manto',
    description: 'A powerful collection of short stories depicting the human tragedy of the Partition. Manto\'s work is known for its raw honesty and deep empathy.',
    price: 999,
    originalPrice: 1299,
    categoryIds: ['3', '8'],
    ...getImage('book-3'),
    sizes: ['Paperback'],
  },
  {
    id: '4',
    title: 'The Great Mughals',
    author: 'Abraham Eraly',
    description: 'A comprehensive history of the Mughal Empire, from Babur to Aurangzeb. A must-read for history enthusiasts.',
    price: 1999,
    categoryIds: ['4', '7'],
    ...getImage('book-4'),
    sizes: ['Hardcover'],
  },
  {
    id: '5',
    title: 'Urdu Adab ki Tanqeedi Tareekh',
    author: 'Syed Ehtisham Husain',
    description: 'A critical history of Urdu literature, analyzing its major movements and figures. An essential academic text.',
    price: 1750,
    categoryIds: ['5'],
    ...getImage('book-5'),
    sizes: ['Paperback', 'Hardcover'],
  },
  {
    id: '6',
    title: 'Tot Batot',
    author: 'Sufi Tabassum',
    description: 'A beloved collection of children\'s poems in Urdu, featuring the charming character Tot Batot. Fun and educational for young readers.',
    price: 799,
    categoryIds: ['6', '1'],
    ...getImage('book-6'),
    sizes: ['Paperback'],
  },
  {
    id: '7',
    title: 'Mir Taqi Mir: A Selection',
    author: 'Mir Taqi Mir',
    description: 'Selected ghazals from one of the pioneers of the Urdu language. Experience the pain and beauty of Mir\'s poetry.',
    price: 1150,
    originalPrice: 1450,
    categoryIds: ['1', '8'],
    ...getImage('book-7'),
    sizes: ['Paperback', 'Hardcover'],
  },
  {
    id: '8',
    title: 'Umrao Jaan Ada',
    author: 'Mirza Hadi Ruswa',
    description: 'Considered the first Urdu novel, this is the fictional memoir of a courtesan and poet in 19th-century Lucknow.',
    price: 1299,
    categoryIds: ['2', '8'],
    ...getImage('book-8'),
    sizes: ['Paperback', 'Hardcover'],
  },
  {
    id: '9',
    title: 'Basti',
    author: 'Intizar Hussain',
    description: 'A modern classic, Basti intertwines personal memory and historical events, reflecting on nostalgia and the loss of a composite culture.',
    price: 1499,
    categoryIds: ['2', '3'],
    ...getImage('book-9'),
    sizes: ['Paperback'],
  },
  {
    id: '10',
    title: 'Kulliyat-e-Iqbal',
    author: 'Allama Iqbal',
    description: 'The complete poetic works of Allama Iqbal, a philosopher, poet, and politician whose work inspired a generation.',
    price: 2200,
    originalPrice: 2800,
    categoryIds: ['1', '8'],
    ...getImage('book-10'),
    sizes: ['Hardcover'],
  },
  {
    id: '11',
    title: 'Raja Gidh',
    author: 'Bano Qudsia',
    description: 'A philosophical novel exploring themes of love, madness, and societal taboos through the metaphor of a vulture.',
    price: 1599,
    categoryIds: ['2'],
    ...getImage('book-11'),
    sizes: ['Paperback', 'Hardcover'],
  },
  {
    id: '12',
    title: 'Zavia',
    author: 'Ashfaq Ahmed',
    description: 'A collection of dervish tales and spiritual wisdom from the popular PTV talk show. Ashfaq Ahmed\'s storytelling offers profound life lessons.',
    price: 1699,
    categoryIds: ['3', '7'],
    ...getImage('book-12'),
    sizes: ['Paperback', 'Hardcover'],
  },
];
