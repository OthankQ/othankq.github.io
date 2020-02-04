import React from 'react';

const Introduction = () => {
    return (
        <div>
            <section
                id="colorlib-hero"
                className="js-fullheight"
                data-section="home">
                <div className="flexslider js-fullheight">
                    <ul className="slides">
                        <li
                            style={{
                                backgroundImage: 'url(images/img_bg.jpg)'
                            }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1>
                                                    Hey there! <br />
                                                    I'm Ryan!
                                                </h1>
                                                <p>
                                                    <a
                                                        className="btn btn-primary btn-learn"
                                                        href="https://docs.google.com/document/d/1_pd73OpzX7jLI41JkcHU0xt9o9byxCuNNLo1pgxMwQs/edit?usp=sharing"
                                                        target="_blank">
                                                        View CV
                                                        <i className="icon-download4" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li
                            style={{
                                backgroundImage: 'url(images/img_bg.jpg)'
                            }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1>
                                                    Checkout my
                                                    <br /> Projects!
                                                </h1>
                                                <p>
                                                    <a
                                                        className="btn btn-primary btn-learn"
                                                        href="https://github.com/OthankQ"
                                                        target="_blank">
                                                        View Projects{' '}
                                                        <i className="icon-briefcase3" />
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Introduction;
