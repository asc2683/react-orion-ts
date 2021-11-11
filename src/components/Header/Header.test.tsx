import { render, screen, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(() => {
  cleanup();
});

test('should render Header component with title', () => {
  const value = false;
  const title = 'Jokes List';

  render(<Header value={value} title={title} />);
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
  expect(headerElement).toHaveTextContent(title);
})