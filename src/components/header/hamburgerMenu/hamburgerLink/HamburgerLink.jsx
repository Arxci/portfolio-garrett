import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HamburgerLink = ({ text, link, setToggleOpen }) => {
	return (
		<li className="hamburger__nav-link">
			<Link to={link} onClick={() => setToggleOpen(false)}>
				<h3 className="hamburger__nav-link-text">{text}</h3>
			</Link>
		</li>
	)
}

HamburgerLink.defaultProps = {
	text: 'nav-link',
	link: '#',
}

export default HamburgerLink
