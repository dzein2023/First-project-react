import Navbar from "../components/Navbar";
import Navigate from "../components/Navigate";
import ServicesImge from "../imges/ServicesImge.jpg";
import Footer from "../components/Footer";
import Ourservices from "../components/Ourservices";

function Services () {
  return (
    <>
      <Navbar/>
    <Navigate
    cName="navigate-about"
    mainImg={ServicesImge}
    title="Services"
    btnClass="abuShow"
    />
    <Ourservices />
    <Footer /> 
    </>
  )
  }
  
  export default Services;