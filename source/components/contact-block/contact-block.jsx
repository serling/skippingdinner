import React from 'react';

import Link from '../link';
import List from '../list';
import Icon from '../icon';

const ContactBlock = () => (
  <div className="contact-block">
    <List>
      <div>Chateu Neuf @ Majorstua, Oslo</div>
      <div>skippingdinnerimprov</div>
      <div>(+47) 123 xxx 23</div>
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
);

export default ContactBlock;
