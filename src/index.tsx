import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './hooks/useApolloClient';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <DataProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </DataProvider>
);
