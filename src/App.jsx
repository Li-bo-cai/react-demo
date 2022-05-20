import './assets/css/App.css';
import Demo1 from './view/demo-1'
import Demo2 from './view/demo-2'
function App() {
  return (
    <div>
      <div className="demo-1">
        <Demo1 />
      </div>
      <div>
        <Demo2 />
      </div>
    </div>

  );
}
export default App;
