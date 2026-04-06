import Helmet from 'react-helmet'
import Navbar from '../common/Navbar'
import HeroCarousel from '../Pages/Home/Herosection'
import AboutUs from '../Pages/Home/About'
import Footer from '../common/Footer'
import WhyChooseMedzy from '../Pages/Home/Whychoosemedzy'
import MedzyStats from '../Pages/Home/Medzystats'
import VisionMission from '../Pages/Home/Visionmission'

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Medzy Distributor | Pharma Distributor in India</title>
        <meta
          name="description"
          content="Medzy Healthcare Pvt Ltd is a rapidly growing pharmaceutical distribution company connecting manufacturers with healthcare providers across India through reliable and efficient logistics."
        />
      </Helmet>
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