import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: Test de la aplicación
test('renders app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Add/i);
  expect(linkElement).toBeInTheDocument();
});