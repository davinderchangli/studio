import Link from 'next/link';
import type { Category } from '@/lib/types';
import { Button } from '@/components/ui/button';

interface CategoryNavProps {
  categories: Category[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <div className="overflow-hidden border-b bg-card py-2">
      <div className="animate-marquee flex w-max space-x-4 whitespace-nowrap">
        {categories.concat(categories).map((category, index) => (
          <Button key={`${category.id}-${index}`} variant="ghost" asChild className="font-semibold">
            <Link href={`/category/${category.id}`}>
              {category.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}
