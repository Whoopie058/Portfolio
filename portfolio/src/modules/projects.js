// Example PNG import (uncomment and change filename when your PNG exists in src/assets):
// import portfolioImage from '../assets/portfolio.png'
import portfolioImage from '../../public/Projects/Mini-Me-Laura.png'
export const projects = [
	{
		id: 1,
		title: 'Mini-Me',
		description: 'My first assignment at my Multimedia Design program. A mini version of myself in LEGO style, made with Adobe Illustrator',
		image: portfolioImage
	},
	{
		id: 2,
		title: 'Task Tracker',
		description: 'A simple app to create, manage, and complete daily tasks.',
		stack: ['JavaScript', 'HTML', 'CSS'],
		link: '#',
		image: null,
	},
	{
		id: 3,
		title: 'Firebase Landing Page',
		description: 'Deployed and configured a static site with Firebase Hosting.',
		stack: ['Firebase', 'Vite'],
		link: '#',
		image: null,
	},
]

export const fetchProjects = async () => {
	return Promise.resolve(projects)
}
