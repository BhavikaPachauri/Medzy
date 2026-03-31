import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import ContactPage from '../components/ContactPage'
import ServicePage from '../components/ServicePage'
import Partnerpage from '../components/Partnerpage'

function MainRoute() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutus' element={<AboutPage />} />
        <Route path='/contactus' element={<ContactPage />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path='/partners' element={<Partnerpage />} />
        
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default MainRoute