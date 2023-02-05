import React, { useEffect, useState, useRef } from 'react'
import ButtonCTA from '../buttonCTA/ButtonCTA'
import HeaderLink from './headerLink/HeaderLink'
import HamburgerMenu from './hamburgerMenu/HamburgerMenu'
import { HashLink as Link } from 'react-router-hash-link'

const Header = () => {
	const [toggleOpen, setToggleOpen] = useState(false)
	const [headerVisibility, setHeaderVisibility] = useState('')
	var lastScroll = useRef(0)

	useEffect(() => {
		function OnScroll() {
			var current = ''
			const sections = document.querySelectorAll('.section')
			const headerLinks = document.querySelectorAll('.header__nav-link-text')
			const hamburgerLinks = document.querySelectorAll(
				'.hamburger__nav-link-text'
			)

			sections.forEach((section) => {
				const sectionTop = section.offsetTop

				if (window.scrollY >= sectionTop - 60) {
					current = section
				}
			})

			headerLinks.forEach((link) => {
				link.classList.remove('active')
				if (link.innerHTML === current.id) {
					link.classList.add('active')
				}
			})

			hamburgerLinks.forEach((link) => {
				link.classList.remove('active')
				if (link.innerHTML === current.id) {
					link.classList.add('active')
				}
			})

			var st = window.pageYOffset || document.documentElement.scrollTop
			if (st > lastScroll.current && st > 150) {
				setHeaderVisibility('hidden')
			} else if (st < lastScroll.current) {
				setHeaderVisibility('')
			}
			lastScroll.current = st < 0 ? 0 : st
		}

		function OnResize() {
			if (window.innerWidth >= 1120) {
				setToggleOpen(false)
			}
		}

		window.addEventListener('scroll', () => OnScroll())
		window.addEventListener('touchmove', () => OnScroll())
		window.addEventListener('resize', () => OnResize())
		OnScroll()

		return () => {
			window.removeEventListener('scroll', () => OnScroll())
			window.removeEventListener('touchmove', () => OnScroll())
			window.removeEventListener('resize', () => OnResize())
		}
	}, [setHeaderVisibility, setToggleOpen])

	return (
		<header className="header">
			<div className={'header__container ' + headerVisibility}>
				<div className="header__wrapper container">
					<nav className="header__nav">
						<ol className="header__nav-list">
							<li className="header__nav-list-item">
								<Link to="/#Home" onClick={() => setToggleOpen(false)}>
									<h1 className="header__nav-list-title">Garrett Humbert</h1>
								</Link>
							</li>
							<li className="header__nav-list-item hide-for-mobile">
								<ol className="header__nav-links">
									<HeaderLink text={'Home'} link={'/#Home'} />
									<HeaderLink text={'Projects'} link={'/#Projects'} />
									<HeaderLink text={'About'} link={'#'} />
									<HeaderLink text={'Contact'} link={'#'} />
								</ol>
							</li>
							<div className="hide-for-mobile">
								<ButtonCTA
									text={'Resume'}
									link={'#'}
									width={'170px'}
									height={'42px'}
								/>
							</div>

							<i
								onClick={() => setToggleOpen(!toggleOpen)}
								className="fa-solid fa-bars hide-for-desktop"
							></i>
						</ol>
					</nav>
				</div>
			</div>
			<HamburgerMenu
				setToggleOpen={setToggleOpen}
				toggleOpen={toggleOpen}
				headerVisibility={headerVisibility}
			/>
		</header>
	)
}

export default Header
