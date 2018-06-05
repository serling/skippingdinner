import React from 'react';

import Link from '../link';
import List from '../list';
import Row from '../row';
import Icon from '../icon';

const Footer = () => (
  <div className="footer">
    <Row background={Row.backgrounds.secondary}>
      <Row.Content column={Row.columns.two}>
        <div>
          <List>
            <div>Chateu Neuf @ Majorstua, Oslo</div>
            <div>skippingdinnerimprov@gmail.com</div>
            <div>(+47) 123 888 23</div>
          </List>
          <List isInline={true}>
            <Link href="mailto:skippingdinnerimprov@gmail.com">
              <Icon size={Icon.sizes.small} title="fab fa-twitter" />
            </Link>
            <Link href="https://www.facebook.com/SkippingDinner">
              <Icon size={Icon.sizes.small} title="fab fa-facebook-square" />
            </Link>
            <Link href="https://www.instagram.com/SkippingDinner">
              <Icon size={Icon.sizes.small} title="fab fa-instagram" />
            </Link>
          </List>
        </div>
      </Row.Content>
    </Row>
  </div>
);

export default Footer;
