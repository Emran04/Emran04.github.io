import React from 'react'
// import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faStackOverflow, faPinterest } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<div className="footer-content">
							<FontAwesomeIcon icon={faGithub} /> <a href="https://github.com/emran04" target="__blank">Github</a>
							<FontAwesomeIcon icon={faTwitter} /> <a href="https://github.com/emran04" target="__blank">Twitter</a>
							<FontAwesomeIcon icon={faStackOverflow} /> <a href="https://github.com/emran04" target="__blank">Stack Overflow</a>
							<FontAwesomeIcon icon={faPinterest} /> <a href="https://github.com/emran04" target="__blank">Pintrest</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer