
import { ArrowUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

function BackToTop() {
  const [backToTop, setBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      
      setBackToTop(scrollTop > 300)
      setScrollProgress(progress)
    }
    
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full transition-all duration-500 ease-out z-50 group ${
        backToTop ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-50 pointer-events-none'
      }`}
      aria-label="Back to top"
      style={{
        background: 'linear-gradient(135deg, #35ffe7 0%, #3bd9bc 50%, #4dffbb 100%)',
        boxShadow: '0 10px 40px rgba(53, 255, 215, 0.5), 0 0 20px rgba(66, 255, 249, 0.3)'
      }}
    >
      {/* Animated progress ring */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="3"
        />
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeDasharray={`${2 * Math.PI * 28}`}
          strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500 group-hover:scale-150" />
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-white" style={{ animationDuration: '2s' }} />
      
      {/* Icon container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <ArrowUp 
          size={16} 
          className="text-white transition-all duration-300  drop-shadow-lg" 
          strokeWidth={2.5}
        />
      </div>

     
    </button>
  )
}

export default BackToTop