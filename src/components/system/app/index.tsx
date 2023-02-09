import React, { FC } from 'react';
import { StatusBar } from 'react-native';

import Routes from '../routes';

const MainProvider: FC = ({ children }) => <>{children}</>;

const App = () => (
  <MainProvider>
    <Routes />
  </MainProvider>
);

export default App;
