import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Row from '../row';

class Header extends React.Component {
  state = {
    isMenuCollapsed: this.props.isMenuCollapsed
  };

  handleOnClick() {
    this.setState({
      isMenuCollapsed: !this.state.isMenuCollapsed
    });
  }

  render() {
    return (
      <div className="header">
        {!this.state.isMenuCollapsed && (
          <div className="header__content">
            <button
              onClick={() => this.handleOnClick()}
              className="header__button"
            >
              MENU
            </button>
          </div>
        )}
        {this.state.isMenuCollapsed && (
          <Row className="header__menu" background={Row.backgrounds.primary}>
            <div className="header__content">
              <button
                onClick={() => this.handleOnClick()}
                className="header__button"
              >
                MENU
              </button>
            </div>
            <Row.Content column={Row.columns.three}>
              <div className="header__section">All the stuff</div>
              <div className="header__section">All the more stuff</div>
              <div className="header__section">All the last stuff</div>
            </Row.Content>
          </Row>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  isMenuCollapsed: PropTypes.bool
};

export default Header;
