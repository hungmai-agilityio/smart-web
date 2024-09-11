interface SkeletonProps {
  col: string;
  row: number;
}

export const SkeletonImage = ({ col, row }: SkeletonProps) => (
  <div className={`grid md:grid-cols-${col} grid-cols-2 gap-6 w-4/6 mx-auto`}>
    {Array.from({ length: row }).map((_, index) => (
      <div key={index} className="animate-pulse flex flex-col sm:flex-row">
        <div className="bg-gray-300 lg:h-place-lg md:h-place-md h-place-sm w-full rounded-md mb-4 sm:mb-0" />
        <div className="flex flex-col justify-end flex-1 sm:ml-10"></div>
      </div>
    ))}
  </div>
);
