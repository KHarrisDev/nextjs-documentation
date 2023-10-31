import HeroHeading from "./HeroHeading";
import HeroForm from "./HeroForm";
import Navigation from "../navigation/index";

export default function HeaderContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Navigation />
      <div className="flex flex-row">
        <HeroHeading />
        <HeroForm />
      </div>
    </div>
  );
}
