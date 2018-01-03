import React from 'react';

import './hero-section.scss'

import logoTransparent from '../images/flowra-logo-transparent.png'
import logoWhite from '../images/flowra-logo-white.png'
import bgImage from '../images/aurora-borelias.jpg'

class HeroSection extends React.Component {
  render() {
    return <div id="intro-hero" className="row start-xs middle-xs" style={{backgroundImage: `url(${bgImage})`}}>
        <div className="content">
          <img src={logoTransparent} className="logo" />
          <h1 className="headline">
            Effective practice that grows average into <span>
              stellar performers
            </span>
          </h1>

          <div className="ctas row center-xs middle-xs">
            <div className="col-xs-12 col-sm-6">
              <button className="cta">
                <span>use flowra</span>
              </button>
            </div>
            <div className="col-xs-12 col-sm-6">
              <button className="">
                <span>watch video</span>
              </button>
            </div>
          </div>

          <img src={logoWhite} className="logo-type" />
        </div>

        <a href="#start" className="scroll">
          <span />
        </a>
      </div>;
  }
}

export default HeroSection;
