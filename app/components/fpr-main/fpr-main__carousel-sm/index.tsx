"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import SmCarouselImgOne from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-1.png";
import SmCarouselImgTwo from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-2.png";
import SmCarouselImgThree from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-3.png";
import SmCarouselImgFour from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-4.png";
import SmCarouselImgFive from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-5.png";
import SmCarouselImgSix from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-6.png";
import SmCarouselImgSeven from "../../../../public/main/main-roofing-insight-sm-carousel/sm-carousel-img-7.png";

const params = {
  withoutControls: true,
};

export default function RoofingInsight() {
  const [isMobile, setIsMobile] = useState(false);
  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  };
  useEffect(() => {
    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);
    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="flex flex-col px-4">
          <div className="roofing-insight__labels w-full flex flex-row justify-between py-4 pt-16">
            <span className="text-xl text-neutral-n02">Roofing Insight</span>
            <span className="text-xl font-semibold text-neutral">
              Read More
            </span>
          </div>

          <div className="roofing-insight__carousel">
            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgOne}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Before Going Solar
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                The decision to install solar panels is a fantastic step towards
                renewable energy and reducing your carbon footprint. However,
                before jumping into solar panel installation, its crucial to
                assess the condition of your existing asphalt shingle...
              </p>
            </div>

            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgTwo}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                The Roof Replacement Process
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Roof replacement is a significant investment that homeowners
                must undertake when their existing roof reaches the end of its
                lifespan or suffers from severe damage...
              </p>
            </div>

            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgThree}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Storm Damage on Asphalt Shingles
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Asphalt shingle roofs are designed to withstand various weather
                conditions, but they are not invincible. Storms, with their
                combination of strong winds, heavy rains, hail, and debris
              </p>
            </div>
            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgFour}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Possible Ways Your Roof Can Leak
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                A roof is an integral component of any structure, protecting it
                from external elements and providing shelter. However, it is
                susceptible to various factors that may cause leaks, leadi...
              </p>
            </div>

            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgFive}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                I Have a Flat Roof. What is Available?
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Flat roofing materials are essential components of modern
                building construction, offering durability, weather resistance,
                and cost-effectiveness. These materials play a crucial role in
                protecting structures from the elements and ensuring long...
              </p>
            </div>

            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgSix}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Lifespan of Asphalt Shingles
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Asphalt shingles, a popular roofing material, have been utilized
                for centuries due to their cost-effectiveness, versatility, and
                aesthetic appeal. This article delves into the lifespan of
                asphalt shingles, exploring their durability, factors
                influenc...
              </p>
            </div>
            <div className="roofing-insight__card mb-6">
              <Image
                src={SmCarouselImgSeven}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                What Maintenance Is Required On My New Roof
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Routine maintenance is essential to prolong the life and
                integrity of a new asphalt shingle roof. Asphalt shingles are
                one of the most popular roofing materials due to their
                affordability, durability, and ease of installation.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col px-4">
          <div className="roofing-insight__labels w-full flex flex-row justify-between py-4 pt-16">
            <span className="text-xl text-neutral-n02">Roofing Insight</span>
            <span className="text-xl font-semibold text-neutral">
              Read More
            </span>
          </div>
          <Carousel className="lg:grid lg:grid-cols-3 lg:gap-4" {...params}>
            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgOne}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Before Going Solar
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                The decision to install solar panels is a fantastic step towards
                renewable energy and reducing your carbon footprint. However,
                before jumping into solar panel installation, its crucial to
                assess the condition of your existing asphalt shingle...
              </p>
            </div>

            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgTwo}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                The Roof Replacement Process
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Roof replacement is a significant investment that homeowners
                must undertake when their existing roof reaches the end of its
                lifespan or suffers from severe damage...
              </p>
            </div>

            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgThree}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Storm Damage on Asphalt Shingles
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Asphalt shingle roofs are designed to withstand various weather
                conditions, but they are not invincible. Storms, with their
                combination of strong winds, heavy rains, hail, and debris
              </p>
            </div>

            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgFour}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Possible Ways Your Roof Can Leak
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                A roof is an integral component of any structure, protecting it
                from external elements and providing shelter. However, it is
                susceptible to various factors that may cause leaks, leadi...
              </p>
            </div>

            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgFive}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                I Have a Flat Roof. What is Available?
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Flat roofing materials are essential components of modern
                building construction, offering durability, weather resistance,
                and cost-effectiveness. These materials play a crucial role in
                protecting structures from the elements and ensuring long...
              </p>
            </div>

            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgSix}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                Lifespan of Asphalt Shingles
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Asphalt shingles, a popular roofing material, have been utilized
                for centuries due to their cost-effectiveness, versatility, and
                aesthetic appeal. This article delves into the lifespan of
                asphalt shingles, exploring their durability, factors
                influenc...
              </p>
            </div>

            <div className="roofing-insight__card mb-6 lg:mx-4">
              <Image
                src={SmCarouselImgSeven}
                alt="First image in carousel"
                className="carousel-card__img"
              />
              <h2 className="roofing-insight__card-title text-3xl mt-4">
                What Maintenance Is Required On My New Roof
              </h2>
              <p className="roofing-insight__card-description text-base lg:text-sm">
                Routine maintenance is essential to prolong the life and
                integrity of a new asphalt shingle roof. Asphalt shingles are
                one of the most popular roofing materials due to their
                affordability, durability, and ease of installation.
              </p>
            </div>
          </Carousel>
        </div>
      )}
    </div>

    // <div className="flex flex-col px-4">
    //   <div className="roofing-insight__labels w-full flex flex-row justify-between py-4 pt-16">
    //     <span className="text-xl text-neutral-n02">Roofing Insight</span>
    //     <span className="text-xl font-semibold text-neutral">Read More</span>
    //   </div>

    //   <div className="roofing-insight__carousel lg:grid lg:grid-cols-3 lg:gap-4">
    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgOne}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         Before Going Solar
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         The decision to install solar panels is a fantastic step towards
    //         renewable energy and reducing your carbon footprint. However, before
    //         jumping into solar panel installation, its crucial to assess the
    //         condition of your existing asphalt shingle...
    //       </p>
    //     </div>

    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgTwo}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         The Roof Replacement Process
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         Roof replacement is a significant investment that homeowners must
    //         undertake when their existing roof reaches the end of its lifespan
    //         or suffers from severe damage...
    //       </p>
    //     </div>

    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgThree}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         Storm Damage on Asphalt Shingles
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         Asphalt shingle roofs are designed to withstand various weather
    //         conditions, but they are not invincible. Storms, with their
    //         combination of strong winds, heavy rains, hail, and debris
    //       </p>
    //     </div>
    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgFour}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         Possible Ways Your Roof Can Leak
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         A roof is an integral component of any structure, protecting it from
    //         external elements and providing shelter. However, it is susceptible
    //         to various factors that may cause leaks, leadi...
    //       </p>
    //     </div>

    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgFive}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         I Have a Flat Roof. What is Available?
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         Flat roofing materials are essential components of modern building
    //         construction, offering durability, weather resistance, and
    //         cost-effectiveness. These materials play a crucial role in
    //         protecting structures from the elements and ensuring long...
    //       </p>
    //     </div>

    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgSix}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         Lifespan of Asphalt Shingles
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         Asphalt shingles, a popular roofing material, have been utilized for
    //         centuries due to their cost-effectiveness, versatility, and
    //         aesthetic appeal. This article delves into the lifespan of asphalt
    //         shingles, exploring their durability, factors influenc...
    //       </p>
    //     </div>
    //     <div className="roofing-insight__card mb-6">
    //       <Image
    //         src={SmCarouselImgSeven}
    //         alt="First image in carousel"
    //         className="carousel-card__img"
    //       />
    //       <h2 className="roofing-insight__card-title text-3xl mt-4">
    //         What Maintenance Is Required On My New Roof
    //       </h2>
    //       <p className="roofing-insight__card-description text-base lg:text-sm">
    //         Routine maintenance is essential to prolong the life and integrity
    //         of a new asphalt shingle roof. Asphalt shingles are one of the most
    //         popular roofing materials due to their affordability, durability,
    //         and ease of installation.
    //       </p>
    //     </div>
    //   </div>
    // </div>
  );
}
