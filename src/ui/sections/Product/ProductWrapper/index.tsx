// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IProduct } from '@/interface';

// Services
import { getData } from '@/services';

// Sections
import { ProductSection } from '@/ui/sections';

export const ProductWrapper = async () => {
  const { data, error } = await getData<IProduct>(END_POINT.PRODUCTS);

  if (error) {
    return <div>Failed to load</div>;
  }

  return <ProductSection data={data || []} />;
};
