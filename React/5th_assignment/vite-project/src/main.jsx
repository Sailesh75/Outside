import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './icon/variables.scss';
import './icon/style.scss';
import './session-6/dashboard/sidebar/_sidebar.scss';
import './session-6/dashboard/screen/header/_header.scss';
import './session-6/dashboard/screen/table/_table.scss';
import './session-6/dashboard/screen/table/_ticket.scss';
import './session-6/dashboard/screen/header/_modal.scss'
import './session-6/dashboard/screen/overview/_overview.scss';
import './session-6/login/_login.scss';
import './session-6/signup/_signup.scss';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
