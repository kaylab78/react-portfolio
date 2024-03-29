import React from "react";

const Work = ({ work }) => {
    const { name, url, description, asset, tech } = work

    return (
        <div key={name} className="project-col">
            <img className="project-img" src={require(`../../assets/work/${asset}`)} alt={name} />
            <p className="project-title"><strong>{name}</strong></p>
            <a href={url} target="_blank" className="project-link">View Website</a>
            <p>{description}</p>
            <p>Technologies: {tech}</p>
        </div>
    );
};

export default Work;