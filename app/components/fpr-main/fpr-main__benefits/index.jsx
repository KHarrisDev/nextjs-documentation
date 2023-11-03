import Image from "next/image";
import RoofingBenefitsImg1 from "../../../../public/main/main-roofing-benefits/rb-img-1.png";
import RoofingBenefitsImg2 from "../../../../public/main/main-roofing-benefits/rb-img-2.png";
import RoofingBenefitsImg3 from "../../../../public/main/main-roofing-benefits/rb-img-3.png";

export default function RoofingBenefits() {
  return (
    <section className="mt-20 mb-10">
      <div className="flex flex-col">
        <div className="rf-benefits-card py-4 lg:flex">
          <div className="relative md:flex-1">
            <Image
              src={RoofingBenefitsImg3}
              className=""
              alt="A picture of a roof."
            />
            <div className="absolute inset-0">
              <div className="h-1/6 skew-y-3 -translate-y-6 bg-neutral-n07"></div>
              <div className="h-4/6"></div>
              <div className="h-1/6 -skew-y-3 translate-y-6 lg:translate-y-8 bg-neutral-n07"></div>
            </div>
          </div>
          <div className="rf-benefits-card-text py-4 px-9 md:flex-1">
            <h3 className="rf-benefits-title font-medium text-3xl lg:text-5xl lg:pt-24 lg:pl-24 py-4">
              ROOF REPLACMENT
            </h3>
            <p className="rf-benefits-desccription font-light text-2xl lg:text-2xl lg:pl-24 lg:pr-36">
              As specialists in residential and commercial roofing services, we
              are dedicated to providing customer service that is second to
              none. Whether you have a new construction project or it is time
              for repairs, we offer the roofing services you need.
            </p>
          </div>
        </div>

        <div className="rf-benefits-card py-4 lg:flex lg:flex-row-reverse">
          <div className="relative md:flex-1">
            <Image
              src={RoofingBenefitsImg2}
              className=""
              alt="A picture of a roof."
            />
            <div className="absolute inset-0">
              <div className="h-1/6 -skew-y-3 -translate-y-5 bg-neutral-n07"></div>
              <div className="h-4/6"></div>
              <div className="h-1/6 skew-y-3 translate-y-4 lg:translate-y-8 bg-neutral-n07"></div>
            </div>
          </div>
          <div className="rf-benefits-card-text py-4 px-9 md:flex-1">
            <h3 className="rf-benefits-title font-medium text-3xl py-4 lg:text-5xl lg:pl-24 lg:pt-24">
              CUSTOMIZED TO YOUR NEEDS
            </h3>
            <p className="rf-benefits-desccription font-light text-2xl lg:text-2xl lg:pl-24 lg:pr-24">
              We provide a full consultation to explain your available options
              so that you can choose the roofing plan that is right for your
              home or business. We will work with you and adhere to your
              personal needs, and then we will be in contact through the whole
              project.
            </p>
          </div>
        </div>
        <div className="rf-benefits-card py-4 lg:flex">
          <div className="relative md:flex-1">
            <Image
              src={RoofingBenefitsImg3}
              className=""
              alt="A picture of a roof."
            />
            <div className="absolute inset-0">
              <div className="h-1/6 skew-y-3 -translate-y-6 bg-neutral-n07"></div>
              <div className="h-4/6"></div>
              <div className="h-1/6 -skew-y-3 translate-y-6 lg:translate-y-8 bg-neutral-n07"></div>
            </div>
          </div>
          <div className="rf-benefits-card-text py-4 px-9 md:flex-1">
            <h3 className="rf-benefits-title font-medium text-3xl lg:text-5xl lg:pt-24 lg:pl-24 py-4">
              SATISFACTON GUARANTEED
            </h3>
            <p className="rf-benefits-desccription font-light text-2xl lg:text-2xl lg:pl-24 lg:pr-36">
              We strive to save you both time and money by combining roofing
              knowledge, the highest quality parts and equipment, and dedication
              to delivering exceptional service. We will not leave the job until
              it is finished and you are satisfied with the results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
