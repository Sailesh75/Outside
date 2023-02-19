import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './icon/variables.scss';
import './icon/style.scss';
import './session-1/assignment/dashboard/sidebar/_sidebar.scss';
import './session-1/assignment/dashboard/screen/header/_header.scss';
import './session-1/assignment/dashboard/screen/table/_table.scss';
import './session-1/assignment/dashboard/screen/table/_ticket.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
