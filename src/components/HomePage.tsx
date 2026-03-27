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