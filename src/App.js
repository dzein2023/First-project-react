
import './App.css';
import Home from './RoutesPages/Home';
import About from './RoutesPages/About';
import Services from './RoutesPages/Services';
import Contact from './RoutesPages/Contact';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Home/>}/>
        <Route path="/About" element= {<About/>}/>
        <Route path="/Services" element= {<Services/>}/>
        <Route path="/Contact" element= {<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
