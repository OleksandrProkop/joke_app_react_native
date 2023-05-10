import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  icon: JSX.Element;
  text: string;
  isActive: boolean;
};

export const NavItem: React.FC<Props> = ({icon, text, isActive}) => {
  return (
    <View style={styles.navItem}>
      {icon}
      <Text style={isActive && styles.isActive}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navItem: {
    gap: 4,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#C1C3C6',
  },
  isActive: {
    color: '#9763FF',
  },
});
