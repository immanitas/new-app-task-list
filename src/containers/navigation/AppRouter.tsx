import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './AppRoutes';
// import your route components too

class AppRouter extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    )
  }
}

export default AppRouter;