import React from 'react';
import { Row, Col } from 'react-flexbox-grid';

import './footer-section.scss'

class FooterSection extends React.Component {
	render() {
		return  <Row id="intro-footer" className="concept" center="xs" middle="xs">
				<Col className="content" xs={10}>
					<p className="block">
						<b>Contact</b><br />
						Alexander Wilde<br />
						Carrer Pujades 133<br />
						08005 Barcelona, Spain<br />
						<br />
						Email: alex@flowra.com<br />
						Tel.: +49 177 515 26 25
					</p>
				</Col>
			</Row>;
	}
}

export default FooterSection;
