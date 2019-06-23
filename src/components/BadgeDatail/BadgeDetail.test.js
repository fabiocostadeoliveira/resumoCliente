import React from 'react';
import ReactDOM from 'react-dom';
import BadgeDetail from './BadgeDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BadgeDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
