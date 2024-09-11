"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mt-[177px] sm:mt-14 lg:mt-52 mb-7.5">
      <h2 className="text-secondary-100 font-medium text-[162px] sm:text-[192px]">
        Error
      </h2>
      <p className="text-sm text-dark-100 text-center mt-2">
        Oops! Something went wrong we're sorry, but it looks like we've hit a
        snag.
      </p>
      <p className="text-sm text-dark-100 text-center mb-[85px] lg:mb-44">
        The page you were trying to reach is currently unavailable.
      </p>
      <button className="border border-red-500 p-2" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
