import React, { useState } from "react";
import "./postImage.css";
import Details from "./details";
import Header from "./homeHeader";
import Upload from "../upload/uploadPost";
// Calling details of post
function PostImage(props) {
	const [uploadPage, callUploadpage] = useState(true);
	return uploadPage ? (
		<div>
			<Header callUploadpage={callUploadpage} />
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
