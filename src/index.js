import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  Router,
  Routes,
  Route
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/test_repository">
    <Routes>
      <Route exact path = "/web_app" component = {App} />
    </Routes>
  </Router>
);
