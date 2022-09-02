import React from 'react';
import headShot from '../../assets/headshot-400x400.png';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={headShot} style={{ width: "20%" }} alt="smiling woman" />
            <p>I have seven years of experience in traditional and digital marketing and a bachelor of arts in media communications from North Central University. I received a certification in full-stack web development from the University of Minnesota in October 2022. I’ve developed front-end skills with HTML, CSS, JavaScript, and working with APIs, and I’m continuing to refine back-end development skills. I value hard work, clear communication, and I admire organizations that are invested in their team members as much as they are focused on their goals.
            </p>
        </section>
    );
}

export default About;