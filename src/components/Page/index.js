import React from 'react';
import PageContent from '../PageContent';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';

// 2U Boot Camp Tutor Meg Meyers helped

function Page({ currentPage }) {
    const pageRender = () => {
        switch (currentPage.name) {
            case "About":
                return <About/>;
            case "Portfolio":
                return <Portfolio/>;
            case "Contact":
                return <Contact/>;
            case "Resume":
                return <Resume/>;
            default: 
                return <About/>;
        }
    }

    return (
        <div>
            <PageContent>{pageRender()}</PageContent>
        </div>
    )
}

export default Page;