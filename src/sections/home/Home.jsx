import React from 'react'
import ButtonCTA from '../../components/buttonCTA/ButtonCTA'
import * as url from '../../images/home-page-background.jpg'

const Home = ({ setCurrentTab }) => {
	return (
		<section id="Home" className="section">
			<div className="home-background">
				<img
					className="home-background-image"
					src={url.default}
					alt="background"
				/>
			</div>

			<div className="section__container container">
				<div className="section__wrapper">
					<div className="home-content">
						<div className="home-content-wrapper">
							<h1 className="home-text__primary">Garrett Humbert</h1>
							<p className="home-text__secondary">
								Front End Developer | Software Engineer
							</p>
							<ButtonCTA
								text={'Projects'}
								link={'/#Portfolio'}
								width={`clamp(150px, 30vw , 270px)`}
								height={`clamp(30px, 5vw , 48px)`}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home