import React, { Component } from 'react';

export class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <a
            href="#"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar">
            <i />
          </a>
          <aside
            id="colorlib-aside"
            role="complementary"
            className="border js-fullheight">
            <div className="text-center">
              <div
                className="author-img"
                style={{
                  backgroundImage: 'url(images/android-chrome-512x512.png)'
                }}
              />
              <h1 id="colorlib-logo">
                <a href="index.html">Ryan Hyunwoo Kim</a>
              </h1>
              <span className="email">
                <i className="icon-mail" /> ryank9462@gmail.com
              </span>
              <br />
              <span className="number">
                <i className="icon-phone" /> +1-765-775-9539
              </span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active">
                    <a href="#" data-nav-section="home">
                      Introduction
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="about">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" data-nav-section="experience">
                      Experience
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/ryan.kim.33046"
                    target="_blank">
                    <i className="icon-facebook2" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/RyanK_HW" target="_blank">
                    <i className="icon-twitter2" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/hyunwoo-kim-codes/"
                    target="_blank">
                    <i className="icon-linkedin2" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/OthankQ" target="_blank">
                    <i className="icon-github" />
                  </a>
                </li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p>
                <small>
                  © Copyright ©
                  <script type="text/javascript">
                    document.write(new Date().getFullYear());
                  </script>
                  2019 All rights reserved | This template is made with{' '}
                  <i class="icon-heart" aria-hidden="true" /> by{' '}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </small>
              </p>
            </div>
          </aside>
        </div>
      </div>
    );
  }
}

export default Sidebar;
