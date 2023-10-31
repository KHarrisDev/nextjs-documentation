import Image from "next/image";
import roofing from "../../public/background-img.jpg";

export default function Background() {
  return (
    <Image
      alt="roofing"
      src={roofing}
      placeholder="blur"
      quality={100}
      fill
      sizes="100vw"
      style={{ objectFit: "cover" }}
    />
  );
}
