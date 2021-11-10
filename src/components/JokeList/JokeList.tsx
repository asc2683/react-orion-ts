import React from 'react';
import JokeItem from '../JokeItem/JokeItem';
import './JokeList.css';

interface Joke {
  id: number,
  type: string,
  setup: string,
  punchline: string,
  isLiked: boolean
}

interface Props {
  jokes: Joke[];
  isFavorite: (jokeId: number) => void;
  value: boolean;
}

const JokeList = ({
  jokes,
  isFavorite,
  value,
}: Props) => {
  const jokesArr = (value) ? jokes.filter((joke) => joke.isLiked === true) : jokes;

  return (
    <div data-testid="jokeList" className="joke-list-container">
      <ul>
        { jokesArr.map((joke) => (
          <JokeItem key={joke.id} joke={joke} isFavorite={isFavorite} />
        ))}
      </ul>
    </div>
  );
};

export default JokeList;
