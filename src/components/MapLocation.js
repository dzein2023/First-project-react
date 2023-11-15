import "./MapLocation.css"

function MapLocation () {
  return (
<div>
<h1>Our location</h1>
<div className="map-responsive">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4433.245913819167!2d35.23346572146393!3d31.
793165890294837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15032909767f73a9%3A0x6ddf9aaf726ba082!2sStation
%20J!5e1!3m2!1sar!2sil!4v1699976740038!5m2!1sar!2sil" 
width="600" height="450" 
allowfullScreen 
loading="lazy" 
referrerpolicy="no-referrer-when-downgrade" title="Responsive Google Map" ></iframe>
</div>
</div>
  )
}

export default MapLocation;