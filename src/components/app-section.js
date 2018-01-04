import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chart from './chart';

import './app-section.scss';

class AppSection extends React.Component {
  render() {
    return <Row id="intro-app" className="concept white" center="xs" middle="xs">
        <Col className="content">
          <div className="block" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
            <h2 className="headline jumbo">With a little help</h2>

            <Row center="xs" top="xs">
              <Col className="text" xs={12} sm={6}>
                <p>
                  Use flowra to <span className="highlight">
                    craft highly effective practice sessions
                  </span>
                  that will help you grow as a performer.
                </p>
              </Col>

              <Col xs={12} sm={6}>
                <Chart name="inspired" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default AppSection;
