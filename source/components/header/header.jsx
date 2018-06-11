import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TinyTransition from 'react-tiny-transition';

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

  Bar = ({ closeButton, isMenuOpen }) => {
    return (
      <Row>
        <Row.Content column={Row.columns.two}>
          <div className="header__logo">
            <Title>Humorfolk</Title>
            {isMenuOpen && (
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
              <Icon
                title={closeButton ? 'fas fa-times' : 'fas fa-bars'}
                size={Icon.sizes.small}
              />
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
        <this.Bar />
        <TinyTransition duration={500}>
          {this.state.isMenuOpen && (
            <div className="header__content">
              <this.Bar closeButton={true} isMenuOpen={this.state.isMenuOpen} />
              <Row
                className="header__menu"
                background={Row.backgrounds.secondary}
              >
                <Row.Content column={Row.columns.two}>
                  <List>
                    <Link
                      icon="➞"
                      href="#performers"
                      theme={Link.themes.button}
                    >
                      The performers
                    </Link>
                    <Link icon="➞" href="#testies" theme={Link.themes.button}>
                      Testimonials
                    </Link>
                    <Link href="#contact" theme={Link.themes.button} icon="➞">
                      Contact us
                    </Link>
                  </List>
                  <ContactBlock />
                </Row.Content>
              </Row>
            </div>
          )}
        </TinyTransition>
      </div>
    );
  }
}

Header.propTypes = {
  isMenuOpen: PropTypes.bool
};

export default Header;
