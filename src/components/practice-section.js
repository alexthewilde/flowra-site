import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';

import './practice-section.scss';

class PracticeSection extends React.Component {
  render() {
    return <Row id="intro-practice" className="concept" center="xs" middle="xs">
        <Img sizes={this.props.bgImg.sizes} outerWrapperClassName="bgImg" />
        <Col id="start" className="content" xs={10} lg={8}>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              Practice smarter,<br />not more
            </h2>

            <div className="practice-time">
              <p className="hyphens" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                The best performers are masters of effective practice:
              </p>
              <ol>
                <li className="hyphens find">
                  <div>Find something to improve in a performance</div>
                </li>
                <li className="hyphens deep">
                  <div>
                    Deep practice the part until you master all its details
                  </div>
                </li>
              </ol>
              <p className="hyphens" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                Over time, practicing this way makes anyone grow from average to outstanding performer.
              </p>
            </div>
          </div>
        </Col>
      </Row>;
  }
}

export default PracticeSection;
