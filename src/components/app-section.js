import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Chart from './chart';

import './app-section.scss';

class AppSection extends React.Component {
  render() {
    return <Row id="intro-app" className="concept white" center="xs" middle="xs">
        <Col className="content" xs={12}>
          <div className="block">
            <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
              With a little help
            </h2>

            <Row around="xs" top="xs">
              <Col className="text" xs={10} lg={5} data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                <p>
                  Use flowra to <span className="highlight">
                    craft highly effective practice sessions
                  </span> that will help you grow as a performer.
                </p>
              </Col>

              <Col xs={12} md={7} lg={5}>
                <Chart name="inspired" />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>;
  }
}

export default AppSection;
