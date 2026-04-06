
import Navbar from '../common/Navbar'
import HeroCarousel from '../Pages/Home/Herosection'
import AboutUs from '../Pages/Home/About'
import Footer from '../common/Footer'
import WhyChooseMedzy from '../Pages/Home/Whychoosemedzy'
import MedzyStats from '../Pages/Home/Medzystats'
import VisionMission from '../Pages/Home/Visionmission'
import SEO from '../common/SEO'


function HomePage() {
  return (
    <>
      <SEO
        title="Medzy Healthcare | Pharma Distributor in India"
        description="Medzy Healthcare Pvt Ltd is a leading pharmaceutical distribution company delivering medicines across India with fast and reliable logistics."
        keywords="pharma distributor India, medicine supplier, pharmaceutical distribution, Medzy Healthcare"
      />
      <Navbar />
      <main>
        <HeroCarousel />
        <AboutUs />
        <VisionMission />
        <MedzyStats />
        <WhyChooseMedzy />
      </main>
      <Footer />

    </>
  )
}

export default HomePage