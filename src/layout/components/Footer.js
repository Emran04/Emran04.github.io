import React from 'react'
// import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
	faGithub, 
	faTwitter, 
	faStackOverflow,
	// faPinterest 
	} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<div className="footer-content">
						<ul className="footer-social-menu">
							<li><FontAwesomeIcon icon={faGithub} /><a href="https://github.com/emran04" target="__blank">Github</a></li>
							<li><FontAwesomeIcon icon={faTwitter} /><a href="https://twitter.com/Emran04" target="__blank">Twitter</a></li>
							<li><FontAwesomeIcon icon={faStackOverflow} /><a href="https://stackoverflow.com/users/3273861/emran" target="__blank">Stack Overflow</a></li>
							{/* <li><FontAwesomeIcon icon={faPinterest} /><a href="https://github.com/emran04" target="__blank">Pintrest</a></li> */}
						</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer