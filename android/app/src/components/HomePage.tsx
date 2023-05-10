import React, {useContext} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {FavFilledIcon} from './icons/FavFilledIcon';
import {FavIcon} from './icons/FavIcon';
import {NavBar} from './NavBar';
import {Loader} from './Loader';
import {Context} from './Context';

export const HomePage = () => {
  const {todayJoke, isLoading, toggleLike} = useContext(Context);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Today</Text>
      </View>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.containerJoke}>
          <ScrollView>
            <Text style={styles.textJoke}>{todayJoke.text}</Text>
            <TouchableOpacity onPress={() => toggleLike(todayJoke.id)}>
              <View
                style={
                  todayJoke.isLiked ? styles.buttonLike : styles.buttonNotLike
                }>
                {todayJoke.isLiked ? <FavFilledIcon /> : <FavIcon />}
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
      <NavBar title={'Today'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  containerJoke: {
    display: 'flex',
    paddingHorizontal: 24,
    height: '68%',
  },
  textJoke: {
    color: 'black',
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
    lineHeight: 38,
    marginBottom: 16,
  },
  buttonNotLike: {
    backgroundColor: '#EAE0FF',
    height: 64,
    width: 64,
    borderRadius: 50,
    padding: 18,
  },
  buttonLike: {
    backgroundColor: '#9763FF',
    height: 64,
    width: 64,
    borderRadius: 50,
    padding: 18,
  },
  title: {
    marginTop: 72,
    paddingHorizontal: 24,
    paddingBottom: 24,
    color: 'black',
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    lineHeight: 48,
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
  },
});
