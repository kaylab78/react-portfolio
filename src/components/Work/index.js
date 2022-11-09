import React from "react";

const Work = ({ work }) => {
    const { name, url, description, asset } = work

    return (
        <div key={name}>
            <h3 className="project-title">{name}</h3>
            <p><a href={url}>View Project</a><br/>
            {description}</p>
            <img className="project-img" src={require(`../../assets/work/${asset}`)} alt={name} />
        </div>
    );
};

export default Work;