import React from 'react'
import ButtonCTA from '../../components/buttonCTA/ButtonCTA'

const About = () => {
	return (
		<section id="About" className="about-section section">
			<div className="about-section__container container">
				<div className="about-section__wrapper">
					<div className="about-content">
						<div className="about-content-wrapper">
							<div className="about-content-text">
								<h1 className="about-text__primary">About</h1>
								<p className="about-text__secondary">
									Hello! My name is Garrett, I'm a front end developer. I love
									using frameworks like React and SASS to quickly develop
									applications from scratch. I'm a total nerd for the visual
									aspects of web applications and I love to learn new and
									innovative ways to build cool websites!
								</p>
								<ButtonCTA
									text={'Resume'}
									link={''}
									width={`clamp(250px, 30vw , 260px)`}
									height={`clamp(48px, 5vw , 54px)`}
									target=""
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="about-skills"></div>
		</section>
	)
}

export default About
