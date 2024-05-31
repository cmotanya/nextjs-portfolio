const Education = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold uppercase text-light-clr dark:text-600">
        Education
      </h3>

      {/* University college */}
      <div className="relative">
        <span className="before:absolute before:text-3xl before:text-accent-clr before:content-['•'] dark:before:text-600"></span>
        <div className="ml-6">
          <p>Bachelor of BIT</p>
          <span className="-mt-2 rounded-md bg-bright-clr p-1 text-300 dark:bg-800 dark:text-500">
            JKUAT, 2016
          </span>
        </div>

        {/* Secondary school */}
        <span className="before:absolute before:left-[0.26rem] before:top-[1.6rem] before:h-[4.5rem] before:w-[0.12rem] before:bg-700 dark:before:bg-700"></span>
        <span className="before:absolute before:top-[5.4rem] before:text-3xl before:text-accent-clr before:content-['•'] dark:before:text-700"></span>
        <div className="ml-6 mt-6">
          <p>High School Certificate</p>
          <span className="-mt-2 rounded-md bg-bright-clr p-1 text-300 dark:bg-800 dark:text-500">
            Nyamagwa Boys&apos; School, 2009
          </span>
        </div>

        {/* Primary school */}
        <span className="before:absolute before:left-[0.26rem] before:top-[7.0rem] before:h-[4.6rem] before:w-[0.12rem] before:bg-600 dark:before:bg-700"></span>
        <span className="before:absolute before:top-[10.9rem] before:text-3xl before:text-accent-clr before:content-['•'] dark:before:text-800"></span>
        <div className="ml-6 mt-6">
          <p>Primary School Certificate</p>
          <span className="-mt-2 rounded-md bg-bright-clr p-1 text-300 dark:bg-800 dark:text-500">
            Kosawo Primary School, 1997
          </span>
        </div>
      </div>
    </div>
  );
};

export default Education;
