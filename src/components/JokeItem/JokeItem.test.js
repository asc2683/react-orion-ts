import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import user from '@testing-library/user-event';
import JokeItem from './JokeItem';

afterEach(cleanup);

const joke = {
  id: 8,
  type: 'general',
  setup: 'What do you get when you cross a bee and a sheep?',
  punchline: 'A bah-humbug.',
  isLiked: false,
};

test('should render JokeItem component unliked', () => {
  render(<JokeItem joke={joke} />);
  const jokeItemElement = screen.getByTestId(`jokeItem-${joke.id}`);
  expect(jokeItemElement).toBeInTheDocument();
  expect(jokeItemElement).toHaveTextContent(joke.setup);
  expect(jokeItemElement).toHaveTextContent(joke.punchline);
  expect(jokeItemElement).toContainHTML('M14.6 8H21a2'); // svg for icon
});

test('should render JokeItem component liked', () => {
  const jokeFalse = {
    ...joke,
    isLiked: true,
  };

  render(<JokeItem joke={jokeFalse} />);
  const jokeItemElement = screen.getByTestId(`jokeItem-${joke.id}`);
  expect(jokeItemElement).toBeInTheDocument();
  expect(jokeItemElement).toHaveTextContent(joke.setup);
  expect(jokeItemElement).toHaveTextContent(joke.punchline);
  expect(jokeItemElement).toContainHTML('M2 9h3v12H2a1'); // svg for icon
});

test('invoke setIsFavorite', () => {
  const mockHandleSetIsFavorite = jest.fn();
  render(<JokeItem joke={joke} setIsFavorite={mockHandleSetIsFavorite} />);
  user.click(screen.getByRole('button', { type: /button/i }));
  expect(mockHandleSetIsFavorite).toHaveBeenCalled();
  expect(mockHandleSetIsFavorite).toHaveBeenCalledTimes(1);
});

test('toggle isFavorite', () => {
  const mockHandleSetIsFavorite = jest.fn();
  render(<JokeItem joke={joke} setIsFavorite={mockHandleSetIsFavorite} />);
  fireEvent.click(screen.getByRole('button', { type: /button/i }));
});
