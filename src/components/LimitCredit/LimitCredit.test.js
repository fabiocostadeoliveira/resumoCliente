import React from 'react';
import ReactDOM from 'react-dom';
import LimitCredit from './LimitCredit';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LimitCredit />, div);
  ReactDOM.unmountComponentAtNode(div);
});
