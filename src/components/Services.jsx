import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
    render() {
        return (
            <React.Fragment>
                <main id="main">
                    <section id="services" className="services">
                        <div className="container">
                            <div className="section-title">
                                <h2>Awards</h2>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
                                    <div className="icon"><i className="icofont-computer"></i></div>
                                    <h4 className="title"><Link to="">Komputer</Link></h4>
                                    <p className="description">partisipasi kegiatan hackton 2018</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="100">
                                    <div className="icon"><i className="icofont-chart-bar-graph"></i></div>
                                    <h4 className="title"><Link to="">Olahraga</Link></h4>
                                    <p className="description">Lomba lari 1000km kedua</p>
                                </div>
                                <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="300">
                                    <div className="icon"><i className="icofont-image"></i></div>
                                    <h4 className="title"><Link to="">Lingkungan</Link></h4>
                                    <p className="description">Kejuaraan dalam pengambilan foto back nature 2019</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="testimonials" className="testimonials section-bg">
                        <div className="container">
                            <div className="section-title">
                                <h2>Interest</h2>
                                <p>Minat dalam dari diri saya itu selalu bekerja keras, bertanggung jawab, jujur, dan adil</p>
                            </div>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}

export default Services;