import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "gatsby"

const Header = () => {
	return (
		
		<div className="container">
			<div className="row">
				<div className="col-md-10 offset-md-1">
					<Navbar collapseOnSelect expand="lg">
						<div className="logo">
							<Link to="/" className="nav-link">Emran Hossen</Link>
						</div>
						<Navbar.Toggle aria-controls="responsive-navbar-nav" />
						<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
							<Nav className="main-nav">
								<Link to="/" className="nav-link">Home</Link>
								<Link to="/blog" className="nav-link">Blog</Link>
								<Link to="/about" className="nav-link">About</Link>
								{/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
							<Link to="/" className="dropdown-item">Action</Link>
							<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
						</NavDropdown> */}
							</Nav>

						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		</div>
		
	)
}

export default Header