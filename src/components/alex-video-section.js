import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import VideoPlayer from './video-player';

import './video-section.scss';

import startFrame from '../images/alex_start_frame.jpg';
import mp4 from '../videos/alex.mp4';
import webm from '../videos/alex.webm';
const captions = require('file-loader!../videos/alex.vtt');

class AlexVideoSection extends React.Component {
  render() {
    return <Row id="alex-video-section" className="concept video-section" center="xs" middle="xs">
        <Col id="start" className="content" xs={10}>
          <div className="block">
            <div className="box top">
              <VideoPlayer startFrame={startFrame} videoMp4={mp4} videoWebm={webm} captions={captions} />
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
