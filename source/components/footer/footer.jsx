import React from 'react';

import Row from '../row';
import ContactBlock from '../contact-block';

const Footer = () => (
  <div className="footer">
    <Row background={Row.backgrounds.secondary}>
      <Row.Content column={Row.columns.two}>
        <ContactBlock />
      </Row.Content>
    </Row>
  </div>
);

export default Footer;
