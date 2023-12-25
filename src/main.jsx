import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './welcome/welcomePage';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {//<App />
        <Dashboard />
      }
    </BrowserRouter>
  </React.StrictMode>
);
