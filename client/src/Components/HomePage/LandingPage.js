import "./HomePage.css";
import landingImage from "./landingImage.png";

// This function is for landing page
function LandingPage(props) {
	return (
		<div>
			<img className="landingimg" src={landingImage} alt="landing page" />
			<div className="teamText">10x Team 04</div>			
			<button
			// On clicking this goes to homepage displaying posts
				className="enterButton"
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
