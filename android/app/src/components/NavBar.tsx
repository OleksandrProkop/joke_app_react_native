import React from 'react';
import {NavItem} from './NavItem';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TodayIcon} from './icons/TodayIcon';
import {HistoryIcon} from './icons/HistoryIcon';
import {useNavigation} from '@react-navigation/native';
type Props = {
  title: string;
};

export const NavBar: React.FC<Props> = ({title}) => {
  const isTodayActive = title === 'Today';
  const isHistoryActive = title === 'History';
  const navigation = useNavigation();
  return (
    <View style={styles.navigationPanel}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <NavItem
          icon={<TodayIcon isActive={isTodayActive} />}
          text={'Today'}
          isActive={isTodayActive}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('History')}>
        <NavItem
          icon={<HistoryIcon isActive={isHistoryActive} />}
          text={'History'}
          isActive={isHistoryActive}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  navigationPanel: {
    paddingVertical: 10,
    gap: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: '#E6E6E6',
    borderTopWidth: 1,
  },
});
