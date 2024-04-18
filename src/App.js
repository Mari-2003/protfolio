import './App.css';
import { AboutUs } from './components/aboutus/AboutUs';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Projects } from './components/projects/Projects';

function App() {
  return (
   <>
   <Navbar />
   <Banner />
   <AboutUs />
   <Projects />
   <Contact />
   <Footer />
   </>
  );
}

export default App;
