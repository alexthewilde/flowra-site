import React from 'react';
import Img from 'gatsby-image';
import { Row, Col } from 'react-flexbox-grid';

import './practice-section.scss';

class PracticeSection extends React.Component {
  render() {
    return <Row id="intro-practice" className="concept" center="xs" middle="xs">
        <Col id="practice" className="content" xs={12}>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              Practice smarter
            </h2>

            <Row center="xs" around="lg" middle="xs">
              <Col className="text start-lg" xs={10} lg={5} data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                <p className="hyphens">
                  You don't need to practice more to become better. In fact, many of the best performers practice little – but
                  effectively.
                </p>
                <p className="hyphens">
                  The key to effective practice is inspiration and focus.
                </p>
              </Col>
              <Col className="box" xs={10} md={7} lg={5}>
                <ol>
                  <li className="hyphens find">
                    <div>Find something to improve in a performance</div>
                  </li>
                  <li className="hyphens deep">
                    <div>
                      Deep practice the part until you master it
                      effortlessly
                    </div>
                  </li>
                </ol>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default PracticeSection;
