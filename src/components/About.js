import React from 'react';

function About(){
    return(
        <div className="bg-light my-5">
            <div className="container text-center py-5">
                <h1 className="text-center font-weight-light">
                    <span className="text-danger">About</span> me
                </h1>
                <div className="lead">I can play role of my Cartoon Characters.</div>
                <div className="row">
                    <div className="col-12 col-md-6 px-5 pt-5">
                        <h5>What Other I Can Do?</h5>
                        <p className="text-justify">
                            lorem ipsum dolor sit amet, quis mosturd labore tempor ut labore exercitation.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 px-5 pt-5">
                        <h5>What Am I Doing Currently?</h5>
                        <p className="text-justify">
                            lorem ipsum dolor sit amet, quis mosturd labore tempor ut labore exercitation.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 px-5 pt-5">
                        <h5>What Do I Believe In?</h5>
                        <p className="text-justify">
                            lorem ipsum dolor sit amet, quis mosturd labore tempor ut labore exercitation.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 px-5 pt-5">
                        <h5>How Can I Help You?</h5>
                        <p className="text-justify">
                            lorem ipsum dolor sit amet, quis mosturd labore tempor ut labore exercitation.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;