import React, {useContext} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {JokeItem} from './JokeItem';
import {NavBar} from './NavBar';
import {Context} from './Context';

export const HistoryPage: React.FC = () => {
  const {jokes} = useContext(Context);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>History</Text>
      </View>
      <View style={styles.containerJokes}>
        <FlatList
          data={jokes}
          renderItem={({item}) => <JokeItem joke={item} key={item.id} />}
        />
      </View>
      <NavBar title={'History'} />
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
  containerJokes: {
    borderBottomColor: '#E6E6E6',
    borderBottomWidth: 1,
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
    height: '68.5%',
  },
  title: {
    marginTop: 72,
    paddingHorizontal: 24,
    paddingBottom: 24,
    color: 'black',
    fontFamily: 'Inter-Bold',
    fontSize: 36,
    lineHeight: 48,
  },
});
