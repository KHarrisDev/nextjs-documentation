import Image from "next/image";
import RoofingServicesImg1 from "../../../../public/main/main-roofing-services/rs-img-1.png";
import RoofingServicesImg2 from "../../../../public/main/main-roofing-services/rs-img-2.png";
import RoofingServicesImg3 from "../../../../public/main/main-roofing-services/rs-img-3.png";
import RoofingServicesImg4 from "../../../../public/main/main-roofing-services/rs-img-4.png";

export default function RoofingServices() {
  return (
    <section className="bg-neutral-n07 flex flex-col items-center mb-4">
      <div className="rf-services-header w-full">
        <h3 className="text-neutral-n02 mb-4 ml-9 lg:pl-12 lg:mt-16 w-full">
          Roofing Services
        </h3>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-4">
        <div className="rf-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-services-title text-xl pt-4 mb-4">
            Asphalt Shingles
          </h4>
          <Image
            src={RoofingServicesImg1}
            alt="Picture of the author"
            className="rf-services-img mb-5"
          />
          <p className="rf-services-description text-sm">
            Asphalt shingles are a common roofing material made from a mixture
            of asphalt and a fiberglass mat. The lifespan for asphalt shingles
            will vary by location and can last up to 30 years or more. We carry
            a variety of colors and styles to fit and match any structure.
          </p>
        </div>
        <div className="rf-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-services-title text-xl pt-4 mb-4">
            Rubber Flat Roof
          </h4>
          <Image
            src={RoofingServicesImg2}
            alt="Picture of the author"
            className="rf-services-img mb-5"
          />
          <p className="rf-services-description text-sm">
            Flat rubber roofs, also known as EPDM roofs, are a popular choice
            for commercial and residential buildings with low-slope or flat
            roofs. They are made from synthetic rubber membranes that are
            durable, flexible, and resistant to UV rays, weathering, and
            punctures. They require little maintenance and can last up to 50
            years with proper installation and care.
          </p>
        </div>
        <div className="rf-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-services-title text-xl pt-4 mb-4">Metal</h4>
          <Image
            src={RoofingServicesImg3}
            alt="Picture of the author"
            className="rf-services-img mb-5"
          />
          <p className="rf-services-description text-sm">
            Metal roofs are a long-lasting and durable option for residential
            and commercial buildings. They are available in various styles, such
            as standing seam, corrugated, and shingle, and made from materials
            such as steel, aluminum, and copper. They are fire- resistant,
            energy-efficient, and low-maintenance, making them a popular choice
            in areas with extreme weather conditions.
          </p>
        </div>
        <div className="rf-services-card w-[19rem] h-[26rem] px-4 border-solid border border-neutral-n12">
          <h4 className="rf-services-title text-xl pt-4 mb-4">Solar</h4>
          <Image
            src={RoofingServicesImg4}
            alt="Picture of the author"
            className="rf-services-img mb-5"
          />
          <p className="rf-services-description text-sm">
            If your roof is nearing the end of its lifespan, it is recommended
            to install a new roof before going solar. This ensures proper
            sealing and anchoring of the solar panels, prevents any damage to
            the solar system from leaks or repairs, and can increase the homes
            value.
          </p>
        </div>
      </div>
    </section>
  );
}
