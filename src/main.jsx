import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './welcome/welcomePage';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import {BrowserRouter} from 'react-router-dom'
//import SignUp from './welcome/components/SignUpLogin/Sign'
import Login from './welcome/components/SignUpLogin/Login'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {//<App />
       <Dashboard />
       //<SignUp />
        //<Login />
      }
    </BrowserRouter>
  </React.StrictMode>
);
