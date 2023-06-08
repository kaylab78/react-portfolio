import React from 'react';
import headShot from '../../assets/headshot-400x400.png';

function About() {
    return (
        <section className="about-flex">
            <div className="full-width">
                <h1 id="about">About Me</h1>
            </div>
            <div className="headshot">
                <img src={headShot} alt="smiling woman" />
            </div>
            <div>
                <p>I’m a full-stack web developer certified through the University of Minnesota. I completed a six month coding boot camp on October 6, 2022. Through the curriculum I developed skills with HTML, CSS, JavaScript, APIs, and React. I also worked with MySQL and GraphQL.</p>
                <p>I’m looking to grow my skill set and be part of a team with a diverse knowledge base. I value hard work, reliability and clear communication. I admire organizations that are invested in their team members as much as they are focused on their goals.</p>
                <p>Prior to beginning the coding boot camp on April 21, 2022, I worked in digital marketing. I have seven years of professional experience in traditional and digital marketing. I received a bachelor of arts in media communications from North Central University in Minneapolis, Minnesota in 2015. I’m passionate about web development, which is why I made a career change.</p>
            </div>
            <div className="half-width">
                <h3>Experience</h3>
                <p>Full-Stack Web Engineer<br/>
                HighPower Data Solutions • Minneapolis, MN<br/>
                Sep. 2022 - June 2023<br/>
                <br/>
                Digital Marketing Specialist<br/>
                Franchise Times • Minneapolis, MN<br/>
                Sep. 2020 - Sep. 2022<br/>
                <br/>
                Marketing Communications Coordinator<br/>
                American Craft Council • Minneapolis, MN<br/>
                Jan. 2019 - Sep. 2020<br/>
                <br/>
                Marketing Assistant<br/>
                Gaughan Companies • Forest Lake, MN<br/>
                Sep. 2016 - Nov. 2018<br/>
                <br/>
                Marketng Operations Assistant<br/>
                Andersen Corporation • Bayport, MN<br/>
                July 2015 - Aug. 2016
                </p>
            </div>
            <div className="half-width">
                <h3>Certificate</h3>
                <p>Full Stack Web Development Certificate<br/>
                University of Minnesota • Minneapolis, MN<br/>
                Issued October 2022<br/>
                <a href="https://www.credly.com/badges/65142cc7-0842-41ab-9109-1b29794cbe84/" target="_blank" rel="noreferrer" className="project-link">View certificate details</a>
                </p>
                <h3>Education</h3>
                <p>Bachelor of Arts Media Communications<br/>
                North Central University • Minneapolis, MN<br/>
                Completed May 2015<br/>
                Valedictorian, Summa Cum Laude
                </p>
            </div>
        </section>
    );
}

export default About;