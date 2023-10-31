import Image from "next/image";
import Picture from "../../public/rc-services-others-img.jpg";

export default function RoofingServicesOther() {
  return (
    <section>
      <div className="rf-services-other-header">
        <h3>Roofing Services</h3>
      </div>
      <div>
        <div className="rf-services-other-card">
          <h4 className="rf-services-other-title">Siding</h4>
          <Image
            src={Picture}
            alt="Picture of the author"
            className="rf-services-other-img"
            width={342}
            height={242}
          />
          <p className="rf-services-other-description">
            Siding is essential for a house as it not only protects the
            structure from the elements but also significantly contributes to
            its aesthetic appeal, defining its overall appearance and curb
            appeal.
          </p>
        </div>
        <div className="rf-services-other-card">
          <h4 className="rf-services-other-title">Decks</h4>
          <Image
            src={Picture}
            alt="Picture of the author"
            className="rf-services-other-img"
            width={342}
            height={242}
          />
          <p className="rf-services-other-description">
            We can design a unique deck layout, selecting appropriate materials,
            obtaining necessary permits, and following construction guidelines
            to create a personalized outdoor living space.
          </p>
        </div>
        <div className="rf-services-other-card">
          <h4 className="rf-services-other-title">Baths</h4>
          <Image
            src={Picture}
            alt="Picture of the author"
            className="rf-services-other-img"
            width={342}
            height={242}
          />
          <p className="rf-services-other-description">
            When replacing your old bathroom, you will typically start by
            designing the layout, choosing new fixtures, tiles, and materials,
            and then proceed with demolition, plumbing and electrical work, and
            installation to achieve a modern and updated restroom.
          </p>
        </div>
        <div className="rf-services-other-card">
          <h4 className="rf-services-other-title">Flooring</h4>
          <Image
            src={Picture}
            alt="Picture of the author"
            className="rf-services-other-img"
            width={342}
            height={242}
          />
          <p className="rf-services-other-description">
            Choosing new flooring, whether it is hardwood, tile, or luxury vinyl
            plank (LVP), can dramatically transform your space while offering
            different aesthetics, durability, and maintenance requirements to
            suit your needs and style preferences.
          </p>
        </div>
      </div>
    </section>
  );
}
