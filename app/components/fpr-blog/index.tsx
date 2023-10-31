import Image from "next/image";
import HeroImg from "../../../public/blog/hero-img.png";
import RoofingInsightImg1 from "../../../public/blog/blog-roofing-insight/blog-ri-img-1.png";
import RoofingInsightImg2 from "../../../public/blog/blog-roofing-insight/blog-ri-img-2.png";
import RoofingInsightImg3 from "../../../public/blog/blog-roofing-insight/blog-ri-img-3.png";
import RoofingInsightImg4 from "../../../public/blog/blog-roofing-insight/blog-ri-img-4.png";
import RoofingInsightImg5 from "../../../public/blog/blog-roofing-insight/blog-ri-img-5.png";
import RoofingInsightImg6 from "../../../public/blog/blog-roofing-insight/blog-ri-img-6.png";
import RoofingInsightImg7 from "../../../public/blog/blog-roofing-insight/blog-ri-img-7.png";
import RoofingInsightImg8 from "../../../public/blog/blog-roofing-insight/blog-ri-img-8.png";
import RoofingInsightImg9 from "../../../public/blog/blog-roofing-insight/blog-ri-img-9.png";
import RoofingInsightImg10 from "../../../public/blog/blog-roofing-insight/blog-ri-img-10.png";
import RoofingInsightImg11 from "../../../public/blog/blog-roofing-insight/blog-ri-img-11.png";
import Footer from "../footer/index";
import Navigation from "../../components/fpr-blog/blog-navbar/index";

