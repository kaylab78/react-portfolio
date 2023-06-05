import React from 'react';

const Project = ({ project }) => {
    const { name, appUrl, repoUrl, description, asset } = project

    return (
        <div key={name} className="project-col">
            <img className="project-img" src={require(`../../assets/projects/${asset}`)} alt={name} />
            <p className="project-title"><strong>{name}</strong><br/>
            <a href={repoUrl}>GitHub</a> • <a href={appUrl}>View Project</a><br/>
            {description}</p>
        </div>
    );
};

export default Project;