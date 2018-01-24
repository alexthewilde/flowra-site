import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chart from './chart';

import './app-section.scss';

class AppSection extends React.Component {
  render() {
    return <Row id="intro-app" className="concept" center="xs" middle="xs">
        <Col className="content" xs={12}>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              With a little help
            </h2>

            <Row center="xs" around="lg" middle="xs">
              <Col className="box top" xs={10} md={7} lg={5}>
                <Chart name="inspired" />
              </Col>

              <Col className="text start-lg" xs={10} lg={5} data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                <p>
                  Use flowra to push yourself with highly effective practice
                  sessions.
                </p>

                <p className="hyphens">
                  Grow any song performance beyond average.
                </p>

                <p className="hyphens">
                  <span className="highlight">
                    Become a performer that people remember.
                  </span>
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default AppSection;
