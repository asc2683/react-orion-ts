import { render, screen, cleanup, act } from '@testing-library/react';
import axios from 'axios';
import JokeContainer from './JokeContainer';

afterEach(cleanup);
jest.mock('axios');

test('should render JokeContainer component', () => {
  render(<JokeContainer />);
  const jokeContainerElement = screen.getByTestId('jokeContainer');
  expect(jokeContainerElement).toBeInTheDocument();
});

test('should show loading indicator', async () => {
  const { getByTestId } = render(<JokeContainer />);
  expect(getByTestId('loading')).toHaveTextContent('Loading data...');
});

test('should fetch data', async () => {
  const promise = Promise.resolve({
    resp: {
      data: [
        {
          id: 241,
          type: 'general',
          setup: 'What do you get when you cross a bee and a sheep?',
          punchline: 'A bah-humbug.',
        },
        {
          id: 23,
          type: 'programming',
          setup: 'Why do programmers always mix up Halloween and Christmas?',
        },
      ],
    },
  });

  axios.get.mockResolvedValueOnce(promise);
  render(<JokeContainer />);

  await act(() => promise);

  expect(axios.get).toHaveBeenCalled();
  expect(axios.get).toHaveBeenCalledWith('/10');
  expect(axios.get).toHaveBeenCalledTimes(1);
});
