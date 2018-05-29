/* eslint-disable react/no-multi-comp */

import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  wide: 'wide',
  full: 'full'
};

const columns = {
  default: 'one',
  two: 'two',
  three: 'three'
};

const backgrounds = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary'
};

const Row = ({ children, className, background }) => (
  <div
    className={cn(
      'row',
      {
        'row--has-background': backgrounds[background],
        [`row--background-${backgrounds[background]}`]: backgrounds[background]
      },
      className
    )}
  >
    {children}
  </div>
);

const RowContent = ({ className, children, theme, column, alignedRight }) => (
  <div
    className={cn(
      'row__content',
      {
        [`row__content--${themes[theme]}`]: themes[theme]
      },
      className
    )}
  >
    <div
      className={cn('row__inner', {
        'row__inner--split': column !== columns.default,
        [`row__inner--columns-${columns[column]}`]: columns[column],
        'row__inner--aligned-right': column !== columns.default && alignedRight
      })}
    >
      {React.Children.map(children, (child, index) => (
        <div className="row__inner-child" key={index}>
          {child}
        </div>
      ))}
    </div>
  </div>
);

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  background: PropTypes.oneOf(
    Object.keys(backgrounds).map(key => backgrounds[key])
  )
};

RowContent.propTypes = {
  alignedRight: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key])),
  column: PropTypes.oneOf(Object.keys(columns).map(key => columns[key]))
};

RowContent.defaultProps = {
  theme: themes.default,
  column: columns.default,
  alignedRight: true
};

Row.columns = columns;
Row.backgrounds = backgrounds;
Row.themes = themes;
Row.Content = RowContent;

export default Row;
