import Image from "next/image";
import Tabs from "./image-tab";
import { tabImg } from "../lib/global_links";

const ImageTab = () => {
  const img = tabImg.map((img) => img.images);
  const alt = tabImg.map((img) => img.name);

  return (
    <Tabs>
      <div title={alt[0]} className="">
        {img[0].map(
          (imgSrc, index) =>
            imgSrc != undefined && (
              <Image
                key={index}
                src={imgSrc}
                alt={alt[0]}
                priority
                width="200"
                height="200"
                className="rounded-md object-cover xs:h-[7rem] xs:w-[9rem] sm:h-[9rem] sm:w-[11rem] md:h-[11rem] md:w-[13rem]"
              />
            ),
        )}
      </div>
      <div
        title={alt[1]}
        className="grid w-full grid-cols-2 gap-5 md:grid-cols-3"
      >
        {img[1].map(
          (imgSrc, index) =>
            imgSrc != undefined && (
              <Image
                key={index}
                src={imgSrc}
                alt={alt[1]}
                priority
                width="300"
                height="300"
                className="rounded-md object-cover xs:h-[7rem] xs:w-[9rem] sm:h-[9rem] sm:w-[11rem] md:h-[11rem] md:w-[13rem]"
              />
            ),
        )}
      </div>
      <div
        title={alt[2]}
        className="grid w-full grid-cols-2 gap-5 md:grid-cols-3"
      >
        {img[2].map(
          (imgSrc, index) =>
            imgSrc != undefined && (
              <Image
                key={index}
                src={imgSrc}
                alt={alt[2]}
                // fill
                priority
                width="300"
                height="300"
                className="rounded-md object-cover xs:h-[7rem] xs:w-[9rem] sm:h-[9rem] sm:w-[11rem] md:h-[11rem] md:w-[13rem]"
              />
            ),
        )}
      </div>
    </Tabs>
  );
};

export default ImageTab;
