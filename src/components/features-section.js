import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import VideoPlayer from './video-player';

import './features-section.scss';

class FeaturesSection extends React.Component {
  // block - margin-bottom:0
  // video
  // block - margin-top:0
  render() {
    return <div id="intro-video">
        <Row className="concept white top" center="xs" middle="xs">
          <Col className="content" xs={12}>
            <div className="block" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              <h2 className="headline jumbo">Loop. Record. Compare.</h2>
            </div>
          </Col>
        </Row>
        <VideoPlayer />
        <Row className="concept white bottom" center="xs" middle="xs">
          <Col className="content" xs={12}>
            <div className="block">
              <div className="text">
                <p className="hyphens">
                  Flowra gives you all the tools you need for deep practice.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </div>;
  }
}

/* TODO Sticky header "Effective Practice = Inspiration + Flow + Structure" + Content sections */
/*
<div class="intro-features concept white" layout="column" layout-align="start center">
  <div id="sticky-header">
    <div class="header" layout="row" layout-align="center center">
      <span>Effective Practice</span>
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
