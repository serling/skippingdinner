import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const List = ({ children, isInline, isOrdered }) =>
  React.createElement(
    isOrdered ? 'ol' : 'ul',
    {
      className: cn('list', {
        'list--inline': isInline,
        'list--ordered': isOrdered
      })
    },

    React.Children.map(children, (child, index) => (
      <li className="list__item" key={index}>
        {child}
      </li>
    ))
  );

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  isInline: PropTypes.bool,
  isOrdered: PropTypes.bool
};

export default List;
