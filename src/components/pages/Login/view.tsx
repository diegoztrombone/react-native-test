import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RoutesType } from 'model/router';

import styles from './styles';

type Props = NativeStackScreenProps<RoutesType, 'Login'>;

const Login: FC<Props> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} value={password} onChangeText={setPassword} />
    </View>
  );
};

export default Login;
