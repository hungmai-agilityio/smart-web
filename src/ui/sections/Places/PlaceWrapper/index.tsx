// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IPlace } from '@/interface';

// Services
import { getData } from '@/services';

// Sections
import { PlacesSection } from '@/ui/sections';

export const PlaceWrapper = async () => {
  const { data, error } = await getData<IPlace>(END_POINT.PLACES);

  if (error) {
    return <div>Failed to load</div>;
  }

  return <PlacesSection data={data || []} />;
};
