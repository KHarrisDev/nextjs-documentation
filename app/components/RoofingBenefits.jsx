import Image from "next/image";
import Picture from "../../public/rc-benefits-img.jpg";

export default function RoofingBenefits() {
  return (
    <section>
      <div className="container">
        <div className="rf-benefits-card">
          <div className="rf-benefits-card-img">
            <Image
              src={Picture}
              className="rf-benefits-img"
              alt="A picture of a roof."
              width={960}
              height={600}
            />
          </div>
          <div className="rf-benefits-card-text">
            <h3 className="rf-benefits-title">ROOF REPLACEMENT</h3>
            <p className="rf-benefits-desccription">
              As specialists in residential and commercial roofing services, we
              are dedicated to providing customer service that is second to
              none. Whether you have a new construction project or it is time
              for repairs, we offer the roofing services you need.
            </p>
          </div>
        </div>
        <div className="rf-benefits-card">
          <div className="rf-benefits-card-img">
            <Image
              src={Picture}
              className="rf-benefits-img"
              alt="A picture of a roof."
              width={960}
              height={600}
            />
          </div>
          <div className="rf-benefits-card-text">
            <h3 className="rf-benefits-title">CUSTOMIZED TO YOUR NEEDS</h3>
            <p className="rf-benefits-desccription">
              We provide a full consultation to explain your available options
              so that you can choose the roofing plan that is right for your
              home or business. We will work with you and adhere to your
              personal needs, and then we will be in contact through the whole
              project.
            </p>
          </div>
        </div>
        <div className="rf-benefits-card">
          <div className="rf-benefits-card-img">
            <Image
              src={Picture}
              className="rf-benefits-img"
              alt="A picture of a roof."
              width={960}
              height={600}
            />
          </div>
          <div className="rf-benefits-card-text">
            <h3 className="rf-benefits-title">SATISFACTON GUARANTEED</h3>
            <p className="rf-benefits-desccription">
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
