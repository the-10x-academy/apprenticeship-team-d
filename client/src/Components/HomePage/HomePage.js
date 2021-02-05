import logo from "../../logo.svg";
import "./HomePage.css";
import LandingPage from "./LandingPage";
import PostImage from "../postsPage/postImage";
import { useState, useEffect } from "react";

// Calling homepage and landing page
function HomePage(props) {
	const [postsPage, getPostsPage] = useState(true); //getting homePage on clicking enter on landingPage

	return postsPage ? (
		<LandingPage callUserPosts={getPostsPage} />
	) : (
		<PostImage />
	);
}

export default HomePage;
