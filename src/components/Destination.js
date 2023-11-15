import PageHome1 from "../imges/PageHome1.jpg"
import PageHome2 from "../imges/PageHome2.jpg"
import PageHome3 from "../imges/PageHome3.jpg"
import PageHome4 from "../imges/PageHome4.jpg"
import "./Destination.css"
import DestinationData from "./DestinationData";

const Destination = () =>{
  return(
  <div className="destination">
    <h1>Goals and Achievements</h1>
    <p>An overview of our goals and achievements at the centre</p>
    <DestinationData
    className="first-Des"
    heading="Objectives and main components of the center"
    text="The Green City Center is primarily a community center,
     and the basic need that this place serves is to receive people from all parts of Jerusalem. In addition,
      this place is prepared and available to the community where they can meet, discuss, learn and grow. 
      Its main components are plants, hydroponic systems, and rooftop growers. In addition to an educational space. 
      Therefore, this space can hold workshops, courses, events and exhibitions."
      img1={PageHome1}
      img2={PageHome2}
    /> 
     <DestinationData
     className="first-Des-Reverse"
    heading="Achievements and future plans"
    text="One of the center’s most important achievements is making the city more green.
     Urban agriculture projects are also considered a tool for economic empowerment and community building.
      The center also contributed to making tours for the Jerusalemite community in natural areas to learn about them 
      and raise awareness about preserving the city’s natural environment. Future projects include balcony cultivation, 
      the completion of the urban agriculture course, and a year-round course on sustainable agriculture is currently being conducted."
      img1={PageHome3}
      img2={PageHome4}
    /> 
  </div>
  
  );
};

export default Destination