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
          <Link href="https://www.facebook.com/SkippingDinner">
            <Icon title="fab fa-facebook-square" />
          </Link>
          <Link href="https://www.facebook.com/SkippingDinner">
            <Icon title="fab fa-twitter-square" />
          </Link>
        </List>
      </Row.Content>
    </Row>
  </div>
);

export default Footer;
