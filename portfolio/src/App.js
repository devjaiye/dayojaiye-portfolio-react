import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro_/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
import Works from "./Components/Works/Works";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer"
import {themeContext} from './Context'
import {useContext} from "react"

const App=() => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return(
     <div className="App"
    //...dark mode...
     style={{
      background : darkMode? 'black': '',
      color : darkMode? 'white': '',
   }}
     > 
       {/* place your componets here */}
       <Navbar/>
       <Intro/>
       <Services/>
       <Experience/>
       <Works/>
       <Portfolio/>
       <Testimonials/>
       <Contact/>
       <Footer/>
       </div>
  )
}

export default App