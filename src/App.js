/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AuthPage from './views/TodoList';
// import UnPrivateRoute from './hoc/UnprivateRoutes';

const App = () => {
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
