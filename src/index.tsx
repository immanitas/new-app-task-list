import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './containers/navigation/AppRouter';
import reportWebVitals from './reportWebVitals';
import { ThemeContainer } from './containers/theme/ThemeContainer';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContainer>
      <AppRouter />
    </ThemeContainer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
