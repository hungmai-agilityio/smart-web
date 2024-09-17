// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IProject, ISearchParams } from '@/interface';

// Services
import { getData } from '@/services';

// Components
import { Photo, StatsRow } from '@/ui/components';

interface ProjectListProps {
  searchParams: ISearchParams;
}

export const ProjectList = async ({ searchParams }: ProjectListProps) => {
  const maxItems = 8;

  const query = searchParams['project-query'] ?? '';
  const param = query ? `?category=${query}` : '';

  // Fetch data for filtered projects
  const { data } = await getData<IProject>(`${END_POINT.PROJECTS}${param}`);

  const filtered = data as IProject[];
  const projects = filtered.slice(0, maxItems);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 w-5/6 mx-auto">
      {projects.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center border rounded-lg shadow-md"
        >
          <div className="w-full aspect-image relative">
            <Photo src={item.image} alt={item.name} autoSize isBlur>
              <StatsRow
                views={item.views}
                favorite={item.favorite}
                comment={item.comment}
                viewIcon="/view-white.svg"
                favoriteIcon="/likes-white.svg"
                commentIcon="/cmt-white.svg"
                isColumn
              />
            </Photo>
          </div>

          <div className="md:flex hidden items-center w-full justify-between py-3 text-x-xs">
            <StatsRow
              views={item.views}
              favorite={item.favorite}
              comment={item.comment}
              viewIcon="/view-dark.svg"
              favoriteIcon="/likes.svg"
              commentIcon="/comments.svg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
