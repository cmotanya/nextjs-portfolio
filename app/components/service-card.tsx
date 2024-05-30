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
          className="invisible scale-0 transform space-y-3 rounded-sm bg-secondary-clr p-3 opacity-0 transition duration-300 ease-in-out"
        >
          <p className="text-center text-xl uppercase text-bright-clr">web</p>
          <p className="leading-normal">
            Custom website design and development for all business needs.
          </p>
          <p className="leading-normal">
            Brochure websites, e-commerce platforms, and more.
          </p>
          <p className="leading-normal">
            Website maintenance, updates, and optimization.
          </p>
        </div>

        <div
          ref={netCardRef}
          className="space-y-3 rounded-sm bg-secondary-clr p-3 opacity-0 transition duration-300 ease-in-out"
        >
          <p className="text-center text-xl uppercase text-bright-clr">
            cctv and networking
          </p>
          <p className="leading-normal">
            Professional CCTV installation for security and surveillance.
          </p>
          <p className="leading-normal">
            Network design, installation, and maintenance solutions.
          </p>
          <p className="leading-normal">
            Cutting-edge technology and experienced technicians.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
