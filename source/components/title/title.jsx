import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Title = ({ children, hidden }) => (
  <h1 className={cn('title', { 'title--hidden': hidden })}>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  hidden: PropTypes.bool
};

export default Title;
