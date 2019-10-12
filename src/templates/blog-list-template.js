import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../layout"

const BlogList = (props) => {
	const { currentPage, numPages } = props.pageContext
	const isFirst = currentPage === 1
	const isLast = currentPage === numPages
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
	const nextPage = (currentPage + 1).toString()

	const posts = props.data.allMarkdownRemark.edges
	return (
		<Layout>
			{posts.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug
				return <div key={node.fields.slug}>{title}</div>
			})}

			<nav aria-label="Page navigation example">
				<ul className="pagination">
					{!isFirst && (
						<li className="page-item">
							<Link
								to={'/blog/' + prevPage}
								rel="prev"
								className="page-link"
							>
								<span aria-hidden="true">&laquo;</span>
							</Link>
						</li>
					)}
					{posts.length > 3 ? Array.from({ length: numPages }, (_, i) => {
						let active_cls = currentPage === (i + 1) ? 'active' : ''
						return (

							<li
								className={`page-item ${active_cls}`}
								key={`pagination-number${i + 1}`}
							>
								<Link

									to={`/blog/${i === 0 ? "" : i + 1}`}
									className="page-link"
								>
									{i + 1}
								</Link>
							</li>
						)
					}

					) : null}

					{!isLast && (
						<li className="page-item">
							<Link
								to={'/blog/' + nextPage}
								className="page-link"
								rel="next">
								<span aria-hidden="true">&raquo;</span>
							</Link>
						</li>
					)}
				</ul>
			</nav>
		</Layout>
	)
}

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
	  sort: { fields: [frontmatter___date], order: DESC }
	  filter: {fileAbsolutePath: {regex: "/posts/"}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`