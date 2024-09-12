'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Constants
import { abel, montserrat } from '@/constants';

// Utils
import { filterByCategory } from '@/utils/filter';

// Interfaces
import { IPlace } from '@/interface';

// Components
import {
  Heading,
  Photo,
  Dropdown,
  ItemProps,
  SkeletonImage
} from '@/ui/components';

interface PlaceSectionProps {
  data: IPlace[];
}

export const PlacesSection = ({ data }: PlaceSectionProps) => {
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
      const category = searchParams.get('place-category');
      setSelectedCategory(category || categories[0]);
    }
  }, [searchParams]);

  // Function to handle when the user selects category
  const handleCategorySelect = (category: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('place-category', category);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const MAX_ITEMS = 6;
  const places = filteredData.slice(0, MAX_ITEMS);

  return (
    <div className="my-16 text-primary">
      <Heading styles={`${montserrat.className} text-center`}>Places</Heading>
      {/* Desktop View - Category List */}
      <ul
        className={`${abel.className} my-8 md:flex hidden lg:gap-48 gap-16 justify-center`}
      >
        {categories.map((category, index) => (
          <li
            className={`uppercase cursor-pointer hover:text-second ${
              selectedCategory === category ? 'text-second' : ''
            }`}
            key={index}
            onClick={handleCategorySelect.bind(null, category)}
          >
            {category}
          </li>
        ))}
      </ul>
      {/* Mobile View - Category Dropdown */}
      <div className="md:hidden flex justify-center my-8">
        <Dropdown
          items={dropdownItems}
          onSelect={(value) => setSelectedCategory(value)}
        />
      </div>

      {/* Image Grid */}
      <Suspense fallback={<SkeletonImage col="3" row={6} />}>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 w-4/6 mx-auto">
          {places.length > 0 ? (
            places.map((item) => (
              <div
                key={item.id}
                className="w-full lg:h-place-lg md:h-place-md h-place-sm mx-auto"
              >
                <Photo src={item.image} alt={item.name} autoSize />
              </div>
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
      </Suspense>
    </div>
  );
};
