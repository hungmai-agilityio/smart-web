import { END_POINT } from '@/constants';
import { IPlace, ISearchParams } from '@/interface';
import { getData } from '@/services';
import { Photo } from '@/ui/components';

interface PlaceListProps {
  searchParams: ISearchParams;
}
const PlaceList = async ({ searchParams }: PlaceListProps) => {
  const maxItems = 6;

  const query = searchParams['place-query'] ?? '';
  const param = query && `?category=${query}`;

  // Fetch data for filtered places
  const { data } = await getData<IPlace>(`${END_POINT.PLACES}${param}`);

  const filtered = data as IPlace[];
  const places = filtered.slice(0, maxItems);

  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-6 w-4/6 mx-auto">
      {places.length > 0 ? (
        places.map((item) => (
          <div
            key={item.id}
            className="w-full lg:h-place-lg md:h-place-md h-place-sm mx-auto"
          >
            <Photo src={item.image} alt={item.name} autoSize isBlur/>
          </div>
        ))
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default PlaceList;
