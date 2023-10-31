// import HeaderContent from "./header-content/index";
import HeroHeading from "./header-content/HeroHeading";
import HeroForm from "./header-content/HeroForm";
// import HeaderImg from "./header-img/index";
import Navigation from "./navigation/index";
export default function Header() {
  return (
    <div
      className="bg-cover bg-center h-full relative flex flex-col"
      style={{ backgroundImage: 'url("/main/fr-hero__main.png")' }}
    >
      <div className="absolute inset-0">
        <div className="h-3/5"></div>
        <div className="bg-gradient-to-b from-transparent to-neutral-n07 h-2/5"></div>
      </div>
      {/* stopped here */}
      <div className="container mx-auto flex flex-col justify-center">
        <Navigation />
      </div>

      <div className="relative flex flex-col sm:flex-row lg:gap-20 lg:mb-44 lg:mt-10 justify-center items-center">
        <HeroHeading />
        <HeroForm />
      </div>
    </div>
  );
  // return (
  //   <section className="relative w-full">
  //     <HeaderImg />
  //     <HeaderContent />
  //   </section>
  // );
}
{
  /* <section className="relative">
  <Image
    src={HeroImage}
    alt="Fieldpoint Roofing"
    priority={false}
    className="w-full h-full bg-cover bg-center z-0"
  />
  <div className="hero-landing-container flex justify-center item-center gap-6 z-20">
    <h1 className="hero-landing-text uppercase text-9xl">
      <span className="font-semibold">no hassle</span>
      <br />
      <span className="font-normal">roof repairs</span>
    </h1>
    <HeroForm />
  </div>
</section>; */
}
{
  /* <section className="hero-landing-section w-screen mt-12">
      <div className="hero-landing-container flex justify-center item-center gap-6">
        <h1 className="hero-landing-text uppercase text-9xl">
          <span className="font-semibold">no hassle</span>
          <br />
          <span className="font-normal">roof repairs</span>
        </h1>
        <HeroForm />
      </div>
    </section> */
}
