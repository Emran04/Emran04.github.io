import React, { Component } from "react";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          Edit About component or pages/about.jsx to include your information.
        </h1>
			<img src={'/img/pp.jpg'} alt="Logo" />
      </div>
    );
  }
}

export default About;
