import React from 'react';

import { AuthProvider } from './contexts/AuthProvider';
import RoutesApp from './routes/Routes';

function App() {
  return (
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
  );
}

export default App;
