import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const HeaderLink = ({ text, link }) => {
	return (
		<li className="header__nav-link">
			<Link to={link}>
				<h3 className="header__nav-link-text">{text}</h3>
			</Link>
		</li>
	)
}

HeaderLink.defaultProps = {
	text: 'nav-link',
	link: '#',
}

export default HeaderLink
