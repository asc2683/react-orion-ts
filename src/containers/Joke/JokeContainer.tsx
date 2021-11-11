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

  const isFavorite = (jokeId: number) => {
    const newJokesArr = [...jokes];
    const objIndex = newJokesArr.findIndex((obj) => obj.id === jokeId);
    newJokesArr[objIndex].isLiked = !newJokesArr[objIndex].isLiked;
    setJoke(newJokesArr);
  };

  const handleToggle = () => {
    setValue(!value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/10');

      const data = resp.data.map((item: Joke) => {
       return {
         ...item,
         isLiked: false,
       }
      });

      setJoke(data);
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
        { !jokes.length
          && (
            <div>
              <FaSpinner className="spinner" />
            </div>
          )}
        <JokeList
          jokes={jokes}
          isFavorite={isFavorite}
          value={value}
        />
      </div>
    </section>
  );
};

export default JokeContainer;
