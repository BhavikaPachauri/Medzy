import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import About from '../Pages/AboutUs/About'
import PurposeValues from '../Pages/AboutUs/Purposevalues'
import MedzySlides from '../Pages/AboutUs/Medzyslides'

import SEO from '../common/SEO'


function AboutPage() {
  return (
    <>

      <SEO
        title="About Medzy Healthcare Pvt Ltd | Pharma Distribution Company"
        description="Learn about Medzy Healthcare, a trusted pharma distributor connecting manufacturers with hospitals, clinics, and pharmacies across India."
        keywords="about Medzy, pharma company India, medicine distribution company, healthcare logistics"
      />

      <Navbar />
      <About />
      <PurposeValues />
      <MedzySlides />
      <Footer />
    </>
  )
}

export default AboutPage