'use client';

import { memo, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

// Constants
import { abel } from '@/constants';

// Components
import { Dropdown, ItemProps } from '@/ui/components';

interface CategoryProps {
  categories: string[];
  queryParam: string;
}

export const Category = memo(({ categories, queryParam }: CategoryProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get(queryParam);

  // Update category and URL when a new category is selected
  const handleCategorySelect = useCallback(
    (category: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(queryParam, category);
      router.push(`?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, queryParam]
  );

  const dropdownItems: ItemProps[] = categories.map((category) => ({
    label: category,
    value: category
  }));

  return (
    <>
      <ul
        className={`${abel.className} my-8 md:flex hidden lg:gap-48 gap-16 justify-center`}
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
});
