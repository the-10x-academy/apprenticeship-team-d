import React, { useState, useEffect } from "react";
import "./postImage.css";
import Details from "./details";
import Header from "./homeHeader";
import Upload from "../upload/uploadPost";
import DateFormat from "./dateformat";

// Calling details of post
function PostImage(props) {
	const [uploadPage, callUploadpage] = useState(true);

	const [postDetails, getPostDetails] = useState([]); //setting state of postDetails after getting from server

	//functin for fetching data from server
	async function callAPI() {
		const res = await fetch("http://localhost:9000/postobjs");
		res.json().then((res) => getPostDetails(res));
	}
	useEffect(() => {
		callAPI();
		console.log("called");
	}, [postDetails]);

	function Arrayencode(buffer) {
		var binary = "";
		var bytes = [].slice.call(new Uint8Array(buffer));
		bytes.forEach((b) => (binary += String.fromCharCode(b)));
		return window.btoa(binary);
	}
	let PostDetails1 = [...postDetails];
	return uploadPage ? (
		<div>
			<Header callUploadpage={callUploadpage} />

			{PostDetails1.reverse().map((item) => (
				<Details
					Name={item.name}
					key={item.id}
					place={item.place}
					heading={item.desc}
					image={`data:image/;base64,
					${Arrayencode(item.img.data.data).toString("base64")}`}
					likes="10"
					date={DateFormat(item.date)}
				/>
			))}

			{/* calling the dummy data */}
			<Details
				Name="Siva"
				place="Bangalore"
				image="https://i.ytimg.com/vi/Vxz08sqjABg/maxresdefault.jpg"
				date="30 Jan 2021"
				likes="64"
				heading="Kick start your career"
			/>
			<Details
				Name="Saikiran"
				place="Addanki"
				image="http://www.pc-os.org/wp-content/uploads/2018/05/How-to-Use-Your-Coding-Skills-to-Launch-Your-Career-e1526982225698.jpg"
				date="31 Jan 2021"
				likes="100"
				heading="Yeah started my career"
			/>
		</div>
	) : (
		<Upload />
	);
}

export default PostImage;
