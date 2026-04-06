import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import PartnersPage from '../Pages/Partner/Partnerspage'
import SEO from '../common/SEO'



function Partnerpage() {
  return (
    <>
      <SEO
        title="Partner with Medzy | Pharma Distribution Network India"
        description="Join Medzy Healthcare as a partner and grow your pharmaceutical business with our strong distribution network across India."
        keywords="pharma partnership India, distributor partner, Medzy partner program, pharma network"
      />
      <Navbar />
      <PartnersPage />
      <Footer />
    </>
  )
}

export default Partnerpage