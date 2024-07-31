import './App.css';
import Lists from './components/AddTask';
import { List } from './context/TaskContext';



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <List>
           <Lists />
          </List>
      </header>
    </div>
  );
}

export default App;