export default function BlogPage() {
  return (
    <div className="bg-neutral-n07 text-neutral flex flex-col sm:px-4 lg:px-[100px]">
      <div className="px-12 md:hidden lg:hidden">
        <Navigation />
      </div>

      <div className="sm:flex sm:flex-col hidden lg:block">
        <div className="lg:block">
          <Navigation />
        </div>

        <Image
          src={HeroImg}
          alt="FieldPoint Roofing Blog"
          className="h-72 lg:h-[500px] rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
        />

        <div className="roofing-insight__card-mobile flex flex-row py-4 ">
          <h1 className="uppercase basis-1/3 self-end text-3xl">
            Roofing Insight
          </h1>
          <div className="basis-2/3">
            <h2 className="roofing-insight__card-title text-3xl">
              Storm Damage on Asphalt Shingles
            </h2>
            <p>
              Asphalt shingle roofs are designed to withstand various weather
              conditions, but they are not invincible. Storms, with their
              combination of strong winds, heavy rains, hail, and debris
            </p>
          </div>
        </div>

        <div className="hidden">
          <div className="roofing-insight__card-desktop my-7 w-[375px]">
            <h1 className="uppercase">Roofing Insight</h1>
            <h2 className="roofing-insight__card-title text-3xl">
              Storm Damage on Asphalt Shingles
            </h2>
            <p>
              Asphalt shingle roofs are designed to withstand various weather
              conditions, but they are not invincible. Storms, with their
              combination of strong winds, heavy rains, hail, and debris
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
        <div className="lg:hidden roofing-insight__card mb-7 w-[375px] lg:w-[410px] lg:pr-2">
          <Image
            src={HeroImg}
            alt="FieldPoint Roofing Blog"
            className="h-72 lg:h-[500px] rounded shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]"
          />
          <h1 className="uppercase pt-4">Roofing Insight</h1>
          <h2 className="roofing-insight__card-title text-3xl">
            Storm Damage on Asphalt Shingles
          </h2>
          <p>
            Asphalt shingle roofs are designed to withstand various weather
            conditions, but they are not invincible. Storms, with their
            combination of strong winds, heavy rains, hail, and debris
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[410px] lg:pr-2">
          <Image
            src={RoofingInsightImg1}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            Before Going Solar
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-sm">
            The decision to install solar panels is a fantastic step towards
            renewable energy and reducing your carbon footprint. However, before
            jumping into solar panel installation, its crucial to assess the
            condition of your existing asphalt shingle...
          </p>
        </div>

        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[410px] lg:px-2">
          <Image
            src={RoofingInsightImg2}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            The Roof Replacement Process
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-sm">
            Roof replacement is a significant investment that homeowners must
            undertake when their existing roof reaches the end of its lifespan
            or suffers from severe damage...
          </p>
        </div>

        <div className=" roofing-insight__card mb-7 w-[375px] lg:w-[410px] lg:pl-2">
          <Image
            src={RoofingInsightImg3}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            Storm Damage on Asphalt Shingles
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-sm">
            Asphalt shingle roofs are designed to withstand various weather
            conditions, but they are not invincible. Storms, with their
            combination of strong winds, heavy rains, hail, and debris
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:pr-2">
          <Image
            src={RoofingInsightImg4}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            Possible Ways Your Roof Can Leak
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            A roof is an integral component of any structure, protecting it from
            external elements and providing shelter. However, it is susceptible
            to various factors that may cause leaks, leadi...
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:px-2">
          <Image
            src={RoofingInsightImg5}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            I Have a Flat Roof. What is Available?
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            Flat roofing materials are essential components of modern building
            construction, offering durability, weather resistance, and
            cost-effectiveness. These materials play a crucial role in
            protecting structures from the elements and ensuring long...
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:px-2">
          <Image
            src={RoofingInsightImg6}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            Lifespan of Asphalt Shingles
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            Asphalt shingles, a popular roofing material, have been utilized for
            centuries due to their cost-effectiveness, versatility, and
            aesthetic appeal. This article delves into the lifespan of asphalt
            shingles, exploring their durability, factors influenc...
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:pl-2">
          <Image
            src={RoofingInsightImg7}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            What Maintenance Is Required On My New Roof
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            Routine maintenance is essential to prolong the life and integrity
            of a new asphalt shingle roof. Asphalt shingles are one of the most
            popular roofing materials due to their affordability, durability,
            and ease of installation.
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-center">
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:pr-2">
          <Image
            src={RoofingInsightImg8}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            Possible Ways Your Roof Can Leak
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            A roof is an integral component of any structure, protecting it from
            external elements and providing shelter. However, it is susceptible
            to various factors that may cause leaks, leadi...
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:px-2">
          <Image
            src={RoofingInsightImg9}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            I Have a Flat Roof. What is Available?
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            Flat roofing materials are essential components of modern building
            construction, offering durability, weather resistance, and
            cost-effectiveness. These materials play a crucial role in
            protecting structures from the elements and ensuring long...
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:px-2">
          <Image
            src={RoofingInsightImg10}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            Lifespan of Asphalt Shingles
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            Asphalt shingles, a popular roofing material, have been utilized for
            centuries due to their cost-effectiveness, versatility, and
            aesthetic appeal. This article delves into the lifespan of asphalt
            shingles, exploring their durability, factors influenc...
          </p>
        </div>
        <div className="roofing-insight__card mb-7 w-[375px] lg:w-[310px] lg:pl-2">
          <Image
            src={RoofingInsightImg11}
            alt="First image in carousel"
            className="roofing-insight__img w-full"
          />
          <h2 className="roofing-insight__card-title text-[26px] lg:text-xl mt-4">
            What Maintenance Is Required On My New Roof
          </h2>
          <p className="roofing-insight__card-description text-base lg:text-xs">
            Routine maintenance is essential to prolong the life and integrity
            of a new asphalt shingle roof. Asphalt shingles are one of the most
            popular roofing materials due to their affordability, durability,
            and ease of installation.
          </p>
        </div>
      </div>
      <button
        type="submit"
        className="mx-4 lg:mx-0 text-xl uppercase bg-neutral-n12 text-neutral-n02 border-[1px] border-neutral border-opacity-20 py-2 px-20 mt-16 mb-4 rounded-full"
      >
        more
      </button>
      <Footer />
    </div>
  );
}
