export function filterByCategory<T>(
  data: T[],
  categoryKey: keyof T,
  selectedCategory: string | null
): T[] {
  if (!selectedCategory) return data;
  return data.filter((item) => item[categoryKey] === selectedCategory);
}
