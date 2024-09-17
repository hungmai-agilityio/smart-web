import { Suspense } from 'react';

// Constants
import { END_POINT, montserrat } from '@/constants';

// Interfaces
import { IPlace, ISearchParams } from '@/interface';

// Services
import { getData } from '@/services';

// Components
import { Category, Heading, SkeletonImage } from '@/ui/components';
import PlaceList from '@/ui/sections/Places/List';

interface PlaceWrapperProps {
  searchParams: ISearchParams;
}

export const Place = async ({ searchParams }: PlaceWrapperProps) => {
  const { data, error } = await getData<IPlace>(END_POINT.PLACES);
  const query = searchParams?.['place-query'] ?? '';

  if (error) {
    return <div>Failed to load</div>;
  }

  const categories = Array.from(new Set(data!.map((place) => place.category)));

  return (
    <div className="my-16 text-primary">
      <Heading styles={`${montserrat.className} text-center`}>Places</Heading>
      <Category categories={categories} queryParam="place-query" />
      <Suspense key={query} fallback={<SkeletonImage col="3" row={6} />}>
        <PlaceList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};
