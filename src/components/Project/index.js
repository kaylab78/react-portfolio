import React from 'react';

const Project = ({ project }) => {
    const { name, appUrl, repoUrl, description, asset } = project

    return (
        <div key={name} className="project-col">
            <h3 className="project-title">{name}</h3>
            <p className="project-title"><a href={repoUrl}>GitHub</a> • <a href={appUrl}>View Project</a><br/>
            {description}</p>
            <img className="project-img" src={require(`../../assets/projects/${asset}`)} alt={name} />
        </div>
    );
};

export default Project;