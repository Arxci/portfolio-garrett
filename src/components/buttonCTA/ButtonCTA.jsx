import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const ButtonCTA = ({ text, link, width, height, onPressed }) => {
	return (
		<Link
			to={link}
			target="_blank"
			rel="noopener noreferrer"
			style={{ width: width, height: height }}
			className="button-cta"
			onClick={() => onPressed()}
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
