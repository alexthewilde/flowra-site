import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chart from './chart';

import './problem-section.scss';

class ProblemSection extends React.Component {
  render() {
    return <Row id="intro-problem" className="concept" center="xs" middle="xs">
        <Col className="content" xs={12}>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              Zero progress
            </h2>

            <Row center="xs" around="lg" middle="xs">
              <Col className="box top" xs={10} md={7} lg={5}>
                <Chart name="uninspired" />
              </Col>
              <Col className="text start-lg" xs={10} lg={5} data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                <p className="hyphens">
                  A song performance stagnates as soon as you run out
                  of clear practice tasks.
                </p>
                <p className="hyphens">
                  During practice, you&#39;re mindlessly playing song after
                  song but you&#39;re not getting better anymore.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default ProblemSection;
