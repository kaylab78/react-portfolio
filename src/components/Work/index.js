import React from "react";

const Work = ({ work }) => {
    const { name, url, description, asset } = work

    return (
        <div key={name} className="project-col">
            <p className="project-title">
            <a href={url}><strong>{name}</strong></a><br/>
            {description}</p>
            <img className="project-img" src={require(`../../assets/work/${asset}`)} alt={name} />
        </div>
    );
};

export default Work;