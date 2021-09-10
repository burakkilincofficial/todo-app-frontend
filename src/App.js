import './App.css';
import TodoApp from "./components/todo/TodoApp";

//if it is component, return must be in render() method.
function App() {
    return (
        <div className="App">
            <TodoApp/>
        </div>
    );
}


export default App;
