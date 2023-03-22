import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./components/HomePage/HomePage";
import PostsPage from "./components/PostsPage/PostsPage";
import TicketsPage from "./components/TicketsPage/TicketsPage";
import AdminPage from "./components/AdminPage/AdminPage";
import Navbar from "./components/Navbar/Navbar";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/posts" component={PostsPage} />
          <Route exact path="/tickets" component={TicketsPage} />
          <Route exact path="/admin" component={AdminPage} />
      </div>
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
