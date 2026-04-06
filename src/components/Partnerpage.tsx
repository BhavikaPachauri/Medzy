import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import PartnersPage from '../Pages/Partner/Partnerspage'
import { Helmet } from 'react-helmet'

function Partnerpage() {
  return (
    <>
      <Helmet>
        <title>Partner with Medzy Healthcare | Pharma Distribution Network</title>
        <meta
          name="description"
          content="Join Medzy Healthcare Pvt Ltd’s growing pharmaceutical distribution network and collaborate with a trusted partner serving hospitals, clinics, and pharmacies across India."
        />
      </Helmet>
      <Navbar />
      <PartnersPage />
      <Footer />
    </>
  )
}

export default Partnerpage