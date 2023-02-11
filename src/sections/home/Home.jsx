import React from 'react'
import ButtonCTA from '../../components/buttonCTA/ButtonCTA'
import * as url from '../../images/home-page-background.jpg'

const Home = () => {
	return (
		<section id="Home" className="home-section section">
			<div className="home-background">
				<img
					className="home-background-image"
					src={url.default}
					alt="background"
				/>
			</div>

			<div className="home-section__container container">
				<div className="home-section__wrapper">
					<div className="home-content">
						<div className="home-content-wrapper">
							<h1 className="home-text__primary">Garrett Humbert</h1>
							<p className="home-text__secondary">
								Front End Developer | Software Engineer
							</p>
							<ButtonCTA
								text={'Projects'}
								link={'/#Projects'}
								width={`clamp(250px, 30vw , 270px)`}
								height={`clamp(48px, 5vw , 48px)`}
								target=""
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home
