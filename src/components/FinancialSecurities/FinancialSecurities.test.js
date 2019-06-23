import React from 'react';
import ReactDOM from 'react-dom';
import FinancialSecurities from './FinancialSecurities';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinancialSecurities />, div);
  ReactDOM.unmountComponentAtNode(div);
});
