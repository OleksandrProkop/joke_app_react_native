import React, {useContext} from 'react';
import {FavIcon} from './icons/FavIcon';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FavFilledIcon} from './icons/FavFilledIcon';
import {Context} from './Context';
import {Joke} from '../types';

type Props = {
  joke: Joke;
};

export const JokeItem: React.FC<Props> = ({joke}) => {
  const {toggleLike} = useContext(Context);

  return (
    <View style={styles.containerJoke}>
      <Text style={styles.textJoke}>{joke.text}</Text>
      <TouchableOpacity onPress={() => toggleLike(joke.id)}>
        {joke.isLiked ? (
          <View style={styles.buttonLike}>
            <FavFilledIcon />
          </View>
        ) : (
          <View style={styles.buttonNotLike}>
            <FavIcon />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerJoke: {
    padding: 24,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textJoke: {
    color: 'black',
    width: 260,
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 26,
  },
  buttonNotLike: {
    backgroundColor: '#EAE0FF',
    height: 48,
    width: 48,
    borderRadius: 50,
    padding: 10,
  },
  buttonLike: {
    backgroundColor: '#9763FF',
    height: 48,
    width: 48,
    borderRadius: 50,
    padding: 10,
  },
  imgFollow: {
    height: 40,
    width: 20,
  },
});
