import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './welcome/welcomePage';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import Signup from './Signup';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {//<App />
    <Dashboard />
    
    }
    
  </React.StrictMode>
);
