import React from "react";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { graphql } from "gatsby";
import Layout from "../layout";
// import UserInfo from "../components/UserInfo/UserInfo";
// import Disqus from "../components/Disqus/Disqus";
// import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";
import Card from 'react-bootstrap/Card'
import moment from 'moment'

export default class PostTemplate extends React.Component {
	render() {
		const { data, pageContext } = this.props;
		const { slug } = pageContext;
		const postNode = data.markdownRemark;
		const post = postNode.frontmatter;
		if (!post.id) {
			post.id = slug;
		}
		if (!post.category_id) {
			post.category_id = config.postDefaultCategoryID;
		}
		return (
			<Layout>
				<div>
					<HelmetProvider>
						<Helmet>
							<title>{`${post.title} | ${config.siteTitle}`}</title>
						</Helmet>
					</HelmetProvider>
					<SEO postPath={slug} postNode={postNode} postSEO />
					<Card className="single-post">
						<img src={post.cover} alt={post.title} />
						<Card.Body>
							<h1 className="single-post-title">{post.title}</h1>
							<p>Posted on: {moment(post.date).format("DD/MM/YYYY")}</p>
							<p>{post.posttype}</p>
							<Card.Text dangerouslySetInnerHTML={{ __html: postNode.html }} />
						</Card.Body>
					</Card>
					{/* <PostTags tags={post.tags} />
							<SocialLinks postPath={slug} postNode={postNode} /> */}
					{/* <UserInfo config={config} /> */}
					{/* <Disqus postNode={postNode} /> */}
				</div>
			</Layout>
		);
	}
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
		tags
		posttype
      }
      fields {
        slug
        date
      }
    }
  }
`;
