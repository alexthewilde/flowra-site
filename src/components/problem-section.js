import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './problem-section.scss';

class ProblemSection extends React.Component {
  render() {
    return <Row id="intro-problem" className="concept" center="xs" middle="xs">
        <Col id="start" className="content" xs={12}>
          <div className="block" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
            <h2 className="headline jumbo">
              Tired of practicing but not getting better?
            </h2>

            <Row center="xs" top="xs">
              <Col xs={12} sm={6}>
                <intro-chart name="uninspired" />
              </Col>
              <Col className="text" xs={12} sm={6}>
                <p className="hyphens">
                  Your song performance stops to improve as soon as you run
                  out of clear practice tasks.
                </p>
                <p className="hyphens">
                  Instead of working deliberately on performance details
                  during practice, you're mindlessly playing song after song
                  without getting any better.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default ProblemSection;
