import React from 'react';
import { cleanup, render } from '@testing-library/react'

import App from '../App';

afterEach(cleanup);

it('renders the App component', () => {
  const { getByText } = render(<App/>);

  expect(getByText('Navigation')).toHaveClass('title');
});
