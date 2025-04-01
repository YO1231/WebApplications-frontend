import './App.css';
import Todo from './Todo';

function App() {
  let name = "YKH";
  
  let output = <div className="App">{name}
    <Todo />
    <Todo />
    <Todo />
  </div>;

    return (
      output
    );  
}

export default App;