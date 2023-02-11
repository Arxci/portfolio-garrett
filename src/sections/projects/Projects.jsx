import React from 'react'
import ProjectCard from '../../components/projectsCard/ProjectCard'

const Projects = () => {
	return (
		<section id="Projects" className="projects-section section">
			<div className="projects-section__container container">
				<div className="projects-section__wrapper">
					<div className="projects-content">
						<div className="projects-content-wrapper">
							<h1 className="projects-text__primary">Projects</h1>
							<div className="projects-content-container">
								<ProjectCard
									size={'large'}
									image={'MovieApp.png'}
									title="Movie App"
									date="02/04/2023"
									link="https://garrett-humbert-movie-app.netlify.app"
									tools={[
										{ name: 'React', key: 0 },
										{ name: 'Sass', key: 1 },
										{ name: 'HTML', key: 2 },
										{ name: 'TMDB', key: 3 },
									]}
									github="https://github.com/Arxci/movie__app"
								/>
								<ProjectCard
									size={'small'}
									image={'ChessEngine.png'}
									title="Chess AI"
									date="12/05/2022"
									link="https://garrett-humbert-chess-ai.netlify.app/"
									tools={[
										{ name: 'Javascript', key: 0 },
										{ name: 'CSS', key: 1 },
										{ name: 'HTML', key: 2 },
									]}
									github="https://github.com/Arxci/Chess-Engine"
								/>
								<ProjectCard
									size={'small'}
									image={'RealtorGO.png'}
									title="Front End Realtor Website"
									date="02/10/2023"
									link={'https://garrett-humbert-realtor-go.netlify.app'}
									tools={[
										{ name: 'React', key: 0 },
										{ name: 'Sass', key: 1 },
										{ name: 'HTML', key: 2 },
									]}
									github="https://github.com/Arxci/Realtor.GO"
								/>
								<ProjectCard
									size={'large'}
									image={'Pathfinder.png'}
									title="Path Finding Visualizer"
									date="06/05/2022"
									link="https://garrett-humbert-pathfinder.netlify.app/"
									tools={[
										{ name: 'React', key: 0 },
										{ name: 'Sass', key: 1 },
										{ name: 'HTML', key: 2 },
									]}
									github="https://github.com/Arxci/Pathfinding-Visualizer"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
