import React from 'react'
import ProjectCard from '../../components/projectsCard/ProjectCard'

const Projects = () => {
	return (
		<section id="Projects" className="section">
			<div className="section__container container">
				<div className="section__wrapper">
					<div className="projects-content">
						<div className="projects-content-wrapper">
							<h1 className="projects-text__primary">Projects</h1>
							<div className="projects-content-container">
								<ProjectCard
									size={'large'}
									image={'home-page-background'}
									title="Movie App"
									date="02/04/2023"
									description="Leveraged the TMDB api to create a full scale front end movie application. Includes searching/discovery of movies, people, and TV shows. Learn more about the cast/media by viewing the profiles"
								/>
								<ProjectCard
									size={'small'}
									image={'pexels-anubhaw-anand-2027697'}
									title="Chess Engine"
									date="12/05/2022"
									description="This application is a an AI. The AI is built using the minimax algorithm with alpha beta pruning which allows the AI to efficiently and accurately predict moves"
								/>
								<ProjectCard
									size={'small'}
									image={'pexels-sevenstorm-juhaszimrus-1302326'}
								/>
								<ProjectCard
									size={'large'}
									image={'pexels-luan-gracioli-13867184'}
									title="Path Finding Visualizer"
									date="06/05/2022"
									description="This is a visually satisfying application where you place down obstacles to find a path from the start to the end node. There are three different search algorithms you can choose from, A Star, Dijkstra's, and Depth First Search. You can create randomly generated mazes by utilizing recursive division, place walls to create your own obstacles, or move the start and end points to customize the search to your desire."
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
