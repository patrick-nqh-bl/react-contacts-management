import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('expects addContactButton to be a App component', () => {
  const { queryByTestId } = render(<App />);
  const addContactButton = queryByTestId('add-contact-button');
  expect(addContactButton).toBeInTheDocument();
});
