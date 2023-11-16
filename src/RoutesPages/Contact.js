import Navbar from "../components/Navbar";
import Navigate from "../components/Navigate";
import ContactImge from "../imges/ContactImge.jpg";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import MapLocation from "../components/MapLocation";

function Contact () {
  return (
    <>
    <Navbar/>
    <Navigate
    cName="navigate-about"
    mainImg={ContactImge}
    title="Contact Us"
    btnClass="abuShow"
    />
     <ContactUs /> 
     <MapLocation />
    <Footer />
    </>
  )
  }
  
  export default Contact;