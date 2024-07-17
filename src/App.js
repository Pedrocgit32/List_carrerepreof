import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import { TasksProvider } from './context/TaskContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TasksProvider>
          <h1>Coloque ou deleta uma profissão</h1>
          <AddTask />
          <TaskList />
        </TasksProvider>
      </header>
    </div>
  );
}

export default App;
