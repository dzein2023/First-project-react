import "./Footer.css"
import logo2 from "../imges/green-city-logo-2.png"

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
        <img src={logo2} alt="logo" />
        </div>

        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-youtube-square"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>Projects</h4>
          <a href="/">Planting our roofs</a>
          <a href="/">Discover the nature of Jerusalem</a>
          <a href="/">Courses</a>
          <a href="/">Workshops</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Fecebook</a>
          <a href="/">Twitter</a>
          <a href="/">LinkedIn</a>
          <a href="/">Instagram</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Volunteering</a>
          <a href="/">Training</a>
          <a href="/">Cooperation</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="/">Email: greencity@gmail.com</a>
          <a href="/">phone: +927 054 4268229</a>
          <a href="/">whatsapp</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;