import React from 'react';

const Project = ({ project }) => {
    const { name, appUrl, repoUrl, description, asset, tech } = project

    return (
        <div key={name} className="project-col">
            <img className="project-img" src={require(`../../assets/projects/${asset}`)} alt={name} />
            <p className="project-title"><strong>{name}</strong></p>
            <div>
                <a href={repoUrl} target="_blank" rel="noreferrer" className="project-link">GitHub</a> • <a href={appUrl} target="_blank" rel="noreferrer" className="project-link">View Project</a>
                <p>{description}</p>
                <p>Technologies: {tech}</p>
            </div>
        </div>
    );
};

export default Project;