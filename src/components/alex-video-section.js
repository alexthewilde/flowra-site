import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import VideoPlayer from './video-player';

import './video-section.scss';

import alexStartFrame from '../images/alex_start_frame.jpg';
import alexMp4 from '../videos/alex.mp4';
import alexWebm from '../videos/alex.webm';

class AlexVideoSection extends React.Component {
  // block - margin-bottom:0
  // video
  // block - margin-top:0
  render() {
    return <Row id="alex-video-section" className="concept video-section" center="xs" middle="xs">
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
          </div>
        </Col>
      </Row>;
  }
}

export default AlexVideoSection;
