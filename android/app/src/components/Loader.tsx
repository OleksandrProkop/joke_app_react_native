import React from 'react';

import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';

export const Loader = () => {
  return (
    <View style={styles.containerLoader}>
      <ActivityIndicator size={'large'} />
      <Text>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerLoader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
