import React from 'react';
import ReactDOM from 'react-dom';
import ProfileBoard from './ProfileBoard';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProfileBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
