import { Suspense, lazy } from 'react'
import Navbar from '../common/Navbar'
import About from '../Pages/AboutUs/About'
import SEO from '../common/SEO'

const PurposeValues = lazy(() => import('../Pages/AboutUs/Purposevalues'))
const MedzySlides = lazy(() => import('../Pages/AboutUs/Medzyslides'))
const Footer = lazy(() => import('../common/Footer'))

function AboutPage() {
  return (
    <>

      <SEO
        title="About Medzy Healthcare Pvt Ltd | Pharma Distribution Company"
        description="Learn about Medzy Healthcare, a trusted pharma distributor connecting manufacturers with hospitals, clinics, and pharmacies across India."
        keywords="about Medzy, pharma company India, medicine distribution company, healthcare logistics"
        path="/about-us"
      />

      <Navbar />
      <main id="main-content">
        <About />
        <Suspense fallback={null}>
          <PurposeValues />
          <MedzySlides />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default AboutPage
