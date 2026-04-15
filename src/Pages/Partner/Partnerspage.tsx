import { Suspense, lazy, useRef } from "react";
import PartnerHero from "./components/PartnerHero";

const PartnersSection = lazy(() => import("./components/PartnersSection"));
const PartnerEnquiryForm = lazy(() => import("./components/PartnerEnquiryForm"));
const PartnerCta = lazy(() => import("./components/PartnerCta"));

export default function PartnersPage() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="partner-page min-h-screen font-['Sora',sans-serif]">
     
      <PartnerHero formRef={formRef} />
      <Suspense fallback={null}>
        <PartnersSection formRef={formRef} />
        <PartnerEnquiryForm formRef={formRef} />
        <PartnerCta/>
      </Suspense>
      
    </div>
  );
}
