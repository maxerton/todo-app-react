import { useEffect, useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";


function App() {
  const [todos, setTodos] = useState(localStorage.getItem('data') !== undefined ? JSON.parse(localStorage.getItem('data')) :[]);

  const getLast = () => {
    if (todos.length === 0) return 1;
    return Math.max(...[...todos].map(el => el.id)) + 1;
  }

  console.log(getLast());

  const addTodo = (txt) => {
    setTodos([...todos, {id: getLast(), text: txt, completed: false}]);
  }
  
  const deleteTodo = (id) => {
    setTodos(todos.filter((el) => el.id !== id));
  }

  const toggleCompleted = (id) => {
    setTodos(todos.map(el => {
      if (el.id === id) {
        return {...el, completed: !el.completed};
      }
      return {...el};
    }))
  }
  
  const editToDo = (id, text) => {
    setTodos(todos.map(el => {
      if (el.id === id) {
        return {...el, text: text};
      }
      return {...el};
    }))
  }

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>Todo App</h1>

      <AddTodo addTodo={ addTodo }></AddTodo>

      <div className="todos">
        <TodoList todoList={ [...todos] } deleteTodo={ deleteTodo } toggleCompleted={toggleCompleted} editToDo={ editToDo }></TodoList>
      </div>
    </div>
  );
}

export default App;
