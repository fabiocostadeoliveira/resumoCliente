import React from 'react';
import ReactDOM from 'react-dom';
import '../GenericUI/IconsFa'
import SummaryClient from './SummaryClient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SummaryClient />, div);
  ReactDOM.unmountComponentAtNode(div);
});
