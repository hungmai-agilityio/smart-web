'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Constants
import { abel } from '@/constants';

// Components
import { Dropdown, ItemProps } from '@/ui/components';

interface CategoryProps {
  categories: string[];
  queryParam: string;
}

export const Category = ({ categories, queryParam }: CategoryProps) => {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const initCategory = searchParams.get(queryParam) || '';

  const [currentCategory, setCurrentCategory] = useState<string>(initCategory);

  // Update category and URL when a new category is selected
  const handleCategorySelect = (category: string) => {
    params.set(queryParam, category);
    replace(`?${params.toString()}`, { scroll: false });
    setCurrentCategory(category);
  };

  const dropdownItems: ItemProps[] = categories.map((category) => ({
    label: category,
    value: category
  }));

  return (
    <>
      <ul
        className={`${abel.className} my-8 md:flex hidden xl:gap-28 md:gap-16 justify-center`}
      >
        {categories.map((category, index) => (
          <li
            className={`uppercase cursor-pointer hover:text-second ${currentCategory === category ? 'text-second' : ''}`}
            key={index}
            onClick={handleCategorySelect.bind(null, category)}
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="md:hidden flex justify-center my-8">
        <Dropdown
          items={dropdownItems}
          selectedValue={currentCategory!}
          onSelect={(value) => handleCategorySelect(value)}
        />
      </div>
    </>
  );
};
