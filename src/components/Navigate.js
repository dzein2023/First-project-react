import "./Navigate.css"

function Navigate (props) {
  return( 
    <div className={props.cName}>
      <img alt="MainImg"  src={props.mainImg}/>
      <div className="main-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
            <a href={props.url} className={props.btnClass}>
              {props.buttonText}
            </a>
      </div>
    </div>
  );
  }
  
  export default Navigate;