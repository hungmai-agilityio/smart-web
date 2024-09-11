import { filterByCategory } from "@/utils/filter";

describe('filterByCategory', () => {
  const mockFilterData = [
    { id: 1, name: 'Place 1', category: 'Beach' },
    { id: 2, name: 'Place 2', category: 'Mountain' },
    { id: 3, name: 'Place 3', category: 'Beach' },
    { id: 4, name: 'Place 4', category: 'Forest' }
  ];

  it('should return all data if no category is selected', () => {
    const result = filterByCategory(mockFilterData, 'category', null);
    expect(result).toEqual(mockFilterData);
  });

  it('should return data matching the selected category', () => {
    const result = filterByCategory(mockFilterData, 'category', 'Beach');
    expect(result).toEqual([
      { id: 1, name: 'Place 1', category: 'Beach' },
      { id: 3, name: 'Place 3', category: 'Beach' }
    ]);
  });

  it('should return an empty array if no data matches the selected category', () => {
    const result = filterByCategory(mockFilterData, 'category', 'Desert');
    expect(result).toEqual([]);
  });

  it('should return an empty array if the data is empty', () => {
    const result = filterByCategory([], 'category', 'Beach');
    expect(result).toEqual([]);
  });

  it('should work with different category keys', () => {
    const dataWithDifferentKeys = [
      { id: 1, title: 'Place 1', type: 'City' },
      { id: 2, title: 'Place 2', type: 'Village' }
    ];
    const result = filterByCategory(dataWithDifferentKeys, 'type', 'City');
    expect(result).toEqual([{ id: 1, title: 'Place 1', type: 'City' }]);
  });
});
