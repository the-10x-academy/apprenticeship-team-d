import "./HomePage.css";
import landingImage from "./landingImage.png";

function LandingPage(props) {
	return (
		<div>
			<img className="landingimg" src={landingImage} alt="landing page" />
			<div className="team">10x Team 04</div>
			<button
				onClick={() => {
					props.callUserPosts(false);
				}}
			>
				Enter
			</button>
		</div>
	);
}

export default LandingPage;
