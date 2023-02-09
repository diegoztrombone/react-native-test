import React from 'react';
import { Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RoutesType } from 'model/router';

import styles from './styles';

type Props = NativeStackScreenProps<RoutesType, 'Home'>;

const Home: FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text>HOLA HOME</Text>
    </View>
  );
};

export default Home;
