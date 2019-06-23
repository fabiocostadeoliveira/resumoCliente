import React from 'react';
import ReactDOM from 'react-dom';
import SalesChart from './SalesChart';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SalesChart />, div);
  ReactDOM.unmountComponentAtNode(div);
});
