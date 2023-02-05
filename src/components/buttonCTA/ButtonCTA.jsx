import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const ButtonCTA = ({ text, link, width, height }) => {
	return (
		<Link
			to={link}
			style={{ width: width, height: height }}
			className="button-cta"
		>
			{text}
		</Link>
	)
}

ButtonCTA.defaultProps = {
	text: 'button',
	link: '#',
	width: '160px',
	height: '32px',
}

export default ButtonCTA
