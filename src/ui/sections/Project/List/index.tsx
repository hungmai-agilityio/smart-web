// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IProject, ISearchParams } from '@/interface';

// Services
import { getData } from '@/services';

// Components
import { CardDisplay } from '@/ui/components';

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
        <CardDisplay
          key={item.id}
          image={item.image}
          name={item.name}
          views={item.views}
          favorites={item.favorite}
          comments={item.comment}
        />
      ))}
    </div>
  );
};
