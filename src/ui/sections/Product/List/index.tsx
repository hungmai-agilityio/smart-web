// Interfaces
import { IProduct } from '@/interface';

// Components
import { CardDetail } from '@/ui/components';

interface ProductListProps {
  data: IProduct[];
}

const ProductList = ({ data }: ProductListProps) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 w-5/6 gap-6 mx-auto">
      {data.map((item) => (
        <CardDetail item={item} key={item.id} nameButton='Review'/>
      ))}
    </div>
  );
};

export default ProductList;
