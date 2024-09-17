import { Suspense } from 'react';

// Constants
import { END_POINT, abel, montserrat } from '@/constants';

// Interfaces
import { IProject, ISearchParams } from '@/interface';

// Services
import { getData } from '@/services';
import { Category, Heading, SkeletonImage } from '@/ui/components';

// Sections
import { ProjectList } from '@/ui/sections';

interface ProjectProps {
  searchParams: ISearchParams;
}

export const Project = async ({ searchParams }: ProjectProps) => {
  const { data, error } = await getData<IProject>(END_POINT.PROJECTS);
  const query = searchParams?.['project-query'] ?? '';

  if (error) {
    return <div>Failed to load</div>;
  }

  const categories = Array.from(
    new Set(data!.map((project) => project.category))
  );

  return (
    <div className={`${abel.className} my-16 text-primary`}>
      <Heading styles={`${montserrat.className} text-center`}>
        Our Projects
      </Heading>
      <Category categories={categories} queryParam="project-query" />
      <Suspense key={query} fallback={<SkeletonImage col="4" row={8} />}>
        <ProjectList searchParams={searchParams} />
      </Suspense>
    </div>
  );
};
