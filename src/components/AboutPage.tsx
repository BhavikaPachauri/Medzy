import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import About from '../Pages/AboutUs/About'
import PurposeValues from '../Pages/AboutUs/Purposevalues'
import MedzySlides from '../Pages/AboutUs/Medzyslides'
import { Helmet } from 'react-helmet'

function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Medzy Healthcare Pvt Ltd | Pharma Distribution Company</title>
        <meta
          name="description"
          content="Medzy Healthcare Pvt Ltd is a trusted pharmaceutical distribution company with a customer-centric approach, delivering quality medicines to hospitals, clinics, and pharmacies across India."
        />
      </Helmet>
      <Navbar />
      <About />
      <PurposeValues />
      <MedzySlides />
      <Footer />
    </>
  )
}

export default AboutPage