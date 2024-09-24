'use client';
import { useCallback } from 'react';

// Interfaces
import { IProduct } from '@/interface';

// Components
import { CardDetail } from '@/ui/components';

interface ProductListProps {
  data: IProduct[];
}

const ProductList = ({ data }: ProductListProps) => {
  const handleClick = useCallback((id: string) => {
    console.log(`Clicked on ${id}`);
  }, []);

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 w-5/6 gap-6 mx-auto">
      {data.map((item) => (
        <CardDetail
          key={item.id}
          id={item.id}
          image={item.image}
          name={item.name}
          users={item.users}
          view={item.view}
          nameButton="Review"
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default ProductList;
