import { Suspense, lazy } from 'react'
import Navbar from '../common/Navbar'
import Contact from '../Pages/Contact/Contact'
import SEO from '../common/SEO'

const Footer = lazy(() => import('../common/Footer'))

function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Medzy Healthcare | Pharma Distributor India"
        description="Get in touch with Medzy Healthcare for pharma distribution services, partnerships, and business inquiries across India."
        keywords="contact pharma distributor, Medzy contact, medicine supplier India, pharma inquiry"
        path="/contact-us"
      />
      <Navbar />
      <main id="main-content">
        <Contact />
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default ContactPage
