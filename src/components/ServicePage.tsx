

import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import SEO from '../common/SEO'
import MedzyServicesPage from '../Pages/Service/Medzyservicespage'

function ServicePage() {
  return (
    <>
      <SEO
        title="Pharma Distribution Services | Medzy Healthcare India"
        description="Explore Medzy Healthcare services including medicine distribution, supply chain management, and healthcare logistics solutions across India."
        keywords="pharma services India, medicine distribution services, supply chain pharma, healthcare logistics"
      />

      <Navbar />
      <MedzyServicesPage />
      <Footer />
    </>
  )
}

export default ServicePage