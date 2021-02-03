import React from "react";
import "./header.css";
import icon from "./icon.png";
import camera from "./camera.png";

export default function Header() {
	return (
		<div id="backTopHeader1">
			<div>
				{/*header logo and text */}
				<div className="logoHead">
					<img className="outer-div" src={icon} alt="l.." />
					<p className="text1">Instaclone</p>
				</div>
				<div className="cam-outer">
					{/*url of upload page to be entered*/}
					<div
						onClick={() => {
							console.log("upload Page");
						}}
						className="cam-mid"
					>
						{/*camera image button opens upload page*/}
						<img className="camera" src={camera} alt="c.." />
					</div>
				</div>
			</div>
			<div className="line-cont">
				<div className="line">
					<hr />
				</div>
			</div>
		</div>
	);
}
