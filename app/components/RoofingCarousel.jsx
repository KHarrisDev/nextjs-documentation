import Image from "next/image";
import picture from "../../public/rf-carousel-img.jpg";

export default function RoofingCarousel() {
  return (
    <div>
      <div className="rf-carousel-label">
        <h3>Roofing Insight</h3>
        <h3>Read More</h3>
      </div>
      <div className="flex justify-center item-center gap-6">
        <div className="rf-carousel-card">
          <Image
            src={picture}
            alt="Picture of the author"
            className="rf-carousel-img"
            width={390}
            height={200}
          />
          <h4 className="rf-carousel-title">Before Going Solar</h4>
          <p className="rf-carousel-description">
            The decision to install solar panels is a fantastic step towards
            renewable energy and reducing your carbon footprint. However, before
            jumping into solar panel installation, it is crucial to assess the
            condition of your existing asphalt shingle...
          </p>
        </div>
        {/* <div className="rf-carousel-card">
          <Image
            src={picture}
            alt="Picture of the author"
            className="rf-carousel-img"
            width={390}
            height={200}
          />
          <h4 className="rf-carousel-title">The Roof Replacement Process</h4>
          <p className="rf-carousel-description">
            Roof replacement is a significant investment that homeowners must
            undertake when their existing roof reaches the end of its lifespan
            or suffers from severe damage...
          </p>
        </div>

        <div className="rf-carousel-card">
          <Image
            src={picture}
            alt="Picture of the author"
            className="rf-carousel-img"
            width={390}
            height={200}
          />
          <h4 className="rf-carousel-title">
            Storm Damage on Asphalt Shingles
          </h4>
          <p className="rf-carousel-description">
            Asphalt shingle roofs are designed to withstand various weather
            conditions, but they are not invincible. Storms, with their
            combination of strong winds, heavy rains, hail, and debris
          </p>
        </div>
        <div className="rf-carousel-card">
          <Image
            src={picture}
            alt="Picture of the author"
            className="rf-carousel-img"
            width={390}
            height={200}
          />
          <h4 className="rf-carousel-title">
            Possible Ways Your Roof Can Leak
          </h4>
          <p className="rf-carousel-description">
            A roof is an integral component of any structure, protecting it from
            external elements and providing shelter. However, it is susceptible
            to various factors that may cause leaks, leadi...
          </p>
        </div> */}
      </div>
    </div>
  );
}
