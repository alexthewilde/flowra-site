import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './hero-section.scss'

import logoTransparent from '../images/flowra-logo-transparent.png'
import logoWhite from '../images/flowra-logo-white.png'
import bgImage from '../images/aurora-borelias.jpg'

if (typeof window !== 'undefined') {
  // Pollyfill (required for Safari)
  require('smoothscroll-polyfill').polyfill();
}

class HeroSection extends React.Component {
  watchVideo() {
    document
      .querySelector('#start')
      .scrollIntoView({
        // Scroll exactly to top of target element
        block: 'start',
        inline: 'nearest',
        behavior: 'smooth'
      });
  }

  render() {
    return <Row id="intro-hero" style={{ backgroundImage: `url(${bgImage})` }} center="xs" middle="xs">
        <Col className="content" xs={12}>
          <img src={logoTransparent} className="logo" width="150" height="146" />
          <h1 className="headline">
            Effective practice that grows average into <span>
              stellar performers
            </span>
          </h1>

          <Row className="ctas" center="xs" middle="xs">
            <Col xs={12} sm={6} className="end-sm">
              <a className="btn cta light" onClick={this.watchVideo}>
                learn more
              </a>
            </Col>
            <Col xs={12} sm={6} className="start-sm">
              <a href="https://www.flowra.com/go" className="btn cta primary">
                open flowra
              </a>
            </Col>
          </Row>

          <img src={logoWhite} className="logo-type" width="130" height="61" />
        </Col>

        <a className="scroll" onClick={this.watchVideo}>
          <span />
        </a>
      </Row>;
  }
}

export default HeroSection;
