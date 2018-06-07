import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

class Transform extends React.Component {
  isScaled = () => {
    return this.props.scale !== 1;
  };

  isTranslated = () => {
    return this.props.translate.x && this.props.translate.y;
  };

  isRotated = () => {
    return this.props.rotate !== 0;
  };

  getRotateStyle = deg => {
    return deg ? `rotate(${deg}deg) ` : '';
  };

  getScaleStyle = scale => {
    return scale ? `scale(${scale}) ` : '';
  };

  getTranslateStyle = ({ x, y }) => {
    return x, y ? `translate(${x}, ${y}) ` : '';
  };

  state = {};

  componentDidMount() {
    this.setState({
      transforms: {
        rotate: this.isRotated() ? this.props.rotate : '',
        scale: this.isScaled() ? this.props.scale : '',
        translate: this.isTranslated() ? this.props.translate : ''
      }
    });
  }

  render() {
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
        style={
          this.state.transforms
            ? {
                transform: `
          ${this.getRotateStyle(this.state.transforms.rotate)}
          ${this.getScaleStyle(this.state.transforms.scale)}
          ${this.getTranslateStyle({ ...this.state.transforms.translate })}
          `
              }
            : undefined
        }
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
