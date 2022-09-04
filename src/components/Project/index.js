import React, { useState } from 'react';

const Project = ({ fileName }) => {
    const [apps] = useState([
        {
            name: 'Parkour app homepage',
            appUrl: 'https://parkour-review.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/playground-rating-app'
        },
        {
            name: 'Social network api tests',
            appUrl: 'https://youtu.be/eYGa59kQyzg',
            repoUrl: 'https://github.com/kaylab78/social-network-api'
        },
        {
            name: 'Tech blog homepage',
            appUrl: 'https://agile-headland-59274.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/mvc-tech-blog'
        },
        {
            name: 'E-commerce backend tests',
            appUrl: 'https://drive.google.com/file/d/1cxtB_hTSnTHoa6z3OZ4_vcVrn0AR1BPO/view',
            repoUrl: 'https://github.com/kaylab78/ecommerce-backend'
        },
        {
            name: 'Weather dashboard of Minneapolis forecast',
            appUrl: 'https://kaylab78.github.io/weather-dashboard/',
            repoUrl: 'https://github.com/kaylab78/weather-dashboard'
        },
        {
            name: 'Note taker app homepage',
            appUrl: 'https://note-taker-20220704.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/note-taker'
        }
    ]);

    return (
        <div>
            <div>
                
            </div>
        </div>
    );
};

export default Project;