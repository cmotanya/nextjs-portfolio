import React from "react";

function SkeletonUI() {
  return (
    <div className="relative min-h-dvh border-2 border-transparent">
      {/* navigation loader */}
      <div className="absolute right-3 top-4 h-10 w-10 animate-pulse rounded-md bg-800 md:right-0 md:top-0 md:h-[5rem] md:w-full md:rounded-none"></div>

      <div className="mx-auto max-w-4xl px-3">
        <div className="mt-[6rem] grid h-1/2 gap-2 md:mt-[8rem] md:grid-flow-col md:grid-cols-[65%_35%]">
          {/* left section */}
          <div className="animate-pulse space-y-4 md:space-y-5">
            <div className="h-8 w-3/4 animate-pulse rounded-sm bg-800"></div>
            <div className="h-[3.6rem] animate-pulse rounded-sm bg-800"></div>
            <div className="h-[11rem] animate-pulse rounded-sm bg-800"></div>
          </div>

          {/* image loader */}
          <div className="m-auto hidden h-[13rem] w-[15rem] rotate-3 animate-pulse rounded-sm bg-800 md:block"></div>
        </div>

        {/* loader simulating two button on only medium devices */}
        <div className="mt-[3.5rem] max-w-3xl md:flex md:flex-row md:justify-start lg:flex-none">
          <div className="w-full animate-pulse rounded-sm bg-800 md:mr-3 md:h-[3.5rem] lg:h-0"></div>
          <div className="animate-pulser w-full rounded-sm bg-800 md:ml-3 md:h-[3.5rem] lg:h-0"></div>
        </div>

        {/* added 2 div on small and medium devices to fill up up the empty space */}
        <div className="xs:h-[2rem] mt-[5rem] w-3/4 animate-pulse rounded-sm bg-800 md:mt-[12rem] md:h-[4rem] lg:mt-[6rem] lg:h-0"></div>
        <div className="xs:h-[11rem] mt-4 animate-pulse rounded-sm bg-800 md:h-[18rem] lg:h-0"></div>
      </div>

      {/* loader simulating two button on other devices except medium devices */}
      <div className="xs:mt-[6rem] absolute bottom-3 left-1/2 mt-[6rem] flex w-full  max-w-3xl -translate-x-1/2 animate-pulse flex-col justify-center px-3 md:mt-[3.5rem] md:flex-row md:justify-start">
        <div className="mb-4 flex h-[3.5rem] w-full animate-pulse items-center justify-center rounded-sm bg-800 md:mr-3 md:h-0 md:w-3/4 lg:h-[3.5rem]"></div>
        <div className="flex h-[3.5rem] w-full animate-pulse items-center justify-center rounded-sm bg-800 md:ml-3 md:h-0 md:w-3/4 lg:h-[3.5rem]"></div>
      </div>
    </div>
  );
}

export default SkeletonUI;
