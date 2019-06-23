import React from 'react';
import ReactDOM from 'react-dom';
import AddressMaps from './AddressMaps';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddressMaps />, div);
  ReactDOM.unmountComponentAtNode(div);
});
