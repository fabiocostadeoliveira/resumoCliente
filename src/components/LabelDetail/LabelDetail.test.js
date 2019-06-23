import React from 'react';
import ReactDOM from 'react-dom';
import LabelDetail from './LabelDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LabelDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
