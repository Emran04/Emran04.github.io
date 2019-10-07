import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import config from "../../data/SiteConfig";
import "./index.css";
import Header from './components/Header'


export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
		<HelmetProvider>
			<Helmet>
			<meta name="description" content={config.siteDescription} />
			<html lang="en" />
			</Helmet>
		</HelmetProvider>
		<Header />
        {children}
      </div>
    );
  }
}
