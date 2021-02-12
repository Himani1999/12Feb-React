import React from 'react'

function Footer(){
    return(
        <footer>
            <div className="container-fluid text-center" style={{backgroundColor: "black"}}>
                <div className="py-5">
                    <h2 className="text-light">Interested in working with me?</h2>
                    <button className="btn btn-outline-light btn-lg mt-3">Let's talk</button>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-danger pb-3">More Links</h5>
                        <a href="#" className="text-light d-block">
                            Blogs
                        </a>
                        <a href="#" className="text-light d-block">
                            Home
                        </a>
                        <a href="#" className="text-light d-block">
                            Contact me
                        </a>
                        <a href="#" className="text-light">
                            Write a recommendation <i className="fas fa-heart text-light"></i>
                        </a>
                    </div>
                    <div className="col-12 col-md-4 text-light text-justify py-3">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu iaculis nisl. 
                            Aliquam erat volutpat. Curabitur malesuada est eu laoreet dictum. Morbi 
                            hendrerit nisi nec aliquet mattis. Suspendisse nec augue non nunc pretium vulputate 
                            in mattis quam. Mauris dignissim congue lacus nec euismod. Duis aliquet sem in dolor 
                            euismod, et varius ante volutpat. Maecenas gravida pretium ex ac condimentum.
                        </p>
                    </div>
                    <div className="col-12 col-md-4 py-3">
                        <h5 className="text-danger pb-3">Social</h5>
                        <a href="#">
                            <i className="fab fa-linkedin text-light h1 d-block"></i>
                        </a>
                        <a href="#">
                            <i className="fab fa-github text-light h1 d-block"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-envelope text-light h1 d-block"></i>
                        </a>
                    </div>
                </div>
                <div className="text-muted py-3">
                    <p>Copyright © Character 2020</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;