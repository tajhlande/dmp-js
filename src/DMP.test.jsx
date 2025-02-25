import { render, screen } from '@testing-library/react';
import DMP from './DMP';

test('renders learn react link', () => {
  render(<DMP />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
