import React from 'react'
import waterfall from '../img/waterfall.jpg';

function ProjectSection(){
    const projects = [
        {
            title: "Project 1",
            excerpt: "First One"
        },
        {
            title: "Project 1",
            excerpt: "First One"
        },
        {
            title: "Project 1",
            excerpt: "First One"
        }
    ]
    return(
        <div className="container text-center my-5">
            <h1 className="font-weight-light">My <span className="text-danger">Projects</span>
            </h1>
            <div className="lead">I build products, just like this website</div>
            <div className="row my-5 pt-3">
                <div className="col-12 col-md-4 ny-2">
                    <div className="card shadow h-100">
                        <img className="card-img-top"
                        src={waterfall}
                        alt="Free Image" 
                        />
                        <div className="card-body">
                            <h4 className="card-title">Picture 1</h4>
                            <p className="crad-text">About Nature</p>
                            <a href="#" className="stretched-link"></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 ny-2">
                    <div className="card shadow h-100">
                        <img className="card-img-top"
                        src={waterfall}
                        alt="Free Image" 
                        />
                        <div className="card-body">
                            <h4 className="card-title">Picture 2</h4>
                            <p className="crad-text">About Nature</p>
                            <a href="#" className="stretched-link"></a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 ny-2">
                    <div className="card shadow h-100">
                        <img className="card-img-top"
                        src={waterfall}
                        alt="Free Image" 
                        />
                        <div className="card-body">
                            <h4 className="card-title">Picture 3</h4>
                            <p className="crad-text">About Nature</p>
                            <a href="#" className="stretched-link"></a>
                        </div>
                    </div>
                </div>
                <div className="my-5">
                    <a href="/" className="text-dark text-right">
                        <h5>See My Projects</h5>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectSection;