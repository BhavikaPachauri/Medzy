import { useRef } from "react";

import PartnerEnquiryForm from "./components/PartnerEnquiryForm";
import PartnerHero from "./components/PartnerHero";


import PartnersSection from "./components/PartnersSection";
import PartnerCta from "./components/PartnerCta";

export default function PartnersPage() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className="partner-page min-h-screen font-['Sora',sans-serif]">
     
      <PartnerHero formRef={formRef} />
      <PartnersSection formRef={formRef} />
      
      <PartnerEnquiryForm formRef={formRef} />
      <PartnerCta/>
      
    </div>
  );
}
