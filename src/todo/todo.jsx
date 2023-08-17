import React, { useState } from 'react';
import './todo.css';

function TodoComponent({ selectedDate, tasks, setTasks}) {
  const [todos, setTodos] = useState([]);

  function addTodo(newTodoList) {
    const newTodo = {
      id: Date.now(),
      list: newTodoList,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    console.log('Todo added!', todos);
  }

  function removeTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    console.log('Todo removed!', updatedTodos);
  }

  function updateTodo(id, newTodoList) {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, list: newTodoList };
      }
      return todo;
    });
    setTodos(updatedTodos);
    console.log('Todo updated!', updatedTodos);
  }

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((taskObj) => (
          <li key={taskObj.id}>
            {taskObj.list.join(', ')}
            <button onClick={() => removeTodo(taskObj.id)}>Remove</button>
            <button
              onClick={() =>
                updateTodo(todo.id, ['Updated Task 1', 'Updated Task 2'])
              }
            >
              Update
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTodo(['New Task 1', 'New Task 2'])}>
        Add New Todo
      </button>
    </div>
  );
}

export default TodoComponent;
