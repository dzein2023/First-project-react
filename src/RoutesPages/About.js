import Navbar from "../components/Navbar"
import Navigate from "../components/Navigate";
import AboutImge from "../imges/AboutImge.jpg"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs";

function About () {
  return(
    <>
    <Navbar/>
    <Navigate
    cName="navigate-about"
    mainImg={AboutImge}
    title="About Us"
    btnClass="abuShow"
    />
    <AboutUs/>
    <Footer/>
  </>
  )
  }
  
  export default About;