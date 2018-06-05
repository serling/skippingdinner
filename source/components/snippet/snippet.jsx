import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const themes = {
  handwritten: 'handwritten',
  slanted: 'slanted',
  bloated: 'bloated'
};

const Snippet = ({ children, className, theme }) => (
  <span
    className={cn(
      'snippet',
      {
        [`snippet--style-${themes[theme]}`]: themes[theme]
      },
      className
    )}
  >
    {children}
  </span>
);

Snippet.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Snippet.themes = themes;

export default Snippet;
