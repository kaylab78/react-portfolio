import React from 'react';
import headShot from '../../assets/headshot-400x400.png';

function About() {
    return (
        <section>
            <h1 id="about">About Me</h1>
            <img src={headShot} style={{ width: "20%" }} alt="smiling woman" />
            <p>I'm a full-stack web developer certified through the University of Minnesota. I’ve developed skills with HTML, CSS, JavaScript, APIs, and React. I’ve worked with MySQL and GraphQL.</p>
            <p>I come to web development with a background in traditional and digital marketing and a bachelor of arts in media communications from North Central University in Minneapolis, Minnesota. I value hard work, clear communication, and I admire organizations that are invested in their team members as much as they are focused on their goals.
            </p>
            <h3>Experience</h3>
            <p>Digital Marketing Specialist<br/>
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
            Jul. 2015 - Aug. 2016<br/>
            <br/>
            Social Media and Marketing Coordinator<br/>
            Express Employment Professionals • Woodbury, MN<br/>
            May 2015 - Sep. 2015
            </p>
            <h3>Certification</h3>
            <p>Full Stack Web Development Certificate<br/>
            University of Minnesota • Minneapolis, MN<br/>
            Issued October 2022
            </p>
            <h3>Education</h3>
            <p>Bachelor of Arts Media Communications<br/>
            North Central University • Minneapolis, MN<br/>
            Completed May 2022<br/>
            Valedictorian, Summa Cum Laude
            </p>
        </section>
    );
}

export default About;