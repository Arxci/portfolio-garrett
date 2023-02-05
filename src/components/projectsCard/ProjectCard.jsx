import React from 'react'
import { Link } from 'react-router-dom'
import ButtonCTA from '../buttonCTA/ButtonCTA'
import ProjectTool from '../projectTool/ProjectTool'

const ProjectCard = ({ size, title, date, tools, image, github, link }) => {
	const imageSource = require('../../images/' + image)

	return (
		<div className={'project ' + size}>
			<div className="project-background">
				<img
					className="project-background-image"
					src={imageSource}
					alt="Project Background"
				/>
			</div>
			<div className="project-container">
				<div className="project-wrapper">
					<div className="project-content-text">
						<div className="project-title">
							<Link to={link} target="_blank" rel="noopener noreferrer">
								<h2 className="project-text-title">{title}</h2>
							</Link>
						</div>

						<h4 className="project-text-date">{date}</h4>
						<div className="project-tools">
							<div className="project-tools-scroller">
								{tools.map((tool) => (
									<ProjectTool key={tool.id} tool={tool} />
								))}
							</div>
						</div>
					</div>
					<div className="project-content-lower">
						<ButtonCTA
							text={'Live Site'}
							link={link}
							width={`clamp(100px, 20vw , 220px)`}
							height={`clamp(42px, 5vw , 42px)`}
						/>
						<Link to={github} target="_blank" rel="noopener noreferrer">
							<i className="fa-brands fa-github"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

ProjectCard.defaultProps = {
	size: 'small',
	title: 'Project Title',
	date: '01/01/2023',
	tools: [
		{
			name: 'ReactJS',
			id: 0,
		},
		{
			name: 'CSS',
			id: 1,
		},
		{
			name: 'HTML',
			id: 2,
		},
		{
			name: 'TailwindCSS',
			id: 3,
		},
		{
			name: 'Javascript',
			id: 4,
		},
	],
	image: 'home-page-background.jpg',
	github: '#',
	link: '/#Projects',
}

export default ProjectCard
