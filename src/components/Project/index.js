import React from 'react';

const Project = ({ project }) => {
    const { name, appUrl, repoUrl, asset } = project

    return (
        <div key={name}>
            <p className="project-title">{name} | <a href={repoUrl}>GitHub</a> | <a href={appUrl}>View Project</a></p>
            <img className="project-img" src={require(`../../assets/projects/${asset}`)} alt={name} />
        </div>
    );
};

export default Project;