import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';

import './hero-section.scss'

import logoTransparent from '../images/flowra-logo-transparent.png'
import logoWhite from '../images/flowra-logo-white.png'

if (typeof window !== 'undefined') {
  // Pollyfill (required for Safari)
  require('smoothscroll-polyfill').polyfill();
}

class HeroSection extends React.Component {
  watchVideo() {
    document.querySelector('#start').scrollIntoView({
      // Scroll exactly to top of target element
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }

  render() {
    return <Row id="intro-hero" center="xs" middle="xs">
        <Img sizes={this.props.bgImg.sizes} outerWrapperClassName="bgImg" />
        <Col className="content" xs={12}>
          <div className="logo-wrapper">
            <img src={logoTransparent} className="logo" />
          </div>
          <h1 className="headline" data-scroll="toggle(.hidden, .fadeIn)">
            <div className="fadeIn">Practice with inspiration.</div>
            <div className="fadeInLater">
              Grow stellar performances.
            </div>
          </h1>

          <Row className="ctas" center="xs" middle="xs">
            <Col xs={12} sm={6} last="xs" first="md" className="end-sm">
              <a className="btn cta light" onClick={this.watchVideo}>
                learn more
              </a>
            </Col>
            <Col xs={12} sm={6} first="xs" last="md" className="start-sm">
              <a href="https://www.flowra.com/go" className="btn cta primary">
                open flowra
              </a>
            </Col>
          </Row>

          <div className="logo-type-wrapper">flowra</div>
        </Col>

        <a className="scroll" onClick={this.watchVideo}>
          <span />
        </a>
      </Row>;
  }
}

export default HeroSection;
