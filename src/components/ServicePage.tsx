import { Helmet } from 'react-helmet'
import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import MedzyServicesPage from '../Pages/Service/Medzyservicespage'

function ServicePage() {
  return (
    <>
      <Helmet>
        <title>Pharmaceutical Distribution Services | Medzy Healthcare</title>
        <meta
          name="description"
          content="Medzy Healthcare offers advanced pharmaceutical distribution and healthcare logistics services, ensuring timely delivery of quality medicines to hospitals, pharmacies, and healthcare providers."
        />
      </Helmet>
      <Navbar />
      <MedzyServicesPage />
      <Footer />
    </>
  )
}

export default ServicePage