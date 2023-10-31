import Image from "next/image";
import HeroImage from "../../../../public/main/fr-hero__main.png";
export default function HeaderImg() {
  return (
    <div className="absolute inset-0">
      <Image src={HeroImage} alt="Fieldpoint Roofing" />
    </div>
  );
}
// !THIS IS NOT IN THE FLOW OF PAGE
