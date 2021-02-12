import React from 'react';
import Picture from '../img/images.jpeg';

function Title(props){
    //const name = "All Of You!";
    //const leadTest = "I am a cartoon character";
    console.log(props);
    const{ name, leadTest } = props;
    return(
        <>
          <div className="container">
              <div className="row text-center align-items-center my-5 py-5">
                  <div className="col-12 col-md-6">
                      <img
                        className="img-fluid rounded-circle w-75"
                        src={Picture}
                        alt="Star" 
                      />
                  </div>
                  <div className="col-12 col-md-6 pt-5">
                      <div className="font-weight-light" style={{fontSize: "50px"}}>
                          Hi, <span className="text-danger">{name}</span> 
                      </div>
                      <h4 className="font-weight-light">{leadTest}</h4>
                  </div>
              </div>
          </div>
        </>
    );
}

export default Title;