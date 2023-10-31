import Navigation from "../../components/header/navigation/index";
import Footer from "../../components/footer/index";
export default function Financing() {
  return (
    <div className="flex flex-col">
      <div className="absolute inset-0">
        <Navigation />
      </div>

      <div className="lg:flex lg:flex-row lg:h-[650px]">
        <div className="lg:flex lg:flex-row lg:flex-1">
          <div className="lg:w-1/6 bg-primary"></div>
          <div className="lg:flex lg:flex-col justify-center financing lg:w-4/6 bg-primary text-neutral">
            <p className="text-3xl">Financing Through Synchrony Bank</p> <br />
            Your roof is essential for protecting your home from the elements,
            preserving its structural integrity, preventing costly water damage
            and saving energy. Ignoring roof issues can lead to more extensive
            and expensive repairs down the road, making timely repairs crucial.
            Financing allows you to address roofing problems promptly,
            minimizing the risk of further damage and escalating costs.
            Financing your roof repairs allows you to safeguard your home,
            minimizes long-term expenses, offers financial flexibility, and
            enhances your property value. It is a strategic way to ensure your
            family comfort and protect your most significant asset, your home.
          </div>
          <div className="w-1/6 bg-primary"></div>
        </div>
        <div className="flex-1 bg-neutral-n07"></div>
      </div>
      <Footer />
    </div>
  );
}
