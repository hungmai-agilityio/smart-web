import { Metadata } from 'next';

// Layouts
import { Heading } from '@/ui/components';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Details for more products'
};

const ProductPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Heading> Products Page </Heading>
    </div>
  );
};

export default ProductPage;
