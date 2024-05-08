import React from "react";

function SkeletonUI() {
  return (
    <div className="relative min-h-dvh border-2 border-transparent px-6">
      {/* navigation loader */}
      <div className="absolute right-3 top-4 h-10 w-10 animate-pulse rounded-md bg-800 md:right-0 md:top-0 md:h-[5rem] md:w-full md:rounded-none"></div>
      <div className="mx-auto max-w-4xl px-3">
        <div className="mt-[6rem] grid h-1/2 gap-4 md:mt-[8rem] md:grid-flow-col md:grid-cols-[65%_35%]">
          {/* left section */}
          <div className="animate-pulse space-y-6 md:space-y-5">
            <div className="h-8 w-3/4 animate-pulse rounded-sm bg-800"></div>
            <div className="h-[3.6rem] animate-pulse rounded-sm bg-800"></div>
            <div className="h-[11rem] animate-pulse rounded-sm bg-800"></div>
          </div>
          {/* image loader */}
          <div className="m-auto hidden h-[13rem] w-[15rem] rotate-3 animate-pulse rounded-sm bg-800 md:block"></div>
        </div>
        {/* loader simulating two button */}
        <div className="mx-auto mt-[7rem] flex max-w-3xl animate-pulse flex-col justify-center md:mt-[3.5rem] md:flex-row md:justify-start">
          <div className="mb-4 mr-3 flex h-[4rem] w-3/4 animate-pulse items-center justify-center rounded-sm bg-800"></div>
          <div className="ml-3 flex h-[4rem] w-3/4 animate-pulse items-center justify-center rounded-sm bg-800"></div>
        </div>
      </div>
    </div>
  );
}

export default SkeletonUI;
