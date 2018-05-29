/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default'
};

const Grid = ({ children, theme }) => (
  <ul
    className={cn('grid', {
      [`grid--${themes[theme]}`]: themes[theme]
    })}
  >
    {children}
  </ul>
);

const GridItem = ({ children, theme }) => (
  <li
    className={cn('grid__item', {
      [`grid__item--${themes[theme]}`]: themes[theme]
    })}
  >
    {children}
  </li>
);

Grid.propTypes = GridItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Grid.defaultProps = GridItem.defaultProps = {
  theme: themes.default
};

Grid.Item = GridItem;
Grid.themes = themes;

export default Grid;
