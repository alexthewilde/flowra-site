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
								Carrer Pujades 133<br />
								08005 Barcelona, Spain<br />
								<br />
								Email: alex@flowra.com<br />
								Tel.: +49 177 515 26 25
							</p>
						</Col>
						<Col xs={6}>
							<p className="block">
								<Link to="./tos">Terms and Conditions</Link><br /><br />
								<Link to="./privacy">Privacy Policy</Link><br /><br />
								<Link to="./refund">Refund Policy</Link>
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
