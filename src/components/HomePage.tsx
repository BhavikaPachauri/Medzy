
import { Suspense, lazy } from 'react'
import Navbar from '../common/Navbar'
import HeroCarousel from '../Pages/Home/Herosection'
import SEO from '../common/SEO'

const AboutUs = lazy(() => import('../Pages/Home/About'))
const VisionMission = lazy(() => import('../Pages/Home/Visionmission'))
const MedzyStats = lazy(() => import('../Pages/Home/Medzystats'))
const WhyChooseMedzy = lazy(() => import('../Pages/Home/Whychoosemedzy'))
const Footer = lazy(() => import('../common/Footer'))

function HomePage() {
  return (
    <>
      <SEO
        title="Medzy Healthcare | Pharma Distributor in India"
        description="Medzy Healthcare Pvt Ltd is a leading pharmaceutical distribution company delivering medicines across India with fast and reliable logistics."
        keywords="pharma distributor India, medicine supplier, pharmaceutical distribution, Medzy Healthcare"
        path="/"
      />
      <Navbar />
      <main id="main-content">
        <HeroCarousel />
        <Suspense fallback={null}>
          <AboutUs />
          <VisionMission />
          <MedzyStats />
          <WhyChooseMedzy />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

    </>
  )
}

export default HomePage
