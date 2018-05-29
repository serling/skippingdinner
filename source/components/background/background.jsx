import React from 'react';
import PropTypes from 'prop-types';

class Background extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string.isRequired
  };

  state = {
    imageSrc: this.props.imageSrc
  };

  componentDidMount() {
    //TODO: animate in
  }

  render() {
    return (
      <div className="background">
        <div
          className="background__image"
          style={{ backgroundImage: 'url(' + this.state.imageSrc + ')' }}
        />
      </div>
    );
  }
}

export default Background;
