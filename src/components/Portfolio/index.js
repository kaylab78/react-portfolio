import React, { useState } from 'react';
import Project from '../Project';
import Work from '../Work';

function Portfolio() {
    const [projects] = useState([
        {
            name: 'Where Were You When',
            appUrl: 'https://hidden-eyrie-35513.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/Where-Were-You-When',
            description: 'A MERN stack, single page application that allows a user to record and save their memories. The user can view their own past memories and will be reminded of a memory on the same date that they are using the application.',
            asset: '0-where-were-you-when.png'
        },
        {
            name: 'P.A.R.K.O.U.R.',
            appUrl: 'https://parkour-review.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/playground-rating-app',
            description: "An app designed to help parents and caregivers easily find and give reviews about parks and playgrounds, PARKOUR stands for People Around Rambunctious Kids Openly Utilizing Recreation.",
            asset: '1-parkour.png'
        },
        {
            name: 'Social Network API',
            appUrl: 'https://youtu.be/eYGa59kQyzg',
            repoUrl: 'https://github.com/kaylab78/social-network-api',
            description: 'The back end API for a social media app that uses a NoSQL database. Routes can be tested in Insomnia.',
            asset: '2-social-api.png'
        },
        {
            name: 'Tech Blog',
            appUrl: 'https://agile-headland-59274.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/mvc-tech-blog',
            description: 'A blog site where users can publish, edit and delete their own blog posts and comment on other posts.',
            asset: '3-tech-blog.png'
        },
        {
            name: 'E-commerce Back End',
            appUrl: 'https://drive.google.com/file/d/1cxtB_hTSnTHoa6z3OZ4_vcVrn0AR1BPO/view',
            repoUrl: 'https://github.com/kaylab78/ecommerce-backend',
            description: 'The back end for an e-commerce site that can be managed through the command line interface with API route testing in Insomnia.',
            asset: '4-ecommerce-backend.png'
        },
        {
            name: 'Weather Dashboard',
            appUrl: 'https://kaylab78.github.io/weather-dashboard/',
            repoUrl: 'https://github.com/kaylab78/weather-dashboard',
            description: 'A weather dashboard that allows the user to search for a city and receive the current weather and the five-day forecast. The user can also view their previous city searches.',
            asset: '5-weather-dashboard.png'
        }
    ]);

    const [work] = useState([
        {
            name: 'E-commerce Themes',
            url: 'https://kaylahpds.github.io/incentiveq-3/',
            description: 'I built three themes in one week for a client’s e-commerce website using HTML, CSS and JavaScript.',
            asset: '0-ecommerce-theme.png',
        },
        {
            name: 'Symphony Server Manager',
            url: 'http://symphony.highpowerdata.com/',
            description: 'I built a website with Oxygen Builder for Wordpress to market the FileMaker software, Symphony Server Manager.',
            asset: '1-symphony-server.png'
        },
        {
            name: 'HighPower Web Design | Our Team',
            url: 'https://highpower-design.com/our-team/',
            description: 'I was tasked with adding a team page to the company website. This website was built on a custom WordPress theme, so I had to study the PHP files in order to add functionality for a new page. Once functionality was set up and the team information was loaded, I styled the page with CSS to be mobile responsive.',
            asset: '2-hpwd-our-team.png',
        },
        {
            name: 'Contemporary Furnishings by Granby',
            url: 'http://granbyinc.com/',
            description: 'The client wanted to update the photos in the slider on the website homepage. I resized the photos, added them to the CMS, and updated the Javascript function and HTML so that the new photos would run on the homepage. On the Spotlight page, the client provided copy that I updated in the HTML file. I also embedded the video. On the Vendor page, the client provided information on which vendors to add. I updated the HTML file with images and corresponding links.',
            asset: '3-cfg.png',
        },
        {
            name: 'Food On Demand Conference 2022',
            url: 'https://foodondemand.com/food-on-demand-conference/may2022/',
            description: "I was tasked with creating a set of pages on the company's WordPress website to market the annual conference.",
            asset: '4-fodc-2022.png',
        },
        {
            name: 'Franchise Investment Show Archive',
            url: 'https://www.franchisetimes.com/franchise-investment-show/archive/',
            description: "The task was to create a streamlined archive page for the monthly webinars. I set up the structure for this archive using the content management system that the company utilizes. When one of the logos is clicked, the user is brought to a page for that month's webinar.",
            asset: '5-fis-archive.png',
        }
    ]);

    return (
        <section>
            <h1 id="portfolio">Portfolio</h1>
            <h2>Boot Camp Projects</h2>
            <div className="project-flex">
                {projects.map((project, index) => (<Project project={project} key={"project"+index}/>))}
            </div>
            <h2>Work Projects</h2>
            <div className="project-flex">
                {work.map((work, index) => (<Work work={work} key={"work"+index}/>))}
            </div>
        </section>
    )
};

export default Portfolio;