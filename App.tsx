import React from 'react';

import {Navigation} from './android/app/src/components/Navigation';
import {ContextProvider} from './android/app/src/components/Context';
export const App = () => {
  return (
    <ContextProvider>
      <Navigation />
    </ContextProvider>
  );
};

export default App;
