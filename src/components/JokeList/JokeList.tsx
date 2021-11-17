import React from 'react';
import JokeItem from '../JokeItem/JokeItem';
import './JokeList.css';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
  isLiked: boolean;
}

interface Props {
  jokes: Joke[];
  // eslint-disable-next-line no-unused-vars
  setIsFavorite: (jokeId: number) => void;
  value: boolean;
}

const JokeList = ({ jokes, setIsFavorite, value }: Props) => {
  const jokesArr = value
    ? jokes.filter((joke) => joke.isLiked === true)
    : jokes;

  return (
    <div data-testid="jokeList" className="joke-list-container">
      <ul>
        {jokesArr.map((joke) => (
          <JokeItem key={joke.id} joke={joke} setIsFavorite={setIsFavorite} />
        ))}
      </ul>
    </div>
  );
};

export default JokeList;
