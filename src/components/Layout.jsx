import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Nav from './Nav';

const Layout = () => {
  return (
    <div>
      <header>
        <Nav />
      </header>
      <Suspense fallback={<h1>Load page....</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
