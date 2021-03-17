import React from 'react';

const About = () => {
    return (
        <div>
            <section className="colorlib-about" data-section="about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="row row-bottom-padded-sm animate-box"
                                data-animate-effect="fadeInLeft">
                                <div className="col-md-12">
                                    <div className="about-desc">
                                        <span className="heading-meta">
                                            About Us
                                        </span>
                                        <h2 className="colorlib-heading">
                                            Who Am I?
                                        </h2>
                                        <p>
                                            What's with the car photos you ask? 
                                            That is because rally racing is a great passion of mine!
                                            I love watching the rally drivers fearlessly
                                            fly through rough terrains and leave everyone and
                                            everything in the dust. The way the rally drivers adapt 
                                            to a whole new environment
                                            every race has always inspired me. New computer and
                                            web technologies keeps launching left and right but like the
                                            drivers, I have always looked to learn, adapt and use them to my advantage!
                                        </p>
                                        <p>
                                            Much like rallying, software development requires
                                            working in a fast paced environment. As a developer,
                                            I thrive in a workplace in which the whole team races against the clock
                                            but at the same time, where individuals can freely express their 
                                            creativity. If you are looking for a developer who is quick on their
                                            feet but who can also keep calm in a clutch situations, you've come to
                                            the right place.{' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="colorlib-about">
                <div className="colorlib-narrow-content">
                    <div className="row">
                        <div
                            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                            data-animate-effect="fadeInLeft">
                            <span className="heading-meta">
                                What am I good at?
                            </span>
                            <h2 className="colorlib-heading">
                                Here are some of my expertise
                            </h2>
                        </div>
                    </div>
                    <div className="row row-pt-md">
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-1">
                                <span className="icon">
                                    <i className="icon-phone3" />
                                </span>
                                <div className="desc">
                                    <h3>Front-end</h3>
                                    <p>
                                        I have solid experience in building
                                        client-side products using HTML, CSS and
                                        JavaScript along with frameworks such as
                                        React and Vue.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-3">
                                <span className="icon">
                                    <i className="icon-data" />
                                </span>
                                <div className="desc">
                                    <h3>Back-end</h3>
                                    <p>
                                        By building multiple sites and apps, I
                                        gained experience in building the
                                        back-end of web applications using PHP,
                                        Django and SQL.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 text-center animate-box">
                            <div className="services color-5">
                                <span className="icon">
                                    <i className="icon-bulb" />
                                </span>
                                <div className="desc">
                                    <h3>Data Visualization</h3>
                                    <p>
                                        I'm bilingual in English and Korean,
                                        giving me the ability to work almost
                                        anywhere around the world. Japanese is
                                        also among my expertise!
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*
          <div className="col-md-4 text-center animate-box">
              <div className="services color-2">
              <span className="icon">
                  <i className="icon-data" />
              </span>
              <div className="desc">
                  <h3>Dev Ops</h3>
                  <p>Jenkins , Kubernetes , Docker </p>
              </div>
              </div>
          </div>
          <div className="col-md-4 text-center animate-box">
              <div className="services color-4">
              <span className="icon">
                  <i className="icon-layers2" />
              </span>
              <div className="desc">
                  <h3>Graphic Design</h3>
                  <p>My friend knows .. P</p>
              </div>
              </div>
          </div>
          <div className="col-md-4 text-center animate-box">
              <div className="services color-6">
              <span className="icon">
                  <i className="icon-phone3" />
              </span>
              <div className="desc">
                  <h3>Digital Marketing</h3>
                  <p>I use Instagram eight hours a day :) </p>
              </div>
              </div>
          </div>
          */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
