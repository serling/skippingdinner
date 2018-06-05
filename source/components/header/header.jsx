import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Row from '../row';
import Link from '../link';
import List from '../list';
import Icon from '../icon';
import Button from '../button';

class Header extends React.Component {
  state = {
    isMenuOpen: this.props.isMenuOpen
  };

  handleOnClick() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  render() {
    return (
      <div
        className={cn('header', {
          'header--is-open': this.state.isMenuOpen
        })}
      >
        {!this.state.isMenuOpen && (
          <div className="header__content">
            <Button
              onClick={() => this.handleOnClick()}
              theme={Button.themes.text}
              className="header__button"
            >
              MENU
            </Button>
          </div>
        )}
        {this.state.isMenuOpen && (
          <Row
            className={cn('header__menu', {
              'header__menu--is-visible': this.state.isMenuOpen
            })}
            background={Row.backgrounds.primary}
          >
            <div className="header__content">
              <Button
                onClick={() => this.handleOnClick()}
                theme={Button.themes.text}
                className="header__button"
              >
                X
              </Button>
            </div>
            <Row.Content column={Row.columns.two}>
              <div className="header__navigation">
                <List>
                  <Link icon="➞" href="#testimonials">
                    Testimonials
                  </Link>
                  <Link icon="➞" href="#who">
                    Who are we
                  </Link>
                  <Link icon="➞" href="#what">
                    What we do
                  </Link>
                </List>
              </div>
              <div className="header__socialmedia">
                <List isInline={true}>
                  <Link href="mailto:skippingdinnerimprov@gmail.com">
                    <Icon title="fas fa-envelope" />
                  </Link>
                  <Link href="https://www.facebook.com/SkippingDinner">
                    <Icon title="fab fa-facebook-square" />
                  </Link>
                </List>
              </div>
            </Row.Content>
          </Row>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool
};

export default Header;
