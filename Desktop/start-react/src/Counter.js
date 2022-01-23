import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixNumber: 0,
  };
  render() {
    const { number, fixNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixNumber}</h1>
        <button
          onClick={() => {
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log('방금 setstate가 호출되었습니다');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
