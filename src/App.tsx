import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/Globalstyle';
import { Theme } from './styles/theme';
import Reset from './styles/Reset';
import Layout from './Layout';

const App:React.FC = () => {

  const theme = {...Theme}

  return (
    <ThemeProvider theme={theme}>
    <Reset />
    <GlobalStyle />
       <Layout/>
    </ThemeProvider>
  );
}

export default App;
