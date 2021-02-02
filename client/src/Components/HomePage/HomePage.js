import logo from "../../logo.svg";
import "./HomePage.css";
import LandingPage from "./LandingPage";
import PostImage from "../postsPage/postImage";
import { useState, useEffect } from "react";
function HomePage(props) {
	const [userPosts, callUserPosts] = useState(true);

	const [customers, getCustomers] = useState([]); //setting state of customers after getting from server

	//functin for fetching data from server
	async function callAPI() {
		const res = await fetch("http://localhost:9000/posts");
		res.json().then((res) => getCustomers(res));
	}

	useEffect(() => {
		callAPI();
		console.log("called");
	}, []);

	return userPosts ? (
		<LandingPage callUserPosts={callUserPosts} />
	) : (
		<PostImage />
	);
}

export default HomePage;
