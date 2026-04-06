import Navbar from '../common/Navbar'
import Footer from '../common/Footer'
import Contact from '../Pages/Contact/Contact'
import { Helmet } from 'react-helmet'

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Medzy Healthcare Pvt Ltd | Pharma Distributor India</title>
        <meta
          name="description"
          content="Get in touch with Medzy Healthcare Pvt Ltd for pharmaceutical distribution and healthcare logistics solutions across India. We ensure reliable and timely delivery of medicines."
        />
      </Helmet>
      <Navbar />
      <Contact />
      <Footer />
    </>
  )
}

export default ContactPage