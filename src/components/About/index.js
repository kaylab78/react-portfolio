import React from 'react';
import headShot from '../../assets/headshot-400x400.png';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={headShot} style={{ width: "20%" }} alt="smiling woman" />
            <p>I'm a full-stack web developer certified through the University of Minnesota. I’ve developed skills with HTML, CSS, JavaScript, APIs, and React. I’ve worked with MySQL and GraphQL. I come to web development with a background in traditional and digital marketing and a bachelor of arts in media communications from North Central University in Minneapolis, Minnesota. I value hard work, clear communication, and I admire organizations that are invested in their team members as much as they are focused on their goals.
            </p>
        </section>
    );
}

export default About;