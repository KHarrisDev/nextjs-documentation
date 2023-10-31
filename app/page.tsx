import Header from "./components/header/index";
import Main from "./components/fpr-main/index";
import Footer from "./components/footer/index";

export const metadata = {
  title: "No Hassle Roof Repair",
  description: "A blog for No Hassle Roof Repair.",
  keywords:
    "Roofing services, Roof repair, Roof installation, Roofing contractors, Roof maintenance, Residential roofing, Commercial roofing, Roof inspection, Roof replacement, Emergency roof repair",
};

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
