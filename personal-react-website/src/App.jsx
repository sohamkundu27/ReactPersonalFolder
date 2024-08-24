import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "./Head.jsx"
import AboutMe from "./AboutMe.jsx";
import Brand from "./Brand.jsx";
import Experience from "./Experience.jsx";
import Skills from "./Skills.jsx";
import Portfolio from "./Portfolio.jsx";
import Contact from "./Contact.jsx";

function App() {

  return (
    <div className='maincontainer'>
      <Brand/>
      <Head/>
      <AboutMe/>
      <Experience/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
