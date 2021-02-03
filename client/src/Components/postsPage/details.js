import "./postImage.css";
import heart from "./heart.png";
import share from "./share.png";

// For post details
function Details(props) {
  return (
    <div className="boxdiv">  
      <h1>{props.Name}</h1>
      <h2>{props.place}</h2>
      <span className="dot1" />
      <span className="dot2" />
      <span className="dot3" />

      <img className="postimg" src={props.image} alt="loading" />
      <img className="likebut" src={heart} alt="like" />
      <img className="sharebut" src={share} alt="share" />
      <p className="date">{props.date}</p>
      <p className="likes">{props.likes} likes</p>
      <p className="headtag">{props.heading}</p>
    </div>
  );
}
export default Details;
