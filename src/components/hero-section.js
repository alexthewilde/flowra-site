import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './hero-section.scss'

import logoTransparent from '../images/flowra-logo-transparent.png'
import logoWhite from '../images/flowra-logo-white.png'
import bgImage from '../images/aurora-borelias.jpg'

class HeroSection extends React.Component {
  watchVideo() {
    document
      .querySelector('#intro-problem')
      .scrollIntoView({
        behavior: 'smooth'
      });
  }

  render() {
    return <Row id="intro-hero" style={{ backgroundImage: `url(${bgImage})` }} center="xs" middle="xs">
        <Col className="content" xs={12}>
          <img src={logoTransparent} className="logo" />
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

          <img src={logoWhite} className="logo-type" />
        </Col>

        <a className="scroll" onClick={this.watchVideo}>
          <span />
        </a>
      </Row>;
  }
}

export default HeroSection;
