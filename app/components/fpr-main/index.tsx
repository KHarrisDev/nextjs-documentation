import RoofingInsight from "./fpr-main__carousel-sm";
import RoofingBenefits from "./fpr-main__benefits";
import RoofingServices from "./fpr-main__roof-services";
import RoofingServicesOther from "./fpr-main__other-services";
import RoofingCarouselLrg from "./fpr-main__carousel-lg";

export default function Main() {
  return (
    <section className="fpr-landing__main text-neutral-n00 bg-neutral-n07">
      <RoofingInsight />
      <RoofingBenefits />
      <RoofingServices />
      <RoofingServicesOther />
      <RoofingCarouselLrg />
    </section>
  );
}
