import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Burner from './Burner';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Burner/> */}
  </React.StrictMode>
);

