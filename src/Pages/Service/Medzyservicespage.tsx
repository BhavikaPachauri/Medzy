
import { Suspense, lazy } from "react";

import ServiceHero from "./components/ServiceHero";

const Delhivery = lazy(() => import("../../common/Delhivery"));
const Ticker = lazy(() => import("../../components/Ticker"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const ValueAddedSection = lazy(() => import("./components/ValueAddedSection"));

export default function MedzyServicesPage() {
  return (
    <div className="service-page overflow-x-hidden bg-[#f8fffe] text-[#1a3330] font-['Outfit',sans-serif]">
      <Suspense fallback={null}>
        <Delhivery/>
      </Suspense>
      <ServiceHero />
      <Suspense fallback={null}>
        <Ticker/>
        <ServicesSection />
        <ValueAddedSection />
      </Suspense>
      {/* <ServiceCta /> */}
    </div>
  );
}
