import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const themes = {
  default: 'default',
  text: 'text'
};

class Button extends React.Component {
  state = {};

  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={cn(
          'button',
          {
            [`button--style-${themes[this.props.theme]}`]: themes[
              this.props.theme
            ]
          },
          this.props.className
        )}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(Object.keys(themes).map(key => themes[key]))
};

Button.defaultProps = {
  theme: themes.default
};

Button.themes = themes;

export default Button;
