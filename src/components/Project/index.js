import React from 'react';

const Project = ({ project }) => {
    const { name, appUrl, repoUrl, asset } = project

    return (
        <div key={name}>
            <img src={require(`../../assets/projects/${asset}`)} alt={name} />
            <p><a href={repoUrl}>GitHub</a> | <a href={appUrl}>Deployed Project</a></p>
        </div>
    );
};

export default Project;