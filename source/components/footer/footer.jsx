import React from 'react';

import Link from '../link';
import List from '../list';
import Row from '../row';
import Icon from '../icon';

const Footer = () => (
  <div className="footer">
    <Row background={Row.backgrounds.secondary}>
      <Row.Content>
        <List isInline={true}>
          <Link href="mailto:skippingdinnerimprov@gmail.com">
            <Icon title="fas fa-envelope" />
          </Link>
          <Link href="https://www.facebook.com/SkippingDinner">
            <Icon title="fab fa-facebook-square" />
          </Link>
        </List>
      </Row.Content>
    </Row>
  </div>
);

export default Footer;
