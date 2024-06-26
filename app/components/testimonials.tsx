import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { images } from "../lib/global_links";
import { IconStarFilled } from "@tabler/icons-react";

const Carousel = () => {
  const testimonialRef = useRef(null);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const interval = 3000;

  /* Create an array of dots with the same length as images */
  const dots = Array.from({ length: images.length }, (_, index) => index);

  /* Function that changes the slide to the next one. */
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  /* Function that changes the slide to the next one. */
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);

  /* Function that changes the slide to the next one. */
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  /* Automatically change the slide every 3 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, goToNext, interval]);

  useEffect(() => {
    const testimonialRefCurrent = testimonialRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0", "scale-0", "invisible");
          entry.target.classList.add("scale-100");
        }
      });
    });

    if (testimonialRefCurrent) observer.observe(testimonialRefCurrent);

    return () => {
      if (testimonialRefCurrent) observer.unobserve(testimonialRefCurrent);
    };
  }, []);

  return (
    <div className="pt-6">
      <h2 className="pt-4 text-2xl uppercase text-light-clr dark:text-600">
        Testimonials
      </h2>
      <p className="pb-3 font-semibold">
        Some of my latest recommendations from clients I have worked with:
      </p>

      <div
        ref={testimonialRef}
        className="relative mx-auto h-[18rem] w-full scale-0 transform overflow-hidden rounded-md bg-slate-400/50 shadow-2xl transition duration-300 dark:bg-800 md:h-[20rem]"
      >
        <Suspense>
          <div className="relative size-full">
            {images.map(({ src, title, text, name }, index) => (
              /* Slides */
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="relative mx-auto flex h-full w-full px-3 pb-8 md:w-[80%] md:gap-2 md:px-1 md:pb-0">
                  {/* Testimonial-content */}
                  <div className="mx-auto flex h-full flex-col justify-center gap-2 md:w-[80%]">
                    <h3 className="uppercase text-600">{title}</h3>
                    <div className="flex gap-6 flex-col">
                      <p className="text-balance leading-tight">
                        &lsquo;{text}&rsquo;
                      </p>
                      <div className="flex w-fit gap-4">
                        <Image
                          src={src}
                          alt={`Slide ${src}`}
                          priority
                          height={100}
                          width={100}
                          className="mx-auto h-16 w-16 rounded-full object-cover object-center"
                        />
                        <div className="my-auto -space-y-2">
                          <h3 className="font-semibold text-bright-clr dark:text-secondary-clr">
                            {name}
                          </h3>
                          <p className="text-600 dark:text-500">{title}</p>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>

                {/* Dots */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  {dots.map((dot) => (
                    <button
                      key={dot}
                      className={`mx-1 size-3 rounded-full transition-colors duration-300 ${currentIndex === dot ? "bg-bright-clr dark:bg-900" : "bg-300 dark:bg-400 dark:hover:bg-500"}`}
                      onClick={() => goToSlide(dot)}
                    ></button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Suspense>

        {/* Left Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-600 p-2 text-white dark:bg-900 md:block"
        >
          <span aria-hidden="true"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </button>

        {/* Right Arrows */}
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-600 p-2 text-white dark:bg-900 md:block"
        >
          <span aria-hidden="true"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
