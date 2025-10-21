import Link from 'next/link';
import type { Category } from '@/lib/types';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

interface CategoryNavProps {
  categories: Category[];
}

export function CategoryNav({ categories }: CategoryNavProps) {
  return (
    <div className="border-b bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-2 py-2">
            {categories.map(category => (
              <Button key={category.id} variant="ghost" asChild className="font-semibold">
                <Link href={`/category/${category.id}`}>
                  {category.name}
                </Link>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </div>
  );
}
