import { render, screen, cleanup } from '@testing-library/react';
import JokeList from './JokeList';

afterEach(() => {
  cleanup();
});

test('should render JokeList component', () => {
  const value = false;
  const jokes = [
    {"id":241,"type":"general","setup":"What do you get when you cross a bee and a sheep?","punchline":"A bah-humbug."},
    {"id":23,"type":"programming","setup":"Why do programmers always mix up Halloween and Christmas?"}];

  render(<JokeList value={value} jokes={jokes} />);
  const jokeListElement = screen.getByTestId('jokeList');
  expect(jokeListElement).toBeInTheDocument();
})
