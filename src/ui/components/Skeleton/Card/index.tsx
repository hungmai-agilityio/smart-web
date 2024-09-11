export const CardSkeleton = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 w-5/6 gap-6 mx-auto">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex flex-col animate-pulse">
          <div className="xl:w-pro-lg xl:h-pro-lg md:w-pro-md md:h-pro-md w-pro-sm h-pro-sm mx-auto bg-gray-300 rounded-full" />

          <div className="mt-4 md:h-32 text-center">
            <div className="h-6 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-2/4 mx-auto"></div>
          </div>

          <div className="mt-5 mx-auto bg-gray-300 rounded w-24 h-8"></div>
        </div>
      ))}
    </div>
  );
};
