import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import VideoPlayer from './video-player';

import './features-section.scss';

import alexStartFrame from '../images/alex_start_frame.jpg';
import alexMp4 from '../videos/alex.mp4';
import alexWebm from '../videos/alex.webm';

import introStartFrame from '../images/intro_start_frame.jpg';
import introMp4 from '../videos/intro.mp4';
import introWebm from '../videos/intro.webm';

class FeaturesSection extends React.Component {
  // block - margin-bottom:0
  // video
  // block - margin-top:0
  render() {
    return <Row id="intro-video" className="concept" center="xs" middle="xs">
        <Col id="start" className="content" xs={10}>
          <div className="block">
            <div className="box top">
              <VideoPlayer startFrame={alexStartFrame} videoMp4={alexMp4} videoWebm={alexWebm} />
            </div>

            <h2 className="headline sub">
              <div className="learn">
                Learn from the best. <span className="highlight">Become a better performer.</span>
              </div>
            </h2>

            <div className="text">
              <p className="hyphens">
                Watch how Flowra works:
              </p>
            </div>

            <div className="box top">
              <VideoPlayer startFrame={introStartFrame} videoMp4={introMp4} videoWebm={introWebm} />
            </div>
          </div>
        </Col>
      </Row>;
  }
}

/* TODO Sticky header "Effective Practice = Inspiration + Flow + Structure" + Content sections */
/*
<div class="intro-features concept" layout="column" layout-align="start center">
  <div id="sticky-header">
    <div class="header" layout="row" layout-align="center center">
      <span>Practice music in flow</span>
      <span>&nbsp;&nbsp;=&nbsp;&nbsp;</span>
      <span class="inspiration highlight">Inspiration&nbsp;&nbsp;</span>
      <span class="flow">+&nbsp;&nbsp;Flow&nbsp;&nbsp;</span>
      <span class="structure">+&nbsp;&nbsp;Structure</span>
    </div>
  </div>

  <div class="content" layout="column">
    <div class="block" style="margin-top: 50px; margin-bottom: 30px;">
      <div class="practice">
        <h2 class="headline">Find inspiration</h2>
        <div class="practice-content">
          <p class="hyphen">
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
            Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
*/

export default FeaturesSection;
