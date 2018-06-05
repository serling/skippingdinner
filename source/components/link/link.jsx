import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  underlined: 'underlined',
  handwritten: 'handwritten',
  button: 'button'
};

const Link = ({ children, className, icon, text, href, theme }) => (
  <a
    className={cn(
      'link',
      {
        [`link--style-${themes[theme]}`]: themes[theme]
      },
      className
    )}
    href={href}
  >
    <span className="link__text">{children || text}</span>
    {icon && <span className="link__icon">{icon}</span>}
  </a>
);

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Link.defaultProps = {
  theme: themes.default
};

Link.themes = themes;

export default Link;
