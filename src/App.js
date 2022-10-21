import './App.css';
import Collapse from './Collapse';
import CollapseThree from './collapseThree';
import CollapseTwo from './collapseTwo';
function App() {
  return (
    <div style={{ margin: '100px' }} className="App">
      <Collapse />
      <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Collapse Two </p>
      <CollapseTwo />
      <p style={{ fontSize: '30px', fontWeight: 'bold' }}>Collapse Two End</p>

      <CollapseThree />
    </div>
  );
}

export default App;
