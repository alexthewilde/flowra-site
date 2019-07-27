import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';
import OpenButton from './open-button';

import './personas-section.scss';

class PersonasSection extends React.Component {
  render() {
    return <Row id="intro-personas" className="personas" center="xs" middle="xs">
        <Img sizes={this.props.bgImg.sizes} outerWrapperClassName="bgImg" />
        <Col className="content" xs data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
          <div className="block">
            <h2 className="headline jumbo">Start now</h2>

            <div className="call-to-action">
              <OpenButton />
            </div>

            <Row center="xs" top="xs">
              <Col className="persona first-time" xs={10} sm={5}>
                <div className="sub">First-time performers</div>
                <div className="headline">
                  Prepare for<br />your first gig
                </div>
              </Col>

              <Col className="persona experienced" xs={10} sm={5}>
                <div className="sub">Experienced performers</div>
                <div className="headline">
                  Advance from<br />good to great
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default PersonasSection;
