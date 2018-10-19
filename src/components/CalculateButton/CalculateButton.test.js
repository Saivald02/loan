import React from 'react';
import ReactDOM from 'react-dom';
import CalculateButton from './components/CalculateButton/CalculateButton';

it('renders without crashing 2', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalculateButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
