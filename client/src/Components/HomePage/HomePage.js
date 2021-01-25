import { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./HomePage.css";

function HomePage() {
	const [apiResponse, setapires] = useState("");

	function callAPI() {
		fetch("http://localhost:9000/")
			.then((res) => res.text())
			.then((res) => setapires(res));
	}

	useEffect(() => {
		callAPI();
		console.log("called");
	});

	return (
		<div className="App">
			<div dangerouslySetInnerHTML={{ __html: apiResponse }} />
		</div>
	);
}

export default HomePage;
