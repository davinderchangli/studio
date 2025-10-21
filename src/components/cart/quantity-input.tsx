'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
}

export function QuantityInput({ value, onChange, min = 1 }: QuantityInputProps) {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(Math.max(min, value - 1));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue)) {
      onChange(Math.max(min, newValue));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="outline" size="icon" className="h-8 w-8" onClick={decrement}>-</Button>
      <Input
        type="number"
        value={value}
        onChange={handleChange}
        className="h-8 w-14 text-center"
        min={min}
      />
      <Button variant="outline" size="icon" className="h-8 w-8" onClick={increment}>+</Button>
    </div>
  );
}
