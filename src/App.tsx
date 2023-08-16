import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Globalstyle';
import { Theme } from './styles/theme';
import Reset from './styles/Reset';

function App() {

  const theme = {...Theme}

  return (
    <ThemeProvider theme={theme}>
    <Reset />
    <GlobalStyle />
    2
        {/* <Router/> */}
    </ThemeProvider>
  );
}

export default App;
