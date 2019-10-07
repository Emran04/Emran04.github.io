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
		<div className="container">
			<div className="row">
				<div className="col">
					{
						postList.map(post => (
							<Card key={post.title} className="post">
								<Card.Header>
								<Link to={post.path}>
									{post.title}
								</Link> - {moment(post.date).format("DD/MM/YYYY")}</Card.Header>
								
								<Card.Body>
									<Card.Text>
										{post.excerpt}
										
    								</Card.Text>
									<Link to={post.path} className="btn btn-primary">
										View
										</Link>
								</Card.Body>
							</Card>

						))
					}
				</div>
			</div>
		</div>
	);
}

export default PostListing;
