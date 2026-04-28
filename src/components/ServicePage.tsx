
import { Suspense, lazy } from 'react'

import Navbar from '../common/Navbar'
import SEO from '../common/SEO'
import MedzyServicesPage from '../Pages/Service/Medzyservicespage'

const Footer = lazy(() => import('../common/Footer'))

function ServicePage() {
  return (
    <>
      <SEO
        title="Pharma Distribution Services | Medzy Healthcare India"
        description="Explore Medzy Healthcare services including medicine distribution, supply chain management, and healthcare logistics solutions across India."
        keywords="pharma services India, medicine distribution services, supply chain pharma, healthcare logistics"
        path="/services"
      />

      <Navbar />
      <main id="main-content">
        <MedzyServicesPage />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default ServicePage
