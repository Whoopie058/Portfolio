// Example PNG import (uncomment and change filename when your PNG exists in src/assets):
// import portfolioImage from '../assets/portfolio.png'
import portfolioImage from '../../public/Projects/Mini-Me-Laura.png'
import portfolioImage2 from '../../public/Projects/Recipe-Web-Mandatory.png'
import portfolioImage3 from '../../public/Projects/Infographic Epilepsy.png'
import portfolioImage4 from '../../public/Projects/Recipe-Web-Mandatory.png'
import portfolioImage5 from '../../public/Projects/Laura Beat-Up.png'
export const projects = [
	{
		id: 1,
		title: 'Mini-Me',
		description: 'My first assignment at my Multimedia Design program. A mini version of myself in LEGO style, made with Adobe Illustrator',
		stack: ['Illustrator'],
        image: portfolioImage
	},
	{
		id: 2,
		title: 'Recipe Web Mandatory',
		description: 'A recipe website project built for a mandatory assignment.',
		stack: ['HTML', 'CSS'],
		link: 'https://whoopie058.github.io/Recipe-Web-Mandatory/',
		image: portfolioImage2,
	},
	{
		id: 3,
		title: 'Epilepsy Infographic',
		description: 'An infographic about epilepsy, created for a design assignment.',
		stack: ['Illustrator'],
		image: portfolioImage3,
	},
	{
		id: 4,
		title: 'Video CV',
		description: 'A video CV project created for a design assignment.',
		stack: ['Premiere Pro', 'After Effects'],
		image: portfolioImage4,
	},
	{
		id: 5,
		title: 'Beat Up Photoshop Assignment',
		description: 'A Photoshop assignment where I created a composite image.',
		stack: ['Photoshop'],
		image: portfolioImage5,
	},
]

export const fetchProjects = async () => {
	return Promise.resolve(projects)
}
