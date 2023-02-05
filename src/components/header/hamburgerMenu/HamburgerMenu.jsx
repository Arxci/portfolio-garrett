import React from 'react'
import HamburgerLink from './hamburgerLink/HamburgerLink'
import ButtonCTA from '../../buttonCTA/ButtonCTA'

const HamburgerMenu = ({ setToggleOpen, toggleOpen, headerVisibility }) => {
	return (
		<div className={toggleOpen ? 'hamburger-menu open' : 'hamburger-menu'}>
			<span
				className="hamburger-menu__remainder"
				onClick={() => setToggleOpen(false)}
			/>
			<div className="hamburger-menu__container">
				<div className={'hamburger-menu__wrapper ' + headerVisibility}>
					<nav className="hamburger__nav">
						<ol className="hamburger__nav__list">
							<HamburgerLink
								text={'Home'}
								link={'/#Home'}
								setToggleOpen={setToggleOpen}
							/>
							<HamburgerLink
								text={'Projects'}
								link={'/#Projects'}
								setToggleOpen={setToggleOpen}
							/>
							<HamburgerLink
								text={'About'}
								link={'/'}
								setToggleOpen={setToggleOpen}
							/>
							<HamburgerLink
								text={'Contact'}
								link={'/'}
								setToggleOpen={setToggleOpen}
							/>
							<ButtonCTA
								text={'Resume'}
								link={'#'}
								width={'170px'}
								height={'40px'}
							/>
						</ol>
					</nav>
				</div>
			</div>
		</div>
	)
}

export default HamburgerMenu
