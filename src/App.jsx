import { lazy, Suspense } from 'react'

import Navbar from './Components/navbar'
import Hero from './sections/Hero/Hero'

const Dossier = lazy(() => import('./sections/Dossier/Dossier'))
const Projects = lazy(() => import('./sections/Projects/Projects'))
const Contact = lazy(() => import('./sections/Contact/Contact'))
const Footer = lazy(() => import('./Components/footer'))

function App() {
  return (
    <div className="relative min-h-screen bg-dark-bg text-white selection:bg-primary/20">
      <Navbar />
      <Hero />
      
      <Suspense fallback={
        <div className="w-full h-32 flex items-center justify-center font-mono text-xs text-primary/60 tracking-widest">
          // LOADING_MODULES...
        </div>
      }>
        <Dossier />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  )
}

export default App