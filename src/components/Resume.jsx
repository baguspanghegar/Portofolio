import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="resume" className="resume">
                        <div className="container">
                            <div className="section-title">
                              <h2>Experience</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-up">
                                    <h3 className="resume-title">Sumary</h3>
                                    <div className="resume-item pb-0">
                                        <h4>Alex Smith</h4>
                                        <p><em>saya pernah lulusan kuliah tercepat yaitu 2.5 tahun dan ingin punya perusahaan sendiri :)</em></p>
                                        <ul>
                                          <li>Bintaro, Jakarta Selatan</li>
                                          <li>(021) 456-7891</li>
                                          <li>supernova@gmail.com</li>
                                        </ul>
                                    </div>
                                    <h3 className="resume-title">Education</h3>
                                    <div className="resume-item">
                                        <h4>Bachelor of  Informatic Enginner</h4>
                                        <h5>2015 - 2017</h5>
                                        <p><em>Gunadarma University</em></p>
                                    </div>
                                    <div className="resume-item">
                                        <h4>SMAN 6 Jakarta</h4>
                                        <h5>2012 - 2015</h5>
                                        <p><em>Kebayaron Baru, Jakarta Selatan</em></p>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                    <h3 className="resume-title">About Experience</h3>
                                    <div className="resume-item">
                                        <h4>Senior graphic design specialist</h4>
                                        <h5>2019 - Present</h5>
                                        <p><em>Experion, New York, NY </em></p>
                                        <ul>
                                            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
                                            <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                                            <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                                            <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li>
                                        </ul>
                                    </div>
                                    <div className="resume-item">
                                        <h4>Graphic design specialist</h4>
                                        <h5>2017 - 2018</h5>
                                        <p><em>Stepping Stone Advertising, New York, NY</em></p>
                                        <ul>
                                            <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                                            <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                                            <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                                            <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
                                        </ul>
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

export default Resume;