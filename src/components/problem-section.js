import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chart from './chart';

import './problem-section.scss';

class ProblemSection extends React.Component {
  render() {
    return <Row id="intro-problem" className="concept" center="xs" middle="xs">
        <Col id="start" className="content" xs={12}>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              Tired of practicing but not getting better?
            </h2>

            <Row around="xs" top="xs">
              <Col xs={12} md={7} lg={5}>
                <Chart name="uninspired" />
              </Col>
              <Col className="text" xs={10} lg={5} data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                <p className="hyphens">
                  Your song performance stops to improve as soon as you run
                  out of clear practice tasks.
                </p>
                <p className="hyphens">
                  You're mindlessly playing song after song without getting
                  better anymore.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default ProblemSection;
