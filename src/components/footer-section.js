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
				<Col className="content" xs={10} sm={8}>
					<Row>
						<Col xs={12} sm={6}>
							<div className="block info">
								<h3>Get in touch</h3>
								Alexander Wilde<br />
								c/o Inn.kubator<br />
								Bahnhofstrasse 10<br />
								94032 Passau, Germany<br />
								<br />
								Email: alex@flowra.com<br />
								Tel.: +49 177 515 26 25
							</div>
						</Col>
						<Col xs={12} sm={6}>
							<div className="block links">
								<h3>Our terms</h3>
								<a href="/about/tos/">Terms and Conditions</a><br /><br />
								<a href="/about/privacy/">Privacy Policy</a><br /><br />
								{/* <a href="/about/refund/">Refund Policy</a> */}
							</div>
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
