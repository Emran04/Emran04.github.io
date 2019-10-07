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
			<p>Hi, I am Emran Hossen, Fullstack web developer. I build and deliver quality software that helps business succeed. I am consultant, programmer, team lead, software architect and teacher.</p>
			<p>I am currently working as CEO and Co-Founder at GreenTwigs Software service.</p>
			<p>I love to working with new technologies. Currently I am working Laravel for creating API or web service, ReactJS for consume API. For deployment I use Digitalocean and aws.</p>
			<p>Get In Touch
Email me: emran04ch@gmail.com</p>
      </div>
    );
  }
}

export default About;
