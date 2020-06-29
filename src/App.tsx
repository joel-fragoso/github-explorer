import React, { FunctionComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default App;
