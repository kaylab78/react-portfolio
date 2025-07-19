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
                <p>I have 10 years of professional experience in digital marketing and web development roles. I received a bachelor’s degree in media communications from North Central University in 2015, and in 2022 I completed a six month full-stack web development program through the University of Minnesota.</p>

                <p>In my current position as Digital Content and Marketing Technology Specialist at Lathrop GPM, I support the law firm’s higher education Title IX compliance services through digital marketing, email marketing, website management, video editing, event management, and client relations.</p>
            </div>
            <div className="half-width">
                <h3>Experience</h3>
                <p>Digital Content & Marketing Technology Specialist<br/>
                Lathrop GPM • Minneapolis, MN<br/>
                Jan. 2024 - Present<br/>
                <br/>
                Web Developer<br/>
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