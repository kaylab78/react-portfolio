import React, { useState } from 'react';
import Project from '../Project';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Where Were You When app homepage',
            appUrl: 'https://where-were-you-when.herokuapp.com/',
            repoUrl: 'https://github.com/McAmy2001/Where-Were-You-When',
            asset: '0-where-were-you-when.png'
        },
        {
            name: 'Parkour app homepage',
            appUrl: 'https://parkour-review.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/playground-rating-app',
            asset: '0-parkour.png'
        },
        {
            name: 'Social network api tests',
            appUrl: 'https://youtu.be/eYGa59kQyzg',
            repoUrl: 'https://github.com/kaylab78/social-network-api',
            asset: '1-social-api.png'
        },
        {
            name: 'Tech blog homepage',
            appUrl: 'https://agile-headland-59274.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/mvc-tech-blog',
            asset: '2-tech-blog.png'
        },
        {
            name: 'E-commerce backend tests',
            appUrl: 'https://drive.google.com/file/d/1cxtB_hTSnTHoa6z3OZ4_vcVrn0AR1BPO/view',
            repoUrl: 'https://github.com/kaylab78/ecommerce-backend',
            asset: '3-ecommerce-backend.png'
        },
        {
            name: 'Weather dashboard of Minneapolis forecast',
            appUrl: 'https://kaylab78.github.io/weather-dashboard/',
            repoUrl: 'https://github.com/kaylab78/weather-dashboard',
            asset: '4-weather-dashboard.png'
        }
    ]);

    return (
        <section>
            <h1 id="portfolio">Portfolio</h1>
            <div className="project-flex">
                {projects.map((project, index) => (<Project project={project} key={"project"+index}/>))}
            </div>
        </section>
    )
};

export default Portfolio;