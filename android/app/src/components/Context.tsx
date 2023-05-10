import React, {createContext, useState, useEffect} from 'react';
import {useAsyncStorage} from '../hooks/useAsyncStorage';
import {Joke} from '../types';
import {getMilisecondsUntillTomorrow} from '../utils/getMilisecondsUntillTomorrow';
import {Alert} from 'react-native';

type ContextType = {
  todayJoke: Joke;
  jokes: Joke[];
  isLoading: boolean;
  toggleLike: (id: number) => void;
};

export const Context = createContext<ContextType>({} as ContextType);

interface Props {
  children: React.ReactNode;
}

export const ContextProvider: React.FC<Props> = ({children}) => {
  const [jokes, setJokes] = useAsyncStorage<Joke[]>('joke', []);
  const [isLoading, setIsLoading] = useState(true);
  const todayJoke = jokes[0];
  const formatedDate = jokes[0]?.date;
  const today = new Date().toLocaleString('en-GB').slice(0, 10);

  const toggleLike = (id: number) => {
    const updatedJokes = jokes.map(joke => {
      if (joke.id !== id) {
        return joke;
      }
      return {
        ...joke,
        isLiked: !joke.isLiked,
      };
    });
    setJokes(updatedJokes);
  };

  const setUpdateJoke = () => {
    let intervalId: number;
    const timeoutId = setTimeout(() => {
      getJoke();
      const oneDay = 86400000;
      intervalId = setInterval(getJoke, oneDay);
    }, getMilisecondsUntillTomorrow());

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  };

  const getJoke = async () => {
    try {
      setIsLoading(true);
      const responce = await fetch(
        'https://v2.jokeapi.dev/joke/Any?type=single',
      );
      const jokeServer = await responce.json();
      const date = new Date().toLocaleString('en-GB').slice(0, 10);
      const id = Date.now();
      const newJoke = {id, date, text: jokeServer.joke, isLiked: false};
      setJokes(prev => [newJoke, ...prev]);
    } catch {
      Alert.alert('Its not a joke', 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (formatedDate !== today) {
      getJoke();
    }

    const clearTimer = setUpdateJoke();
    return clearTimer;
  }, []);

  const contextValue = {
    todayJoke,
    jokes,
    isLoading,
    toggleLike,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
