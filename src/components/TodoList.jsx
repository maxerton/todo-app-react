import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todoList, deleteTodo, toggleCompleted, editToDo}) => {

  return (
    <React.Fragment>
      <h2>todo list</h2>
      <ul className="todo-list">
        { todoList.map(el=>el).sort((a, b) => Number(a.completed) - Number(b.completed)).map((el, index) => <TodoItem elems={el} del={deleteTodo} i={el.id} key={index} toggleCompleted={toggleCompleted} editTodo={ editToDo }></TodoItem>) }
      </ul>
    </React.Fragment>
  );
};

export default TodoList;