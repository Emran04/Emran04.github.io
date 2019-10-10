import React from "react";
import { Link } from "gatsby";
import Card from 'react-bootstrap/Card'
import './PostListing.css'
import moment from 'moment'

const PostListing = (props) => {
	const getPostList = () => {
		const postList = [];
		props.postEdges.forEach(postEdge => {
			postList.push({
				path: postEdge.node.fields.slug,
				tags: postEdge.node.frontmatter.tags,
				cover: postEdge.node.frontmatter.cover,
				title: postEdge.node.frontmatter.title,
				date: postEdge.node.fields.date,
				excerpt: postEdge.node.excerpt,
				timeToRead: postEdge.node.timeToRead
			});
		});
		return postList;
	}

	const postList = getPostList();
	return (
		<>
			{
				postList.map(post => (
					<Card key={post.title} className="post">
						<Card.Body>
							<h3 className="post-title">
								<Link to={post.path} className="post-link">
									{post.title}
								</Link>
							</h3>
							<p>Posted on: {moment(post.date).format("DD/MM/YYYY")}</p>
							<Card.Text>
								{post.excerpt}

							</Card.Text>
							<Link to={post.path}>
								Read →
							</Link>
						</Card.Body>
					</Card>

				))
			}
		</>
	);
}

export default PostListing;
