import React from 'react';
import ReactDOM from 'react-dom';
import '../GenericUI/IconsFa'
import IconLabelDetail from './IconLabelDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<IconLabelDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});
