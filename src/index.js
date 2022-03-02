import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ThemeProvider } from '@material-ui/styles';
import CustomTheme from './CustomTheme';

ReactDOM.render(
  <ThemeProvider theme={CustomTheme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
