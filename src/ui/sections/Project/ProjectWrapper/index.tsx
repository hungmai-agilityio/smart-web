// Constants
import { END_POINT } from '@/constants';

// Interfaces
import { IProject } from '@/interface';

// Services
import { getData } from '@/services';

// Sections
import { ProjectSection } from '@/ui/sections';

export const ProjectWrapper = async () => {
  const { data, error } = await getData<IProject>(END_POINT.PROJECTS);

  if (error) {
    return <div>Failed to load</div>;
  }

  return <ProjectSection data={data || []} />;
};
