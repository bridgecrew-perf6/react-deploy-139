import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MyComponent extends Component {
  static defaultProps = {
    name: '리액트',
  };
  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };
  render() {
    const { name, favoriteNumber, children } = this.props;
    return (
      <div>
        안녕하세요 {name} , {favoriteNumber},{children}
      </div>
    );
  }
}

export default MyComponent;
