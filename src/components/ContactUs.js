import "./ContactUs.css"

function ContactUs () {
  return (
<div className="contact-cont">
  <h1>How can we help you?</h1>
  <form>
    <input placeholder="Name" />
    <input placeholder="Email" />
    <input placeholder="Subject" />
    <textarea placeholder="Message" rows="6"></textarea>
    <button>Send Message</button>
  </form>
</div>
  )
}

export default ContactUs;