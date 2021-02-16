import { useState } from "react";
import PostImage from "../postsPage/postImage";
import "./HomePage.css";
import LandingPage from "./LandingPage";

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
