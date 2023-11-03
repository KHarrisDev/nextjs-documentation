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

      <div className="relative flex flex-col md:flex-row md:gap-20 lg:gap-20 lg:mb-44 lg:mt-10 justify-center items-center">
        <HeroHeading />
        <HeroForm />
      </div>
    </div>
  );
}
