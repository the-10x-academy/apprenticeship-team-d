import React from "react";
import "./uploadPoststyle.css";
import Axios from "axios";
import Header from "../postsPage/homeHeader";
class Upload extends React.Component {
	constructor() {
		super();
		this.state = {
			name: "",
			location: "",
			message: "",
			imagepath: "",
			likes: 0,
			filename: "No file choosen",
		};
	}
	fileSelect = (e) => {
		this.setState({
			imagepath: e.target.files[0],
		});
		this.setState({ filename: e.target.files[0].name });
		console.log(e.target.files[0]);
	};
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
	createpost = (e) => {
		e.preventDefault();
		const newpost = new FormData();
		newpost.append("name", this.state.name);
		newpost.append("location", this.state.location);
		newpost.append("message", this.state.message);
		newpost.append("imagepath", this.state.imagepath);
		newpost.append("likes", this.state.likes);
		console.log(newpost);
		Axios.post("localhost:9000", newpost)
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};
	render() {
		console.log(this.state.post);
		return (
			<div>
				<Header />
				<form action="#">
					<div className="uploadParent">
						<div className="uploadBox">
							<div className="uploadImg">
								<input
									placeholder={this.state.filename}
									className="uploadImage"
								></input>
								<label className="uploadButton">
									<input
										type="file"
										className="uploadInp"
										onChange={this.fileSelect}
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
								<button
									onClick={this.createpost}
									className={
										this.state.name !== "" &&
										this.state.location !== "" &&
										this.state.message !== "" &&
										this.state.imagepath !== ""
											? "uploadcolorbutton"
											: "uploadpostB"
									}
								>
									Post
								</button>
							</div>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default Upload;
