import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  slim: 'slim'
};

const Layout = ({ theme, className, children }) => (
  <div
    className={cn(
      'layout',
      {
        [`layout--${themes[theme]}`]: themes[theme]
      },
      className
    )}
  >
    {children}
  </div>
);

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Layout.defaultProps = {
  theme: themes.default
};

Layout.themes = themes;

export default Layout;
