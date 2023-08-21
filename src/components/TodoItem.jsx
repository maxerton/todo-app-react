import { useState } from "react";

const TodoItem = ({elems, del, toggleCompleted, editTodo}) => {
  const [edit, setEdit] = useState({state: 0, val: ''});

  const editHandler = () => {
    if (edit.state === 0) {
      setEdit({val: elems.text, state: 1})
    } else if (edit.state === 1) {
      editTodo(elems.id, edit.val);
      setEdit({...edit, state: 0})
    }
  }

  return (
    <li className="todo-item">
      <input type="checkbox" className='mr-10 todo-item__check' checked={elems.completed} onChange={ () => {toggleCompleted(elems.id)} } />
      <span className={`mr-10 todo-item__number ${elems.completed ? 'check-item':''}`}>{elems.id}</span>
      {edit.state === 0 ? <p className={`todo-item__text ${elems.completed ? 'check-item':''}`}>{elems.text}</p> : 
      <input value={ edit.val } onChange={ (ev) => setEdit({...edit, val: ev.target.value}) }  />}
      <div className="user-action">
        <button className='user-action__edit btn-icon' onClick={ editHandler }>edit</button>
        <button className='user-action__del btn-icon' onClick={ () => {del(elems.id)} }>x</button>
      </div>
    </li>
  );
};

export default TodoItem;