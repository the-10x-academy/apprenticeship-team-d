import logo from "../../logo.svg";
import "./HomePage.css";
import LandingPage from "./LandingPage";
import PostImage from "../postsPage/postImage";
import { useState, useEffect } from "react";
function HomePage(props) {
	const [userPosts, callUserPosts] = useState(true);
	return userPosts ? (
		<LandingPage callUserPosts={callUserPosts} />
	) : (
		<PostImage />
	);
}

export default HomePage;
