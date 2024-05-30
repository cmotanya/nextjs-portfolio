import { RefObject, useEffect, useRef } from "react";

const ServiceCard = () => {
  const webCardRef = useRef(null);
  const netCardRef = useRef(null);

  useEffect(() => {
    const webRefCurrent = webCardRef.current;
    const netRefCurrent = netCardRef.current;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("scale-0", "opacity-0", "invisible");
          entry.target.classList.add("scale-100");
        }
      });
    });

    if (webRefCurrent) observer.observe(webRefCurrent);
    if (netRefCurrent) observer.observe(netRefCurrent);

    return () => {
      if (webRefCurrent) observer.unobserve(webRefCurrent);
      if (netRefCurrent) observer.unobserve(netRefCurrent);
    };
  }, []);

  return (
    <div className="pt-10">
      <h3 className="text-xl font-semibold uppercase text-light-clr dark:text-600">
        need a quotation for my service:
      </h3>
      <div className="mt-2 flex flex-col gap-4 md:flex-row">
        <div
          ref={webCardRef}
          className="invisible scale-0 transform rounded-sm bg-secondary-clr p-3 opacity-0 transition duration-300 ease-in-out dark:bg-800"
        >
          <p className="pb-3 text-center text-xl uppercase text-bright-clr dark:text-600">
            web
          </p>
          <div className="space-y-2 leading-normal dark:text-400">
            <p>Custom website design and development for all business needs.</p>
            <p>Brochure websites, e-commerce platforms, and more.</p>
            <p>Website maintenance, updates, and optimization.</p>
          </div>
          <button className="mt-3 w-full transform rounded-full bg-primary-clr py-2 text-200 transition hover:text-300 active:-translate-y-2 dark:bg-900 dark:text-400 dark:hover:text-600">
            Reach me
          </button>
        </div>

        <div
          ref={netCardRef}
          className="invisible scale-0 transform rounded-sm bg-secondary-clr p-3 opacity-0 transition duration-300 ease-in-out dark:bg-800"
        >
          <p className="pb-3 text-center text-xl uppercase text-bright-clr dark:text-600">
            cctv and networking
          </p>
          <div className="space-y-2 leading-normal dark:text-400">
            <p>Professional CCTV installation for security and surveillance.</p>
            <p>Network design, installation, and maintenance solutions.</p>
            <p>Cutting-edge technology and experienced technicians.</p>
          </div>
          <button className="mt-3 w-full transform rounded-full bg-primary-clr py-2 text-200 transition hover:text-300 active:-translate-y-2 dark:bg-900 dark:text-400 dark:hover:text-600">
            Reach me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
