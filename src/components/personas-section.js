import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';

import './personas-section.scss';

class PersonasSection extends React.Component {
  render() {
    return <Row id="intro-personas" className="personas" center="xs" middle="xs">
        <Img sizes={this.props.bgImg.sizes} outerWrapperClassName="bgImg" />
        <Col className="content" xs>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              Get started
            </h2>

            <div className="call-to-action">
              <a href="https://www.flowra.com/go" className="btn cta primary">
                open flowra
              </a>
            </div>

            <Row center="xs" top="xs" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              <Col className="persona first-time" xs={10} sm={5}>
                <span className="sub">For first-time performers</span>
                <strong className="headline">
                  Prepare for <br />your first gig
                </strong>
              </Col>

              <Col className="persona experienced" xs={10} sm={5}>
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
