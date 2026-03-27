import { useState } from 'react'
import Dealerbtn from './Dealerbtn'

function Navbar() {
      const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
     <nav className="sticky top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-white/10 shadow-sm">
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src='./img/MedzyLogo.webp'
                width={180}
                height={180}
               alt='Cohos Logo'
              />
          </div>

       
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-[#8C8C8C] text-[#00a9ae] active:text-[#00a9ae] font-body font-medium transition-colors">
              Home
            </a>           
            <a href="/about" className="text-[#8C8C8C] hover:text-[#00a9ae] font-body font-medium transition-colors">
              About Us
            </a>
            <a href="/services" className="text-[#8C8C8C] hover:text-[#00a9ae] font-body font-medium transition-colors">
              Services
            </a>
            <a href="/partners" className="text-[#8C8C8C] hover:text-[#00a9ae] font-body font-medium transition-colors">
              Partners
            </a>
            <a href="/contact" className="text-[#8C8C8C] hover:text-[#00a9ae] font-body font-medium transition-colors">
              Contact Us
            </a>
          </div>

          <div className="hidden md:block">
            <Dealerbtn/>
          </div>

          <div className=" flex md:hidden">
              <button className="w-40 mt-1 bg-[#00a9ae] text-white py-1 rounded-full font-sm hover:bg-blue-800 transition-all shadow-md flex items-center justify-between ">
              <p className='ps-3 font-body'>Become a dealer</p>
              <img src='./img/MedzyLogo.webp'
               width={30}
               height={30}
               alt='Become our Dealer'
              />
              
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#00a9ae] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
            
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#00a9ae] backdrop-blur-md border-t border-white/20">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <a href="/" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#00a9ae] rounded-md font-medium transition-colors">
              Home
            </a>
           
            <a href="/about" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#00a9ae] rounded-md font-body font-medium transition-colors">
              About Us
            </a>
            <a href="/services" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#00a9ae] rounded-md font-body font-medium transition-colors">
              Services
            </a>
            <a href="/partners" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#00a9ae] rounded-md font-body font-medium transition-colors">
              Partners
            </a>
           <a href="/contact" className="block px-3 py-2 text-white hover:bg-white/10 hover:text-[#00a9ae] rounded-md font-body font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
    </>
  )
}

export default Navbar