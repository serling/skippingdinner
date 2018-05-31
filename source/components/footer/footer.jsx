import React from 'react';

import Link from '../link';
import List from '../list';
import Row from '../row';
import Icon from '../icon';
import Transform from '../transform';
import Text from '../text';

const Footer = () => (
  <div className="footer">
    <Row background={Row.backgrounds.secondary}>
      <Row.Content>
        <List isInline={true}>
          <Transform rotate={-6}>
            <Text theme={Text.themes.handwritten}>do it:</Text>
          </Transform>
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
