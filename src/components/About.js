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
                                            I am a Web Programming and Design
                                            student from Purdue University with
                                            CGT as my major. New computer and
                                            web technologies are my passion and
                                            I am always looking for new
                                            opportunities and ideas I can learn
                                            from!
                                        </p>
                                        <p>
                                            After discovering my passion for
                                            programming and web development, I
                                            couldn't get enough of it. I made
                                            apps with various functionality
                                            using vanilla JavaScript, React,
                                            Redux and Express using Node. It has
                                            helped me get familiar with the most
                                            recent technology used by the
                                            industry. Now my goal is to turn
                                            this passion into a career. I am
                                            looking forward to gain new valuable
                                            experience while contributing to a
                                            team.{' '}
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
                                        Node and SQL.
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
                                    <h3>Multilingual</h3>
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
