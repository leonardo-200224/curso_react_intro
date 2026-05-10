import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a react.js', completed: false },
  { text: 'LALALLALALA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={16} total={26} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}
                    text={todo.text}
                    completed = {todo.completed}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </React.Fragment>
  );
}



export default App;
