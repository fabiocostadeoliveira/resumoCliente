import React from 'react';
import ReactDOM from 'react-dom';
import Activities from './Activities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Activities />, div);
  ReactDOM.unmountComponentAtNode(div);
});
