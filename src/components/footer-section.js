import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Link from 'gatsby-link';

import './footer-section.scss'

class FooterSection extends React.Component {
  goToTop() {
    document.querySelector('#intro-hero').scrollIntoView({
      // Scroll exactly to top of target element
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth'
    });
  }

	render() {
		return  <Row id="intro-footer" className="concept" center="xs" middle="xs">
				<Col className="content" xs={10} sm={6}>
					<Row>
						<Col xs={6}>
							<p className="block">
								<strong>Contact</strong><br /><br />
								Alexander Wilde<br />
								c/o Inn.kubator<br />
								Bahnhofstrasse 10<br />
								94032 Passau, Germany<br />
								<br />
								Email: alex@flowra.com<br />
								Tel.: +49 177 515 26 25
							</p>
						</Col>
						<Col xs={6}>
							<p className="block">
								<a href="/about/tos/">Terms and Conditions</a><br /><br />
								<a href="/about/privacy/">Privacy Policy</a><br /><br />
								<a href="/about/refund/">Refund Policy</a>
							</p>
						</Col>
					</Row>

					<Row>
						<Col xs={12}>
							<p className="block to-top">
								<a className="btn cta light" onClick={this.goToTop}>
									back to top
								</a>
							</p>
 						</Col>
					</Row>
				</Col>
			</Row>;
	}
}

export default FooterSection;
