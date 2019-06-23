import React from 'react';
import ReactDOM from 'react-dom';
import OpportunityClient from './OpportunityClient';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OpportunityClient />, div);
  ReactDOM.unmountComponentAtNode(div);
});
