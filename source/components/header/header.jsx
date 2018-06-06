import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Row from '../row';
import Link from '../link';
import List from '../list';
import Icon from '../icon';
import ContactBlock from '../contact-block';
import Button from '../button';
import Title from '../title';
import Transform from '../transform';
import Snippet from '../snippet';

class Header extends React.Component {
  state = {
    isMenuOpen: this.props.isMenuOpen
  };

  Bar = ({ buttonText }) => {
    return (
      <Row>
        <Row.Content column={Row.columns.two}>
          <div className="header__logo">
            <Title>Skipping Dinner</Title>
            {this.state.isMenuOpen && (
              <Transform rotate={4} translate={{ x: '6rem', y: '-1rem' }}>
                <Snippet theme={Snippet.themes.handwritten}>
                  we make comedy
                </Snippet>
              </Transform>
            )}
          </div>
          <div className="header__button">
            <Button
              onClick={() => this.handleOnClick()}
              theme={Button.themes.text}
            >
              {buttonText}
            </Button>
          </div>
        </Row.Content>
      </Row>
    );
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
        {!this.state.isMenuOpen && <this.Bar buttonText="MENU" />}
        {this.state.isMenuOpen && (
          <React.Fragment>
            <this.Bar buttonText="X" />
            <Row
              className={cn('header__menu', {
                'header__menu--is-visible': this.state.isMenuOpen
              })}
              background={Row.backgrounds.primary}
            >
              <Row.Content column={Row.columns.two}>
                <div className="header__navigation">
                  <List>
                    <Link
                      icon="➞"
                      href="#testimonials"
                      theme={Link.themes.button}
                    >
                      Testimonials
                    </Link>
                    <Link icon="➞" href="#who" theme={Link.themes.button}>
                      The people
                    </Link>
                    <Link href="#contact" theme={Link.themes.button} icon="➞">
                      Contact us
                    </Link>
                  </List>
                </div>
                <div className="header__navigation">
                  <ContactBlock />
                </div>
              </Row.Content>
            </Row>
          </React.Fragment>
        )}
      </div>
    );
  }
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool
};

export default Header;
