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
                            style={
                                {
                                    backgroundImage: 'url(images/rally_dirt.jpg)',
                                }
                            }>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner js-fullheight">
                                            <div className="desc">
                                                <h1 style={{color: 'white'}}>
                                                    Hey there! <br />
                                                    I'm Ryan!
                                                </h1>
                                                <p>
                                                    <a
                                                        style={{color: 'white', fontWeight: '800', border:'3px solid #fff'}}
                                                        className="btn btn-primary btn-learn"
                                                        href="https://drive.google.com/file/d/1w0WVCvp7LTUpGkldjnBIy3u__bkbBN7t/view?usp=sharing"
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
                                backgroundImage: 'url(images/rally_mud.jpg)',
                            }}>
                            <div className="overlay" />
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                        <div className="slider-text-inner">
                                            <div className="desc">
                                                <h1 style={{color: 'white'}}>
                                                    Checkout my
                                                    <br /> Projects!
                                                </h1>
                                                <p>
                                                    <a
                                                        style={{color: 'white', fontWeight: '800', border:'3px solid #fff'}}
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
