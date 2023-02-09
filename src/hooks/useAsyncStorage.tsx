import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const useAsyncStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState();

  const getStoredItem = async (_key, _innitialValue) => {
    try {
      const item = await AsyncStorage.getItem(_key);
      const value = item ? JSON.parse(item) : _innitialValue;
      setStoredValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStoredItem(key, initialValue);
  }, [key, initialValue]);

  const setValue = async value => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useAsyncStorage;
