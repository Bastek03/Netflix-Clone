import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Start from './containers/StartPage/Start';
import Login from './containers/LoginPage/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Netflix-Clone/start" element={<Start />} />
          <Route path="/Netflix-Clone/login" element={<Login />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

