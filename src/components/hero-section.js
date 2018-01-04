import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './hero-section.scss'

import logoTransparent from '../images/flowra-logo-transparent.png'
import logoWhite from '../images/flowra-logo-white.png'
import bgImage from '../images/aurora-borelias.jpg'

class HeroSection extends React.Component {
  useFlowra() {
    console.log('use flowra');
  }

  watchVideo() {
    console.log('watch video');
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
            <Col xs={12} sm={6}>
              <button className="cta" onClick={this.useFlowra}>
                <span>use flowra</span>
              </button>
            </Col>
            <Col xs={12} sm={6}>
              <button className="" onClick={this.watchVideo}>
                <span>watch video</span>
              </button>
            </Col>
          </Row>

          <img src={logoWhite} className="logo-type" />
        </Col>

        <a href="#start" className="scroll">
          <span />
        </a>
      </Row>;
  }
}

export default HeroSection;
