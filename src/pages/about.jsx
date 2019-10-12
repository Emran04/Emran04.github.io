import React, { Component } from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
	render() {
		return (
			<Layout>
				<div className="about-container">
					<HelmetProvider>
						<Helmet>
							<title>{`About | ${config.siteTitle}`}</title>
						</Helmet>
					</HelmetProvider>
					<About />
				</div>
			</Layout>
		);
	}
}

export default AboutPage;
