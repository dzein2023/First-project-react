import { Component } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import { MenuItems } from "./MenuItems";
import Logo from "../imges/green-city-logo.png";

class Navbar extends Component {
  state = {clicked: false};
  handleclick = () => {
   this.setState ({ clicked: !this.state.clicked})
  }
  render () {
    return (
      <nav className="NavItems">
        <img src= {Logo} alt="logo" />
        
        <div className="menu-icons" onClick=
        {this.handleclick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "Nav-menu active" : "Nav-menu "}>
          {MenuItems.map((item, index) =>{
            return (
              <li key={index}>
              <Link className= {item.cName} to={item.url}><i className={item.icon}></i> {item.title} </Link></li>
            );
          })}
        
        </ul>
      </nav>
    )
  }
}

export default Navbar;