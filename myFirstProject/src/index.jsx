import  React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

import MyComponent from './components/myComponent';

class App extends Component {
  render() {
    return (
      <MyComponent />
    )
  }
}

render(
  <App />,
  document.querySelector('#app')
);
