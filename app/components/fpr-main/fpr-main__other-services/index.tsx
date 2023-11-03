import Image from "next/image";
import OtherRoofingServices1 from "../../../../public/main/main-other-roofing-services/other-rs-img-1.png";
import OtherRoofingServices2 from "../../../../public/main/main-other-roofing-services/other-rs-img-2.png";
import OtherRoofingServices3 from "../../../../public/main/main-other-roofing-services/other-rs-img-3.png";
import OtherRoofingServices4 from "../../../../public/main/main-other-roofing-services/other-rs-img-4.png";

export default function RoofingServices() {
  return (
    <section className="bg-neutral-n07 flex flex-col items-center">
      <div className="rf-other-services-header w-11/12">
        <h3 className="text-neutral-n02 mb-4 lg:mt-16">
          Other Roofing Services
        </h3>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-4">
        <div className="rf-other-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-other-services-title text-xl pt-4 mb-4">Siding</h4>
          <Image
            src={OtherRoofingServices1}
            alt="Picture of the author"
            className="rf-other-services-img mb-5"
          />
          <p className="rf-other-services-description text-sm">
            Siding is essential for a house as it not only protects the
            structure from the elements but also significantly contributes to
            its aesthetic appeal, defining its overall appearance and curb
            appeal.
          </p>
        </div>
        <div className="rf-other-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-other-services-title text-xl pt-4 mb-4">
            Asphalt Shingles
          </h4>
          <Image
            src={OtherRoofingServices2}
            alt="Picture of the author"
            className="rf-other-services-img mb-5"
          />
          <p className="rf-other-services-description text-sm">
            Asphalt shingles are a common roofing material made from a mixture
            of asphalt and a fiberglass mat. The lifespan for asphalt shingles
            will vary by location and can last up to 30 years or more. We carry
            a variety of colors and styles to fit and match any structure.
          </p>
        </div>
        <div className="rf-other-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-other-services-title text-xl pt-4 mb-4">
            Asphalt Shingles
          </h4>
          <Image
            src={OtherRoofingServices3}
            alt="Picture of the author"
            className="rf-other-services-img mb-5"
          />
          <p className="rf-other-services-description text-sm">
            Asphalt shingles are a common roofing material made from a mixture
            of asphalt and a fiberglass mat. The lifespan for asphalt shingles
            will vary by location and can last up to 30 years or more. We carry
            a variety of colors and styles to fit and match any structure.
          </p>
        </div>
        <div className="rf-other-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-other-services-title text-xl pt-4 mb-4">
            Asphalt Shingles
          </h4>
          <Image
            src={OtherRoofingServices4}
            alt="Picture of the author"
            className="rf-other-services-img mb-5"
          />
          <p className="rf-other-services-description text-sm">
            Asphalt shingles are a common roofing material made from a mixture
            of asphalt and a fiberglass mat. The lifespan for asphalt shingles
            will vary by location and can last up to 30 years or more. We carry
            a variety of colors and styles to fit and match any structure.
          </p>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-4 lg:mt-4">
        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            Drywall
          </h4>
          <p className="rf-services-other-description text-sm">
            Fixing or installing new drywall involves preparing the surface,
            cutting and hanging the sheets, applying joint compound, and
            finishing with sanding and painting to create a smooth and
            aesthetically pleasing interior wall or ceiling surface.
          </p>
        </div>

        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            Painting
          </h4>
          <p className="rf-services-other-description text-sm">
            Painting can significantly enhance a homes appearance and atmosphere
            by adding color, personality, and a fresh, clean look to walls,
            ceilings, and surfaces, while also protecting them from wear and
            tear.
          </p>
        </div>

        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            Electrical
          </h4>
          <p className="rf-services-other-description text-sm">
            Painting can significantly enhance a home appearance and atmosphere
            by adding color, personality, and a fresh, clean look to walls,
            ceilings, and surfaces, while also protecting them from wear and
            tear.
          </p>
        </div>

        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            Plumbing
          </h4>
          <p className="rf-services-other-description text-sm">
            Painting can significantly enhance a home appearance and atmosphere
            by adding color, personality, and a fresh, clean look to walls,
            ceilings, and surfaces, while also protecting them from wear and
            tear.
          </p>
        </div>

        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            Concrete
          </h4>
          <p className="rf-services-other-description text-sm">
            Design and pouring...
          </p>
        </div>

        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            HVAC
          </h4>
          <p className="rf-services-other-description text-sm">
            Installing a new HVAC system can increase home efficiency by
            providing more precise temperature control, improved energy
            utilization, and reduced utility costs through modern, energy-
            efficient technology.
          </p>
        </div>

        <div className="rf-services-other-no-img-card w-[19rem] h-[9rem]">
          <h4 className="rf-services-other-no-img-title text-xl pt-4 mb-4">
            New Construction
          </h4>
          <p className="rf-services-other-description text-sm">
            Managing new construction jobs involves coordinating various aspects
            such as design, permitting, hiring skilled labor, procuring
            materials, and overseeing the project to ensure it is completed on
            time, within budget, and meets quality standards
          </p>
        </div>
      </div>
    </section>
  );
}
