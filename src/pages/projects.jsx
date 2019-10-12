import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { graphql } from "gatsby";
import Layout from "../layout";
// import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Projects = ({ data }) => {
	// const postEdges = props.data.allMarkdownRemark.edges;
	// console.log(postEdges)
	console.log(data.allMarkdownRemark)
	return (
		<HelmetProvider>
			<Layout>
				<div className="index-container">
					<Helmet title={config.siteTitle} />
					<SEO />
					sddd
					{/* <PostListing postEdges={postEdges} /> */}
				</div>
			</Layout>
		</HelmetProvider>
	);
}

export default Projects;


/* eslint no-undef: "off" */
export const projectQuery = graphql`
query projectQuery{
  allMarkdownRemark(limit: 2000, sort: {fields: [fields___date], order: DESC}, filter: {frontmatter: {posttype: {eq: "project"}}}) {
    edges {
      node {
        fields {
          slug
          date
        }
        excerpt
        timeToRead
        frontmatter {
          title
          tags
          cover
          date
        }
      }
    }
  }
}

`