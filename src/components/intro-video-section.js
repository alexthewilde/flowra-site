import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import VideoPlayer from './video-player';

import './video-section.scss';

import introStartFrame from '../images/intro_start_frame.jpg';
import introMp4 from '../videos/intro.mp4';
import introWebm from '../videos/intro.webm';

class IntroVideoSection extends React.Component {
  // block - margin-bottom:0
  // video
  // block - margin-top:0
  render() {
    return <Row id="intro-video-section" className="concept video-section" center="xs" middle="xs">
        <Col id="start" className="content" xs={10}>
          <div className="block">
            <div className="text">
              <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                Watch how it works:
              </h2>
            </div>

            <div className="box top">
              <VideoPlayer startFrame={introStartFrame} videoMp4={introMp4} videoWebm={introWebm} />
            </div>
          </div>
        </Col>
      </Row>;
  }
}

export default IntroVideoSection;
