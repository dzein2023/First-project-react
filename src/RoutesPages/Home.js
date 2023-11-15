import Destination from "../components/Destination";
import Navbar from "../components/Navbar"
import Navigate from "../components/Navigate";
import Ourservices from "../components/Ourservices";
import BackgroundHome from "../imges/BackgroundHome.jpg"
import Footer from "../components/Footer";

function Home () {
return(
  <>
    <Navbar/>
    <Navigate
    cName="navigate"
    mainImg={BackgroundHome}
    title="Welcome to the Green City community" 
    text="The Green City community is a group of individuals who work hard and seek positive change to make the city 
    of Jerusalem a green and more beautiful city by providing a number of services in the city.
    You can learn about these services by clicking the button below"
    buttonText="Click Here"
    url="/Services"
    btnClass="show"
    />
    <Destination/>
    <Ourservices/>
    <Footer/>  
  </>
);
}

export default Home;