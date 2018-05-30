import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Transform extends React.Component {
  state = {
    rotate: this.props.rotate,
    scale: this.props.scale,
    translate: this.props.translate
  };

  isScaled = () => {
    return this.state.scale !== 1;
  };

  isTranslated = () => {
    return this.state.translate.x || this.state.translate.y;
  };

  isRotated = () => {
    return this.state.rotate;
  };

  render() {
    let styles = {};

    if (this.isRotated()) {
      styles.transform += `rotate(${this.state.rotate}deg) `;
    }

    if (this.isScaled()) {
      styles.transform += `scale(${this.state.scale}) `;
    }

    if (this.isTranslated()) {
      styles.transform += `translate(${this.state.translate.x}, ${
        this.state.translate.y
      })`;
    }

    return (
      <div
        className={cn(
          'transform',
          {
            'transform--is-rotated': this.isRotated(),
            'transform--is-scaled': this.isScaled(),
            'transform--is-translated': this.isTranslated()
          },
          this.props.className
        )}
        style={styles}
      >
        {this.props.children}
      </div>
    );
  }
}

Transform.defaultProps = {
  rotate: 0,
  scale: 1,
  translate: { x: '', y: '' }
};

Transform.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]).isRequired,
  rotate: PropTypes.number,
  scale: PropTypes.number,
  translate: PropTypes.shape({
    x: PropTypes.string.isRequired,
    y: PropTypes.string.isRequired
  })
};

export default Transform;
