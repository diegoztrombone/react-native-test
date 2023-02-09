import React from 'react';
import { Button, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RoutesType } from 'model/router';

import styles from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = NativeStackScreenProps<RoutesType, 'Home'>;

const Home: FC<Props> = ({ navigation }) => {
  const handleClick = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Bienvenido</Text>
      </View>
      <View>
        <Button onPress={handleClick} title='Login' />
      </View>
    </SafeAreaView>
  );
};

export default Home;
