import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

/**
 * Main App component - Portfolio website layout
 * Renders all sections in order: Header, Hero, About, Skills, Projects, Awards, Contact, Footer
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

