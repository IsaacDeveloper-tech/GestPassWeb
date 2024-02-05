import { screen, render } from '@testing-library/react';

import { 
    PassItemComponent, 
    copyPasswordToClipboard 
} from './PassItemComponent';

// Test 1: Check if the component is rendered
test('renders PassItemComponent', () => {
  render(<PassItemComponent platform = { "YouTube" } />);
  let linkElement = screen.getByText(/YouTube/i);
  expect(linkElement).toBeInTheDocument();
});

// Test 2: Check if copy pass correctly
test('copy pass to clipboard', () => {
  expect(copyPasswordToClipboard("1234")).toBe(true);
});

