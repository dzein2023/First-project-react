
import { Component } from "react";
import "./Destination.css"

class DestinationData extends Component {
  render(){
   return(
    <div className={this.props.className}>
      <div className="Des-text">
        <h2>{this.props.heading}</h2>
        <p>{this.props.text}</p>
      </div>
      
      <div className="imges">
        <img src={this.props.img1} alt="img" />
        <img src={this.props.img2} alt="img" />
      </div>
    </div>
  
   );
  }
}

export default DestinationData;