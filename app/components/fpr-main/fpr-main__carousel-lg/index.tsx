"use client";

import Image from "next/image";
import Carousel from "nuka-carousel";
import RoofingCarouselLrg1 from "../../../../public/main/main-lg-carousel/lg-carousel-img-1.png";
import RoofingCarouselLrg2 from "../../../../public/main/main-lg-carousel/lg-carousel-img-2.png";
import RoofingCarouselLrg3 from "../../../../public/main/main-lg-carousel/lg-carousel-img-3.png";
import RoofingCarouselLrg4 from "../../../../public/main/main-lg-carousel/lg-carousel-img-4.png";

export default function RoofingCarouselLrg() {
  const params = {
    withoutControls: true,
  };

  return (
    <Carousel {...params} className="mt-24">
      <div>
        <Image
          src={RoofingCarouselLrg1}
          alt="FieldPoint Roofing"
          className="w-[22.25rem] h-[12.5rem] lg:w-[89rem] lg:h-[50rem] "
        />
        <span className="text-xl text-neutral-n02">
          Job title or brief description could go here
        </span>
      </div>
      <div>
        <Image
          src={RoofingCarouselLrg2}
          alt="FieldPoint Roofing"
          className="w-[22.25rem] h-[12.5rem] lg:w-[89rem] lg:h-[50rem] "
        />
        <span className="text-xl text-neutral-n02">
          Job title or brief description could go here
        </span>
      </div>
      <div>
        <Image
          src={RoofingCarouselLrg3}
          alt="FieldPoint Roofing"
          className="w-[22.25rem] h-[12.5rem] lg:w-[89rem] lg:h-[50rem] "
        />
        <span className="text-xl text-neutral-n02">
          Job title or brief description could go here
        </span>
      </div>
      <div>
        <Image
          src={RoofingCarouselLrg4}
          alt="FieldPoint Roofing"
          className="w-[22.25rem] h-[12.5rem] lg:w-[89rem] lg:h-[50rem] "
        />
        <span className="text-xl text-neutral-n02">
          Job title or brief description could go here
        </span>
      </div>
    </Carousel>
  );
}
