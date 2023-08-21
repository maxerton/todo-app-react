import React, { useState } from 'react';

const AddTodo = ({addTodo}) => {
  const [inp, setInp] = useState('');
  return (
    <div className="add-todo">
      <input type="text" value={inp} onChange={ (ev) => setInp(ev.target.value) } className='add-todo__input' placeholder='enter todo text' />
      <button onClick={ () => {addTodo(inp); setInp('')} } className='add-todo__btn'>add todo</button>
    </div>
  );
};

export default AddTodo;