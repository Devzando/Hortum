import React from 'react';
import Router from './src/router.js';
import TokenProvider from './src/contexts/TokenProvider';


export default function App() {
  return (
    <TokenProvider>
      <Router />
    </TokenProvider>
  );
}

