import { render, screen, cleanup } from '@testing-library/react';
import Switch from './Switch';

afterEach(() => {
  cleanup();
});

test('should render Switch component', () => {
  const defaultChecked = false;
  render(<Switch defaultChecked={defaultChecked} />);
  const switchElement = screen.getByTestId('switch');
  expect(switchElement).toBeInTheDocument();
})