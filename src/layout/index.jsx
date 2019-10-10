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
		<div className="d-flex flex-column">
		<HelmetProvider>
			<Helmet>
			<meta name="description" content={config.siteDescription} />
			<html lang="en" />
			</Helmet>
		</HelmetProvider>
		<div className="main-menu">
			<Header />
		</div>
        <div className="main-content">
				{children}
		</div>
		<Footer />
      </div>
    );
  }
}
