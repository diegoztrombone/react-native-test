import React, { FC } from 'react';
import { AuthProvider } from '../../../context/AuthContext';

import Routes from '../routes';

const providersComposer = providers =>
  providers.reduce((Prev, Curr) => ({ children }) => (
    <Prev>
      <Curr>{children}</Curr>
    </Prev>
  ));

const MainProvider = providersComposer([AuthProvider]);

const App: FC = () => (
  <MainProvider>
    <Routes />
  </MainProvider>
);

export default App;
