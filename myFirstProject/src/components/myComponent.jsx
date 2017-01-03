import React, { Component } from 'react';

export default class MyComponent extends Component {
  render() {
    return (
      <div>
        <h2>Testando componente</h2>
      </div>
    );
  }
}

// Necessário para dar visibilidade externa (ES6)
//export default MyComponent;

// No ES5:
// module.exports = MyComponent;
