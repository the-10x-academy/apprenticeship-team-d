import React, { useRef } from "react";
import Header from "../postsPage/homeHeader";
import "./uploadPoststyle.css";
class Upload extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			location: "",
			message: "",
		};
	}
	handleName = (e) => {
		this.setState({
			name: e.target.value,
		});
	};
	handleLoc = (e) => {
		this.setState({
			location: e.target.value,
		});
	};
	handleMessage = (e) => {
		this.setState({
			message: e.target.value,
		});
	};
	render() {
		return (
			<div className="uploadParent">
				<Header />
				<div className="uploadBox">
					<div className="uploadImg">
						<input
							placeholder="No file choosen"
							className="uploadImage"
						></input>
						<label className="uploadButton">
							<input
								type="file"
								id="file"
								ref="fileUploader"
								className="uploadInp"
							/>
							Browse
						</label>
					</div>
					<div className="uploadAut">
						<input
							onChange={this.handleName}
							className="uploadA"
							placeholder="Author"
						></input>
						<input
							onChange={this.handleLoc}
							className="uploadLoc"
							placeholder="Location"
						></input>
					</div>
					<div className="uploadMessage">
						<input
							onChange={this.handleMessage}
							className="uploadM"
							placeholder="Description"
						></input>
					</div>
					<div className="uploadPost">
						<button className="uploadpostB">Post</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Upload;
