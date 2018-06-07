import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import Icon from '../icon';

const themes = {
  default: 'default',
  quote: 'quote',
  handwritten: 'handwritten'
};

const Text = ({ children, className, theme, quoteSource }) => (
  <div
    className={cn(
      'text',
      {
        [`text--style-${themes[theme]}`]: themes[theme],
        'text--has-source': quoteSource
      },
      className
    )}
  >
    {theme === themes.quote && (
      <Icon title="fas fa-quote-left" size={Icon.sizes.medium} />
    )}
    <p className="text__content">{children}</p>
    {quoteSource && <div className="text__source">- {quoteSource}</div>}
  </div>
);

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  quoteSource: PropTypes.string
};

Text.defaultProps = {
  theme: themes.default
};

Text.themes = themes;

export default Text;
