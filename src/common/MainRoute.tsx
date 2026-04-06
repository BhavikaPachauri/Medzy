import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  { Suspense, lazy } from 'react'
import Loader from './Loader'

// Lazy load pages
const HomePage = lazy(() => import('../components/HomePage'))
const AboutPage = lazy(() => import('../components/AboutPage'))
const ContactPage = lazy(() => import('../components/ContactPage'))
const ServicePage = lazy(() => import('../components/ServicePage'))
const Partnerpage = lazy(() => import('../components/Partnerpage'))

function MainRoute() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path='/contactus' element={<ContactPage />} />
          <Route path='/services' element={<ServicePage />} />
          <Route path='/partners' element={<Partnerpage />} />
        
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default MainRoute