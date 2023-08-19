
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {

  return (
    <>
    <ToastContainer />
      <div className="relative z-0 bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
