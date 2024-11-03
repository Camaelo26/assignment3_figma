import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import CreateAccountPage from './components/CreateAccountPage';
import ForgetPasswordPage from './components/ForgetPasswordPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/create-account" element={<CreateAccountPage />} />
        <Route path="/forgot-password" element={<ForgetPasswordPage />} />
        <Route path="/main" element={<div>Main Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
