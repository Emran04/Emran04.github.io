import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import config from "../../data/SiteConfig";
import "./index.css";
import Header from './components/Header'
import Footer from './components/Footer'


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
		<>
			<HelmetProvider>
				<Helmet>
				<meta name="description" content={config.siteDescription} />
				<html lang="en" />
				<link href="https://fonts.googleapis.com/css?family=Montserrat|Raleway&display=swap" rel="stylesheet" />
				</Helmet>
			</HelmetProvider>
			<div className="main-menu">
				<Header />
			</div>
			<div className="container main-content mb-2">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						{children}
					</div>
				</div>
			</div>
			<Footer />
      </>
    );
  }
}
