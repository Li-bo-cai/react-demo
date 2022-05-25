import Demo1 from './views/demo1'
import Demo2 from './views/demo2'
import Demo3 from './views/demo3';
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="demo-1">
          <Demo1 />
        </div>
        <div>
          <Demo2 />
        </div>
        <div>
          <Demo3 />
        </div>
      </BrowserRouter>
    </div>

  );
}
export default App;
