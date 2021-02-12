import React from 'react'
import waterfall2 from '../img/fellowship.jpg.crdownload'

function ProjectCard(props){
    const { title, excerpt } = props;
    return(
        <div className="card shadow h-100">
            <img className="card-img-top"
                 src={waterfall2}
                 alt="Free Image" 
            />
            <div className="card-body">
                <h4 className="card-title">{title}</h4>
                <p className="crad-text">{excerpt}</p>
                <a href="#" className="stretched-link"></a>
            </div>
        </div>
    );
}

export default ProjectCard;