import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './open-callout.scss';

class OpenCallout extends React.Component {
  render() {
    return  <Row id="open-callout" className="concept" center="xs" middle="xs">
          <Col className="content" xs={10}>
            <div className="block">
              <h2 className="headline jumbo" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
                Ready?
              </h2>

              <a href="https://www.flowra.com/" className="btn cta primary">
                open flowra
              </a>
            </div>
          </Col>
        </Row>;
  }
}

export default OpenCallout;
