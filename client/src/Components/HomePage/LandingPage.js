import "./HomePage.css";
import landingImage from "./landingImage.png";

function LandingPage() {
	return (
		<div>
			<img className="landingimg" src={landingImage} alt="landing page" />
			<div className="team">10x Team 04</div>
			<button onClick={() => console.log("clicked")}>Enter</button>
		</div>
	);
}

export default LandingPage;
