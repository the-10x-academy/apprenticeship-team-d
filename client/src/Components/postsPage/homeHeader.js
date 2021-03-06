import React from "react";
import "./header.css";
import icon from "./icon.png";
import camera from "./camera.png";

export default function Header(props) {
	return (
		<div id="backTopHeader1">
			<div>
				<div className="logoHead">
					<img className="outer-div" src={icon} alt="l.." />
					<p className="text1">Instaclone</p>
				</div>
				<div className="cam-outer">
					{/* //url of page to be opened */}
					<div
						onClick={() => {
							props.callUploadpage(false);
						}}
						className="cam-mid"
					>
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
