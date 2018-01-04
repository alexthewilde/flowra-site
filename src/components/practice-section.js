import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './practice-section.scss';
import bgImage from '../images/instruments.jpg';

class PracticeSection extends React.Component {
  render() {
    return <Row id="intro-practice" className="concept" style={{ backgroundImage: `url(${bgImage})` }} center="xs" middle="xs">
        <Col id="start" className="content" xs={12}>
          <div className="block" data-scroll="toggle(.fromBottomIn, .fromBottomOut)">
            <h2 className="headline jumbo">
              Practice smarter,<br />not more
            </h2>

            <div className="practice-time">
              <p className="hyphens">
                The best performers obsess about what and how they practice:
                they look for something to improve in their performance and
                then focus rigorously on it.
              </p>
              <p className="hyphens highlight">
                This effectiveness during practice is what separates
                outstanding from average performers.
              </p>
            </div>
          </div>
        </Col>
      </Row>;
  }
}

export default PracticeSection;
