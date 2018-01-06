import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './personas-section.scss';

import bgImage from '../images/concert_bg.jpg';

class PersonasSection extends React.Component {
  useFlowra() {
    console.log('use flowra')
  }

  render() {
    return <Row id="intro-personas" className="personas" style={{ backgroundImage: `url(${bgImage})` }} center="xs" middle="xs">
        <Col className="content" xs>
          <div data-scroll="toggle(.fromBottomIn, .fromBottomOut)" className="block">
            <h2 className="headline jumbo">Get started</h2>

            <div className="call-to-action">
              <a href="#" className="btn cta primary" onClick={this.useFlowra}>
                Get flowra free
              </a>
            </div>

            <Row center="xs" middle="xs">
              <Col className="persona first-time" xs={12} sm={5}>
                <span className="sub">For first-time performers</span>
                <strong className="headline">
                  Prepare for <br />your first gig
                </strong>
              </Col>

              <Col className="persona experienced" xs={12} sm={5}>
                <span className="sub">For experienced performers</span>
                <strong className="headline">
                  Advance from<br />good to great
                </strong>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default PersonasSection;