import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const sizes = {
  default: 'default',
  small: 'small',
  medium: 'medium'
};

const vendors = {
  fontAwesome: 'fontAwesome'
};

const Icon = ({ title, vendor, size, className }) => (
  <div
    className={cn(
      'icon',
      {
        [`icon--size-${sizes[size]}`]: sizes[size],
        [`icon--vendor-${vendors[vendor]}`]: vendors[vendor]
      },
      className
    )}
  >
    {vendor === vendors.fontAwesome && <i className={title} />}
  </div>
);

Icon.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes).map(key => sizes[key])),
  vendor: PropTypes.oneOf(Object.keys(vendors).map(key => vendors[key]))
};

Icon.defaultProps = {
  size: sizes.default,
  vendor: vendors.fontAwesome
};

Icon.sizes = sizes;

export default Icon;
