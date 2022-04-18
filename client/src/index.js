import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { TransactionsProvider } from "./context/TransactionContext";
import { ThemeProvider } from "styled-components";
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <TransactionsProvider>
     <ThemeProvider theme={theme}>
       <App/>
      </ThemeProvider>
    </TransactionsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



