import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                  <div className="hero-container" data-aos="fade-in">
                    <h3>Bagus Panghegar Muh Abduh</h3>
                    <p>I'm <span className="typed" data-typed-items="Developer, Quality Assurance, Photographer, Scrum Master"></span></p>
                  </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Home;