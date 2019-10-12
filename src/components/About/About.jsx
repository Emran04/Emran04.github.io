import React, { Component } from "react";
import "./About.css";

class About extends Component {
	render() {
		return (
			<div className="about-container" style={{ marginTop: '15px' }}>
				<div className="card">
					<div className="row">
						<div className="col-12 col-sm-6">
							<img src={'/img/pp.jpg'} className="img-fluid" alt="Logo" />
						</div>
						<div className="col-12 col-sm-6 p-4">
							<p>Hi, I am Emran, I am a software engineer and I grew up in Chittagong. I graduated with Computer and Communication Engineering from International Islamic University Chittagong.</p>
							<p>I build and deliver quality software that helps business succeed. I am consultant, programmer, team lead.</p>
							{/* <p>I am currently working as CEO and Co-Founder at GreenTwigs Software service.</p>
							<p>I love to working with new technologies. Currently I am working Laravel for creating API or web service, ReactJS for consume API. For deployment I use Digitalocean and aws.</p> */}
							{/* <p>Get In Touch
        Email me: emran04ch@gmail.com</p> */}
						</div>
					</div>
				</div>

				<div className="card text-white text-center mb-3 mt-3">
					<div className="card-body">
						<div className="cta-mail">Email me: <a href="mailto:emran04ch@gmail.com" className="mail-link">emran04ch@gmail.com</a></div>
					</div>
				</div>

				<div className="card mb-3 mt-3">
					<div className="card-body">
						<h3 className="text-center">Professional History</h3>
						<p>I started working as a programmer after my graduation has completed. I have worked for Ringer soft a software company from 2017 to 2018.</p>
						<p>I have worked on software in the sectors like Fright Forwarding, Education system, POS, Didital Attendance system, E-commerce, Event management system.</p>
						<h3 className="text-center">Technology I use</h3>
						<h4>Front end</h4>
						<ul>
							<li>ReactJS</li>
							<li>JQuery</li>
						</ul>
						<h4>Backend</h4>
						<ul>
							<li>PHP</li>
							<li>Laravel</li>
						</ul>
						<h4>Database</h4>
						<ul>
							<li>MySql</li>
						</ul>
						<h4>Server</h4>
						<ul>
							<li>Linux</li>
							<li>Apache</li>
						</ul>
						<h4>Tools</h4>
						<ul>
							<li>Git</li>
							<li>Docker</li>
						</ul>
					</div>
				</div>

			</div>

		);
	}
}

export default About;
