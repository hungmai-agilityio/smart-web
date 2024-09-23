import { Suspense } from 'react';

// Constants
import { END_POINT, abel, montserrat } from '@/constants';

// Services
import { getData } from '@/services';

// Interfaces
import { IProduct } from '@/interface';

// Components
import { CardSkeleton, Description, Heading } from '@/ui/components';

// Sections
import ProductList from '@/ui/sections/Product/List';

export const Product = async () => {
  const { data, error } = await getData<IProduct>(END_POINT.PRODUCTS);

  if (error) {
    return <div>Failed to load</div>;
  }

  return (
    <div className={`${abel.className} my-28 text-primary`}>
      <Heading styles={`${montserrat.className} text-center`}>
        Recent Products
      </Heading>
      <Description styles="my-5 mx-auto text-center lg:w-desc w-full">
        Having used discount toner cartridges for twenty years, there have been
        a lot of changes in the toner cartridge market. The market today is
        approximately a twenty billion dollar business.
      </Description>

      <Suspense fallback={<CardSkeleton />}>
        <ProductList data={data || []} />
      </Suspense>
    </div>
  );
};
