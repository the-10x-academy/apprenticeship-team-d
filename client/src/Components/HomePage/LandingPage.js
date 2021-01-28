import "./HomePage.css";
import landingImage from "./landingImage.png";

function LandingPage() {
	return (
		<div>
			<img className="landingimg" src={landingImage} alt="landing page" />
			<div className="team">
				<span>10</span>x Team <span>04</span>
			</div>
			<button onClick={() => console.log("clicked")}>Enter</button>
		</div>
	);
}

export default LandingPage;
