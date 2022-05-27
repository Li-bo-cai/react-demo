import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import router from './router';

const Access = (canAccess, children) => {
  if (!canAccess) {
    return null
  }
  return <>{children}</>
}

function App() {
  useEffect(()=>{
    
  })
  return (
    useRoutes(router)
  )
}
export default App;
