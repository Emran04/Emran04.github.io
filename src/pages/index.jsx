import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { graphql, Link } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";

const Index = (props) => {
	const postEdges = props.data.allMarkdownRemark.edges;
	return (
		<HelmetProvider>
			<Layout>
				<div className="index-container">
					<Helmet title={config.siteTitle} />
					<SEO />
					<PostListing postEdges={postEdges} />

					<div className="show-all-container">
						<Link to={'blog'} className="read-all-btn">Read All Posts</Link>
					</div>
				</div>
			</Layout>
		</HelmetProvider>
	);
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 4
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: {regex : "\/posts/"} }
    ) {
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
`;
