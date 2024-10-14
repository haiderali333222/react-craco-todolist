/* eslint-disable react/jsx-wrap-multilines */
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import i18n from './i18n';

import AuthPage from './views/TodoList'
// import UnPrivateRoute from './hoc/UnprivateRoutes';

const App = () => {
  useEffect(() => {
    i18n.changeLanguage('en');
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage path="/signup" />} />

      
        </Routes>
      </Router>
    </div>
  );
};

export default App;
