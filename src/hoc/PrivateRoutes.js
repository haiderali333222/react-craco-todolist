import React from 'react';

const PrivateRoute = ({ children }) => {
  const authData = { isAuthenticated: true };

  return authData.isAuthenticated ? children : <></>;
};

export default PrivateRoute;
