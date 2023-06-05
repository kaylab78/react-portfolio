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
            asset: '0-where-were-you-when.png',
            tech: 'Apollo Server, bcrypt, Concurrently, CSS, Express.js, Faker, GraphQL, JavaScript, jsonwebtoken, JSX, jwt-decode, MongoDB, Mongoose, Node.js, nodemon, React'
        },
        {
            name: 'P.A.R.K.O.U.R.',
            appUrl: 'https://parkour-review.herokuapp.com/',
            repoUrl: 'https://github.com/kaylab78/playground-rating-app',
            description: "An app designed to help parents and caregivers easily find and give reviews about parks and playgrounds, PARKOUR stands for People Around Rambunctious Kids Openly Utilizing Recreation.",
            asset: '1-parkour.png',
            tech: 'autoprefixer, bcrypt, connect-session-sequelize, dotenv, Express.js, express-handlebars, express-session, JavaScript, JawsDB, jest, MySQL2, Node.js, PostCSS, Sequelize, Tailwind CSS'
        },
        {
            name: 'Weather Dashboard',
            appUrl: 'https://kaylab78.github.io/weather-dashboard/',
            repoUrl: 'https://github.com/kaylab78/weather-dashboard',
            description: 'A weather dashboard that allows the user to search for a city and receive the current weather and the five-day forecast. The user can also view their previous city searches.',
            asset: '2-weather-dashboard.png',
            tech: 'CSS, HTML, JavaScript, OpenWeather API'
        },
        {
            name: 'Social Network API',
            appUrl: 'https://youtu.be/eYGa59kQyzg',
            repoUrl: 'https://github.com/kaylab78/social-network-api',
            description: 'The back end API for a social media app that uses a NoSQL database. Routes can be tested in Insomnia.',
            asset: '3-social-api.png',
            tech: 'Express.js, JavaScript, MongoDB, Mongoose, Node.js'
        }
    ]);

    const [work] = useState([
        {
            name: 'FileMaker Products',
            url: 'https://filemaker-products.com/',
            description: 'I did a complete redesign of this Wordpress website taking it from an outdated design to a sleek, modern website that the client is proud of. I used Oxygen Builder to design page templates, and I used the copy from the old website within the new page templates.',
            asset: '0-filemaker-products.png',
        },
        {
            name: 'Alfred Watson Gallery',
            url: 'https://watsongallery.com/',
            description: 'This client asked for assistance editing and setting up her e-commerce website. Using the block editor on Wordpress, I designed the different pages according to the client’s specifications. I also set up the e-commerce functionality using WooCommerce.',
            asset: '1-watson-gallery.png',
        },
        {
            name: 'Contemporary Furnishings by Granby',
            url: 'http://granbyinc.com/',
            description: 'I updated the photos in the slider on the homepage by uploading the new photos to the CMS and editing the JavaScript function and the HTML so that the new photos would appear. I added additional vendor logos and links in the HTML file for that webpage.',
            asset: '2-cfg.png',
        },
        {
            name: 'HighPower Web Design | Our Team',
            url: 'https://highpower-design.com/our-team/',
            description: 'I designed and built a portfolio page and a team page for our company website. This website was built on a custom WordPress template, so I had to study the PHP files in order to add functionality for new pages. I styled the pages with CSS to be mobile responsive.',
            asset: '3-hpwd-our-team.png',
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