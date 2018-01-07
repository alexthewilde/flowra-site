import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chart from './chart';

import './problem-section.scss';

class ProblemSection extends React.Component {
  render() {
    return <Row id="intro-problem" className="concept" center="xs" middle="xs">
        <Col id="start" className="content" xs={12}>
          <div className="block" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
            <h2 className="headline jumbo">
              Tired of practicing but not getting better?
            </h2>

            <Row between="xs" top="xs">
              <Col xs={12} sm={5}>
                <Chart name="uninspired" />
              </Col>
              <Col className="text" xs={12} sm={5}>
                <p className="hyphens">
                  Your song performance stops to improve as soon as you run
                  out of clear practice tasks.
                </p>
                <p className="hyphens">
                  You're mindlessly playing song after song
                  without getting better anymore.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default ProblemSection;
