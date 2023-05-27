import ReactDOM from 'react-dom/client';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { DataProvider } from './hooks/useApolloClient';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyle } from './style/globalstyle';
import { StyleTheme } from './style/Theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <>
    <ThemeProvider theme={StyleTheme}>
      <Global styles={GlobalStyle} />
      <DataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  </>
);
