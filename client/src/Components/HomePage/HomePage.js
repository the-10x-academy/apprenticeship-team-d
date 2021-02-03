import logo from "../../logo.svg";
import "./HomePage.css";
import LandingPage from "./LandingPage";
import PostImage from "../postsPage/postImage";
import { useState, useEffect } from "react";

// Calling homepage and landing page
function HomePage(props) {
	const [postsPage, getPostsPage] = useState(true); //getting homePage on clicking enter on landingPage

	const [postDetails, getPostDetails] = useState([]); //setting state of postDetails after getting from server

	//functin for fetching data from server
	async function callAPI() {
		const res = await fetch("http://localhost:9000/posts");
		res.json().then((res) => getPostDetails(res));
	}
	useEffect(() => {
		callAPI();
		console.log("called");
	}, []);

	return postsPage ? (
		<LandingPage callUserPosts={getPostsPage} />
	) : (
		<PostImage />
	);
}

export default HomePage;
