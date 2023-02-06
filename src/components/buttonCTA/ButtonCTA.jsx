import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

const ButtonCTA = ({ text, link, width, height, onPressed, target }) => {
	return (
		<Link
			to={link}
			target={target}
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
	onPressed: () => {},
	target: '_blank',
}

export default ButtonCTA
