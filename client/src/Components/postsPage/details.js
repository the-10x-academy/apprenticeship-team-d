import "./postImage.css";
import heart from "./heart.png";
import share from "./share.png";

// For post details
function Details(props) {
	//sending the id of post which we liked
	const likesbutton = async (e) => {
		console.log(props.id);
		const data = new FormData();
		data.append("id", props.id);
		fetch("http://localhost:9000/" + props.id, {
			method: "POST",
			body: data,
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div className="boxdiv">
			<h1>{props.Name}</h1>
			<h2>{props.place}</h2>
			<span className="dot1" />
			<span className="dot2" />
			<span className="dot3" />

			<img className="postimg" src={props.image} alt="loading" />
			<img className="likebut" src={heart} onClick={likesbutton} alt="like" />
			<img className="sharebut" src={share} alt="share" />
			<p className="date">{props.date}</p>
			<p className="likes">{props.likes} likes</p>
			<p className="headtag">{props.heading}</p>
		</div>
	);
}
export default Details;
