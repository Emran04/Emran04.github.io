import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "gatsby"

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Link to="/" className="nav-link">Emran Hossen</Link>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
				<Nav >
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
	)
}

export default Header