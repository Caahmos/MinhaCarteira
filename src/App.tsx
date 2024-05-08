import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { useTheme } from './hooks/theme';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { AuthProvider } from './hooks/auth';


const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
