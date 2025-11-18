import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Lumen Studio — Product Design
      </footer>
    </div>
  )
}

export default App
