import React from "react";
import "./postImage.css";
import Details from "./details";
import Header from "./homeHeader";

function PostImage() {
  return (
    <div>
      <Header />
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
  );
}

export default PostImage;
