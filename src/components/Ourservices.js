import "./Ourservices.css"
import OurservicesData from "./OurservicesData";
import OurServices1 from "../imges/OurServices1.jpeg"
import OurServices2 from "../imges/OurServices2.jpg"
import OurServices3 from "../imges/OurServices3.jpg"

function Ourservices() {
  return(
    <div className="ourservices">
      <h1>Our services provided</h1>
      <p>You can discover what our services are in this section</p>
      <div className="servicescard">
        <OurservicesData
        image={OurServices1}
        heading= "Rooftop farming and urban agriculture"
        text= "We use agricultural methods and techniques for cultivation on the roofs of houses and on balconies of the house,
         as there is the method of hydroponics,and cultivation in agricultural ponds.
         The appropriate design is also used for each roof of the house, 
         depending on the location of the house and several other factors.
          Which is done by agreement and request from the homeowner."
        />

        <OurservicesData
        image={OurServices2}
        heading= "Making tours of natural places in the city"
        text= "We organize several tours within the Let's Discover Nature in Jerusalem project,
         which is a project within the Green City Center to promote and discover the natural places 
         present in the Jerusalem neighborhoods by participating with the community by taking pictures
          of the nature present in the Jerusalem neighborhoods."
        />

        <OurservicesData
        image={OurServices3}
        heading= "Courses and workshops"
        text= "We offer courses in designing agricultural and human systems so that they are environmentally
         sustainable and self-sufficient by simulating natural systems. This program is led by highly qualified and experienced trainers.
        The program offers alternative models of economic and social life in harmony with the limits and possibilities of the environment. 
        The course will also provide tangible tools for sustainable everyday living and home gardening.
        We also offer workshops for community members in the areas of urban agriculture, 
        and experimenting with growing plants in small agricultural beds."
        />
      </div>
    </div>
  );
}

export default Ourservices;