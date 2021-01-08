import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="about" className="about">
                        <div className="container">
                            <div className="section-title">
                                <h2>About</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-right">
                                    <img src="assets/img/profile-img.jpg" className="img-fluid" alt=""></img>
                                </div>
                                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                                    <h3>Quality Assurance&amp; Web Developer.</h3>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Birthday:</strong> 12 Juli 1997</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Website:</strong> www.pubg.com</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +628291029384</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>City:</strong> Bintaro, Jakarta Selatan</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-6">
                                            <ul>
                                                <li><i className="icofont-rounded-right"></i> <strong>Age:</strong> 23</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> Bachelor's</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>PhEmailone:</strong> supernova@gmail.com</li>
                                                <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default About;