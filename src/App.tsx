import Home from "./components/Home/Home.tsx"
import Background from "./components/Background/Background.tsx"
import About from "./components/About/About.tsx"
import Projects from "./components/Projects/Projects.tsx"
import Footer from "./components/Footer/Footer.tsx"

import './App.css'

function App() {
  return (
    <>
      <Background />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
