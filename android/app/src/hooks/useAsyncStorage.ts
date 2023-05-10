import {Dispatch, SetStateAction, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const useAsyncStorage = <T>(
  key: string,
  initialValue: T,
): [T, Dispatch<SetStateAction<T>>] => {
  const [data, setData] = useState<T>(initialValue);
  const [hasRetrieved, setHasRetrieved] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        setData(JSON.parse(value));
        setHasRetrieved(true);
        return;
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const saveData = async () => {
      try {
        if (hasRetrieved) {
          await AsyncStorage.setItem(key, JSON.stringify(data));
        }
      } catch {
        Alert.alert('Its not a joke', 'Something went wrong');
      }
    };
    saveData();
  }, [data, hasRetrieved]);

  return [data, setData];
};
