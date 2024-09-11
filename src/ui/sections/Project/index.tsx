'use client';
import { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Interfaces
import { IProject } from '@/interface';

// Constants
import { abel, montserrat } from '@/constants';

// Components
import {
  Dropdown,
  Heading,
  ItemProps,
  Photo,
  StatsRow,
  SkeletonImage
} from '@/ui/components';

//Utils
import { filterByCategory } from '@/utils/filter';

interface ProjectSectionProps {
  data: IProject[];
}

export const ProjectSection = ({ data }: ProjectSectionProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filter based on selected category
  const filteredData = data
    ? filterByCategory(data, 'category', selectedCategory)
    : [];

  // Get unique categories
  const categories = Array.from(new Set(data.map((item) => item.category)));

  // Create a list of categories for the dropdown
  const dropdownItems: ItemProps[] = categories.map((category) => ({
    label: category,
    value: category
  }));

  // Get category from URL params when the component is rendered
  useEffect(() => {
    if (categories.length > 0) {
      const category = searchParams.get('project-category');
      setSelectedCategory(category || categories[0]);
    }
  }, [searchParams]);

  // Function to handle when the user selects category
  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('project-category', category);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={`${abel.className} my-16 text-primary`}>
      <Heading styles={`${montserrat.className} text-center`}>
        Our Projects
      </Heading>

      {/* Desktop View - Category List */}
      <ul
        className={`${abel.className} my-8 md:flex hidden text-center w-5/6 mx-auto`}
      >
        {categories.map((category, index) => (
          <li
            key={index}
            className={`uppercase cursor-pointer hover:text-second w-full lg:text-base text-xs ${
              category === selectedCategory ? 'text-second' : ''
            }`}
            onClick={handleCategorySelect.bind(
              null,
              category === selectedCategory ? '' : category
            )}
          >
            {category}
          </li>
        ))}
      </ul>

      {/* Mobile View - Category Dropdown */}
      <div className="md:hidden flex justify-center my-8">
        <Dropdown items={dropdownItems} onSelect={handleCategorySelect} />
      </div>

      <Suspense fallback={<SkeletonImage col='4' row={8}/>}>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 w-5/6 mx-auto">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center border rounded-lg shadow-md"
            >
              <div className="w-full aspect-image relative">
                <Photo src={item.image} alt={item.name} autoSize>
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
      </Suspense>
    </div>
  );
};
