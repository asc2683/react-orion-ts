import { render, screen, cleanup } from '@testing-library/react';
import JokeContainer from './JokeContainer';

afterEach(() => {
  cleanup();
});

test('should render JokeContainer component', () => {
  render(<JokeContainer />);
  const jokeContainerElement = screen.getByTestId('jokeContainer');
  expect(jokeContainerElement).toBeInTheDocument();
})