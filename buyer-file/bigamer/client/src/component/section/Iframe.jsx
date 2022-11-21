import React from 'react';
import profile from '../../pages/profile';

const Iframe = ({ source, isToken }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    if(isToken){
        return (
         <>
                <div className="video-section padding-top padding-bottom bg-attachment" style={{ backgroundImage: "url(/assets/images/video/bg.jpg)" }}>
                    <div className="container">
                        <br />
                        <div className="section-wrapper">
                            <div className="row g-4">
                                <div className="col-12">
                                    <div className="video-top" style={{ marginTop: "10px" }}>
                                        <div className="row g-4 justify-content-center">
                                            <div className="col-lg-12 col-12" >
                                                <div className="video-item w-100" >
                                                    <div className="video-inner position-relative w-100 h-100">
                                                        <iframe className="w-100" style={{height: "500px"}} src={source}></iframe>                                                  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
                </div><div className="col-md-12">
                    <div className="emdeb-responsive">
    
                    </div>
                </div></>
        );
    }
};

export default Iframe;