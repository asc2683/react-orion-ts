import { render, screen, cleanup } from '@testing-library/react';
import JokeItem from './JokeItem';

afterEach(() => {
  cleanup();
});

test('should render JokeItem component unliked', () => {
  const joke = {
    id: 8,
    type: 'general',
    setup: 'What do you get when you cross a bee and a sheep?',
    punchline: 'A bah-humbug.',
    isLiked: false   
  }

  render(<JokeItem joke={joke} />);
  const jokeItemElement = screen.getByTestId(`jokeItem-${joke.id}`);
  expect(jokeItemElement).toBeInTheDocument();
  expect(jokeItemElement).toHaveTextContent(joke.setup);
  expect(jokeItemElement).toHaveTextContent(joke.punchline);
  expect(jokeItemElement).toContainHTML('M14.6 8H21a2'); // svg for icon
})

test('should render JokeItem component liked', () => {
  const joke = {
    id: 9,
    type: 'programming',
    setup: 'Why do programmers always mix up Halloween and Christmas?',
    punchline: 'Because Oct 31 == Dec 25.',
    isLiked: true 
  }

  render(<JokeItem joke={joke} />);
  const jokeItemElement = screen.getByTestId(`jokeItem-${joke.id}`);
  expect(jokeItemElement).toBeInTheDocument();
  expect(jokeItemElement).toHaveTextContent(joke.setup);
  expect(jokeItemElement).toHaveTextContent(joke.punchline);
  expect(jokeItemElement).toContainHTML('M2 9h3v12H2a1'); // svg for icon
})

