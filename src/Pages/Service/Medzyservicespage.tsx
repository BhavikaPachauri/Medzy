

import Delhivery from "../../common/Delhivery";
import Ticker from "../../components/Ticker";
import ServiceHero from "./components/ServiceHero";
import ServicesSection from "./components/ServicesSection";
import ValueAddedSection from "./components/ValueAddedSection";

export default function MedzyServicesPage() {
  return (
    <div className="service-page overflow-x-hidden bg-[#f8fffe] text-[#1a3330] font-['Outfit',sans-serif]">
        <Delhivery/>
      <ServiceHero />
      <Ticker/>
      <ServicesSection />

      <ValueAddedSection />
      {/* <ServiceCta /> */}
    </div>
  );
}
