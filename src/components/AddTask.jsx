import { useState } from 'react';
import { useTasksDispatch } from './TaskContext';

export function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
      <input
        placeholder="Adicione uma profissão"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Adicionar profissão</button>
    </>
  );
}

let nextId = 3;

export default AddTask;