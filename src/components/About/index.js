import React from 'react';
import headShot from '../../assets/headshot-400x400.png';

function About() {
    return (
        <section className="about-flex">
            <div className="full-width">
                <h1 id="about">About Me</h1>
            </div>
            <div className="headshot">
                <img src={headShot} style={{ width: "90%" }} alt="smiling woman" />
            </div>
            <div className="bio">
                <p>I’m a full-stack web developer with a certificate from the University of Minnesota. I completed a six month coding boot camp in 2022. Through the curriculum I improved my skills in HTML, CSS, and Javascript, and I was introduced to other languages, frameworks and tools like React, Express.js, Node.js, SQL, MySQL, MongoDB, and GraphQL.</p>
                <p>I’m eager to join a company that prioritizes employee development and fosters a culture of open communication and collaboration. The opportunity to work alongside a diverse and knowledgeable team is essential to continuous learning and professional growth in web development. I’m passionate about the dynamic innovations within web development and am dedicated to contributing my hard work, reliability, and effective communication skills to the success of the team and the organization.</p>
                <p>Prior to my career change in web development, I worked in marketing. I have seven years of professional experience in traditional, digital and email marketing. I received a bachelor of arts in media communications from North Central University in Minneapolis, Minnesota in 2015.</p>
            </div>
            <div className="half-width">
                <h3>Experience</h3>
                <p>Web Developer<br/>
                CodeWeavers • St. Paul, MN<br/>
                July 2023 - Oct. 2023<br/>
                <br/>
                Full-Stack Web Engineer<br/>
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