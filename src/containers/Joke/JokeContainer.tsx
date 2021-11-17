import React, { useEffect, useState } from 'react';
import axios from 'axios'; // cross browser compatibility
import { FaSpinner } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import JokeList from '../../components/JokeList/JokeList';
import './JokeContainer.css';

interface Joke {
  id: number,
  type: string,
  setup: string,
  punchline: string,
  isLiked: boolean
}

const JokeContainer = () => {
  const [jokes, setJoke] = useState<Joke[]>([]);
  const [value, setValue] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(false);

  const setIsFavorite = (jokeId: number) => {
    const newJokesArr = jokes.map((joke) => {
      if (jokeId === joke.id) {
        joke.isLiked = !joke.isLiked;
      }
      return joke;
    });

    setJoke(newJokesArr);
  };

  const handleToggle = () => {
    setValue(!value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const resp = await axios.get('/10');
        const data = resp.data.map((item: Joke) => {
          return {
            ...item,
            isLiked: false,
          }
        });

        setJoke(data);
        setLoading(false);
      } catch (err) {
        return [];
      }
    };

    fetchData();
  }, []);

  return (
    <section data-testid="jokeContainer" className="joke-container">
      <Header 
        value={value}
        title="Jokes List" 
        handleToggle={handleToggle} />
      <div>
        { isLoading ? (
          <div data-testid="loading">
            <FaSpinner className="spinner" />
            Loading data...
          </div>
        ) : (
          <div data-testid="resolved">
            <JokeList
              jokes={jokes}
              setIsFavorite={setIsFavorite}
              value={value}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default JokeContainer;
