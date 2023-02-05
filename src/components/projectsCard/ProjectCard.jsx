import React from 'react'
import ButtonCTA from '../buttonCTA/ButtonCTA'

const ProjectCard = ({ size, title, date, description, image }) => {
	const imageSource = require('../../images/' + image + '.jpg')

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
						<h2 className="project-text-title">{title}</h2>
						<h4 className="project-text-date">{date}</h4>
						<div className="project-description">
							<h3 className="project-text-description">{description}</h3>
						</div>
					</div>
					<div className="project-content-lower">
						<ButtonCTA
							text={'Live Site'}
							link={'/#Projects'}
							width={`clamp(250px, 30vw , 270px)`}
							height={`clamp(48px, 5vw , 48px)`}
						/>
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
	description:
		'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur facilis eaque eius enim ipsa in est possimus sit incidunt delectus asperiores, modi architecto placeat at harum porro, reprehenderit numquam accusantium tempora voluptates repellendus? Qui aspernatur quas officiis perferendis quos sequi, doloremque quaerat ratione obcaecati. Dignissimos sapiente laboriosam esse possimus vitae, hic voluptatum eum facilis eius, fuga, enim provident ullam consequuntur ab eaque omnis voluptate eos veniam quaerat eligendi beatae ratione? Vel deserunt quae necessitatibus accusantium iste. Cumque sed dolorem quisquam error repellat. Maiores saepe at rerum voluptatibus mollitia! Recusandae assumenda veniam, eveniet cum at nisi nam quos illo perspiciatis autem?',
}

export default ProjectCard
