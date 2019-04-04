import React from 'react'

import logo from "../img/umd-footer-logo.png"

const Footer = () => (
  <footer role="contentinfo">
    <section className="container">
      <div className="row">
        <div className="col-lg-4">
          <a href="http://www.umd.edu/" aria-label="Visit the university of maryland main homepage"><img className="img-fluid umd-logo" src={logo} alt="University of Maryland Logo" /></a>
        </div>

        <div className="col-lg-5">
          <p className="grey footer-info"><strong>Office of Strategic Communications</strong><br />Turner Hall  /  7736 Baltimore Ave.  /  College Park, MD 20742-5151, USA<br />P: 301.405.TERP   /  <a href="mailto:today@umd.edu">today@umd.edu</a></p>
        </div>

        <div className="col-lg-3">
          <div className="social clearfix">
            <ul className="menu navbar-nav no-pad" aria-label="footer social media menu">
              <li><a className="no-pad" href="https://www.youtube.com/user/UMD2101" target="_blank" rel="noopener noreferrer" aria-label="Visit the university of maryland Youtube Channel"><i className="fa fa-youtube-play" /></a></li>
              <li><a className="no-pad" href="https://www.facebook.com/UnivofMaryland" target="_blank" rel="noopener noreferrer" aria-label="like the university of maryland on facebook"><i className="fa fa-facebook" /></a></li>
              <li><a className="no-pad" href="https://twitter.com/UofMaryland" target="_blank" rel="noopener noreferrer" aria-label="follow the university of maryland on twitter"><i className="fa fa-twitter" /></a></li>
              <li><a className="no-pad" href="https://www.instagram.com/univofmaryland/" target="_blank" rel="noopener noreferrer" aria-label="follow the university of maryland on instagram"><i className="fa fa-instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <div className="row sub-footer">
      <div className="navbar-bottom clearfix">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <a className="nav-link" href="http://calendar.umd.edu/">Calendar</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://umd.edu/web-accessibility">Web Accessibility</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://umd.service-now.com/itsc/?id=kb_article&article=KB0012192">Privacy Policy</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="http://www.urhome.umd.edu/">Division of University Relations</a>
          </li>
          <li className="nav-item copyright">
            © {new Date().getFullYear()}, Built by
            {` `}
            <a href="https://www.gatsbyjs.org">OSC</a>
          </li>
        </ul>
      </div>
    </div>

  </footer>
)

export default Footer
