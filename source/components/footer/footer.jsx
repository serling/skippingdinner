import React from 'react';

import Link from '../link';
import List from '../list';
import Row from '../row';
import Icon from '../icon';
import Transform from '../transform';
import Snippet from '../snippet';

const Footer = () => (
  <div className="footer">
    <Row background={Row.backgrounds.secondary}>
      <Row.Content>
        <List isInline={true}>
          <Transform rotate={-6}>
            <Snippet theme={Snippet.themes.handwritten}>do it:</Snippet>
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
