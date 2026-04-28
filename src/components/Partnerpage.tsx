import { Suspense, lazy } from 'react'
import Navbar from '../common/Navbar'
import PartnersPage from '../Pages/Partner/Partnerspage'
import SEO from '../common/SEO'

const Footer = lazy(() => import('../common/Footer'))

function Partnerpage() {
  return (
    <>
      <SEO
        title="Partner with Medzy | Pharma Distribution Network India"
        description="Join Medzy Healthcare as a partner and grow your pharmaceutical business with our strong distribution network across India."
        keywords="pharma partnership India, distributor partner, Medzy partner program, pharma network"
        path="/partners"
      />
      <Navbar />
      <main id="main-content">
        <PartnersPage />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default Partnerpage
