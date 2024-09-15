'use client';

import { useRef, useState, useEffect, useCallback, useMemo, memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useOutsideClick } from '@/hooks/useOutsideClick';

export interface ItemProps {
  label: string;
  value: string;
}

interface DropdownProps {
  items: ItemProps[];
  selectedValue?: string;
  onSelect?: (value: string) => void;
}

export const Dropdown = memo(
  ({ items, selectedValue, onSelect }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const selectedItem = useMemo(
      () => items.find((item) => item.value === selectedValue) || items[0],
      [selectedValue, items]
    );

    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = useCallback(() => {
      setIsOpen((prev) => !prev);
    }, []);

    const handleItemClick = useCallback(
      (item: ItemProps) => {
        setIsOpen(false);
        if (onSelect) onSelect(item.value);
      },
      [onSelect]
    );

    useOutsideClick({
      ref: dropdownRef,
      handler: () => setIsOpen(false)
    });

    return (
      <div ref={dropdownRef} className="relative inline-block text-left w-36">
        <button
          type="button"
          className="flex items-center justify-between w-full px-3 py-2 border border-primary rounded-full md:text-base text-x-xs uppercase"
          onClick={toggleDropdown}
        >
          {selectedItem.label}
          <FontAwesomeIcon
            icon={faCaretDown}
            className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        <div
          className={`absolute right-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 transition-transform duration-300 ease-in-out ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          {items.map((item) => (
            <button
              key={item.value}
              className="w-full text-left px-4 py-2 hover:bg-gray-100 md:text-base text-xs uppercase"
              onClick={handleItemClick.bind(null, item)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    );
  }
);
