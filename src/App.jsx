import { useEffect, useState } from 'react';
import { useLocation, useRoutes } from 'react-router-dom'
import router from './router';

const Access = (canAccess, children) => {
  if (!canAccess) {
    return null
  }
  return <>{children}</>
}

function App() {
  const location = useLocation()
  useEffect(() => {
    console.log(location, "enter");
    return () => {
      console.log(location, 'leave');
    }
  }, [location.pathname]);

  return (
    useRoutes(router)
  )
}
export default App;
