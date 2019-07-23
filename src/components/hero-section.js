import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';

import './hero-section.scss'

if (typeof window !== 'undefined') {
  // Pollyfill (required for Safari)
  require('smoothscroll-polyfill').polyfill();
}

class HeroSection extends React.Component {
  render() {
    return <Row id="intro-hero" center="xs" middle="xs">
        <Img sizes={this.props.bgImg.sizes} outerWrapperClassName="bgImg" />
        <div className="logo-wrapper fadeIn">
          <Row className="ctas" center="xs" middle="xs">
            <Col xs={6} className="start-xs">
              <a href="https://www.flowra.com">
                <svg
                className="logo"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={238.67}
                height={51.35}
                viewBox="0 0 238.67 51.35">
                  <title>flowra-logo</title>
                  <g id="ed2c3b5c-3a85-4bfe-bed1-e1d954e7e4fe">
                    <g>
                      <path d="M75.06,50.35H66.78V23.1H61.12V15.58h5.66V13.85a18.29,18.29,0,0,1,.9-6.31,9,9,0,0,1,2.9-4q2.76-2.28,8.63-2.28a19.06,19.06,0,0,1,3.59.28V8.68a10.8,10.8,0,0,0-3.17-.35,4.62,4.62,0,0,0-3.45,1.14,5.29,5.29,0,0,0-1.1,3.76v2.35h6.56V23.1H75.06Z" transform="translate(-2.13 -1.21)" fill="#fff"/>
                      <path d="M84.24,40.07V2.26h8.28V39a5.83,5.83,0,0,0,.93,3.69,3.94,3.94,0,0,0,3.21,1.14,8.78,8.78,0,0,0,2.48-.28v7.38a14.85,14.85,0,0,1-3.93.41Q84.24,51.32,84.24,40.07Z" transform="translate(-2.13 -1.21)" fill="#fff"/>
                      <path d="M117.91,51.39a18.67,18.67,0,0,1-13.46-5.31A17.47,17.47,0,0,1,98.93,33a17.48,17.48,0,0,1,5.52-13.11,19.7,19.7,0,0,1,26.91,0A17.48,17.48,0,0,1,136.88,33a17.47,17.47,0,0,1-5.52,13.11A18.68,18.68,0,0,1,117.91,51.39Zm0-7.52a10.41,10.41,0,0,0,7.66-3.1,10.72,10.72,0,0,0,3.1-7.8,10.5,10.5,0,0,0-3.1-7.73,10.91,10.91,0,0,0-15.39,0,10.77,10.77,0,0,0-3,7.73,11,11,0,0,0,3,7.8A10.49,10.49,0,0,0,117.91,43.87Z" transform="translate(-2.13 -1.21)" fill="#fff"/>
                      <path d="M159.86,30l-11,22.56-14.28-37h8.14l7.38,19.6,9.73-20.49,9.66,20.49,7.38-19.6H185l-14.28,37Z" transform="translate(-2.13 -1.21)" fill="#fff"/>
                      <path d="M193.81,50.35H185.6V26.41q0-11.8,12.9-11.8a31.09,31.09,0,0,1,6.07.55v7.38a20.8,20.8,0,0,0-4.35-.41q-3.38,0-4.9,1.28T193.81,28Z" transform="translate(-2.13 -1.21)" fill="#fff"/>
                      <path d="M221.41,14.82a15,15,0,0,1,7.21,1.62,7.75,7.75,0,0,1,3.9,4.17v-5h8.28V50.35h-8.28v-5a7.74,7.74,0,0,1-3.9,4.17,15,15,0,0,1-7.21,1.62A16.64,16.64,0,0,1,209,45.94a18.29,18.29,0,0,1-5-13,17.9,17.9,0,0,1,5-12.9A16.54,16.54,0,0,1,221.41,14.82Zm1.1,28.77a10.22,10.22,0,0,0,7.52-3,10,10,0,0,0,3.1-7.59,10,10,0,0,0-3.1-7.59,10.22,10.22,0,0,0-7.52-3,10,10,0,0,0-7.38,3,10.56,10.56,0,0,0-2.9,7.59,10.56,10.56,0,0,0,2.9,7.59A10,10,0,0,0,222.51,43.59Z" transform="translate(-2.13 -1.21)" fill="#fff"/>
                    </g>
                  </g>
                  <g id="2dde2269-0362-45d6-b6a9-8f8ac5ebe11d">
                    <g id="90f55579-6f08-460e-b881-06dc03e4f74b">
                      <g id="75ffb9bc-a85a-40ef-8283-7f65278aaf4e">
                        <g id="7bff4a30-1cbb-458a-9e88-24620d6657f9">
                          <path d="M17.33,11.67a14.76,14.76,0,0,1,.47-3.59h0A9.83,9.83,0,0,1,36.93,9.91a9.19,9.19,0,0,1-.11,2.19c-.56,3.23-2.57,6.3-4.68,8.8L27.21,10.59l-3.77,8a26.41,26.41,0,0,0-6.11-7" transform="translate(-2.13 -1.21)" fill="#fff" opacity="0.99"/>
                        </g>
                        <g id="728af327-77e9-45cd-89ff-1b4d34735ba6">
                          <path d="M9.22,32.57A14.23,14.23,0,0,1,6,31H6a9.82,9.82,0,0,1,7.82-17.47,8.86,8.86,0,0,1,2,.79c2.82,1.53,5,4.38,6.68,7.15L11.39,22.91,17.64,29a26.16,26.16,0,0,0-8.42,3.6" transform="translate(-2.13 -1.21)" fill="#fff" opacity="0.99"/>
                        </g>
                        <g id="bc06080d-39f7-4461-bb9f-caae59ab39e3">
                          <path d="M25.73,47.11a13.37,13.37,0,0,1-2.45,2.42h0a10.14,10.14,0,0,1-11.56-.36A9.33,9.33,0,0,1,8.78,36.85a8.25,8.25,0,0,1,1.36-1.58c2.31-2.1,5.72-3.22,8.88-3.85L17.07,42.07l7.69-3.81a24.59,24.59,0,0,0,1,8.84" transform="translate(-2.13 -1.21)" fill="#fff" opacity="0.99"/>
                        </g>
                        <g id="cd402678-314e-4d34-bbfe-5a2ffc3b60fe">
                          <path d="M44.34,35.19a13.36,13.36,0,0,1,1.58,3.06h0a10.12,10.12,0,0,1-3.79,10.92,9.35,9.35,0,0,1-12.65-.87,8.25,8.25,0,0,1-1.11-1.77c-1.31-2.83-1.37-6.41-1-9.61l9.61,5L35.6,33.47a24.65,24.65,0,0,0,8.74,1.72" transform="translate(-2.13 -1.21)" fill="#fff" opacity="0.99"/>
                        </g>
                        <g id="1b597b38-f1f3-418a-89fe-102ae5b04e7f">
                          <path d="M38.91,14a14.23,14.23,0,0,1,3.49-.64h0a9.82,9.82,0,0,1,4.09,18.7,8.86,8.86,0,0,1-2.08.55c-3.18.44-6.65-.54-9.63-1.79l8.13-7.77-8.63-1.16A26.13,26.13,0,0,0,38.91,14" transform="translate(-2.13 -1.21)" fill="#fff" opacity="0.99"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </Col>
            <Col xs={6} className="end-xs">
              <a href="https://www.flowra.com/" className="btn cta primary">
                open<span> flowra</span>
              </a>
            </Col>
          </Row>
        </div>

        <Col className="content" xs={12}>
          <h1 className="headline">
            <div className="stop">
              Stop wasting your practice time.
            </div>
            <div className="push">
              <span className="highlight">Push yourself</span> with flowra.
            </div>
          </h1>
        </Col>

        <a className="scroll" onClick={this.watchVideo}>
          <span />
        </a>
      </Row>;
  }
}

export default HeroSection;
