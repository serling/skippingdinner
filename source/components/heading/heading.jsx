import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Heading = ({ children, className }) => (
  <h2 className={cn('heading', className)}>{children}</h2>
);

Heading.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired
};

export default Heading;
