import React, { useState } from 'react';
import './todo.css';

function TodoComponent({ selectedDate, tasks, setTasks }) {
  const [todos, setTodos] = useState([]);

  function getTasksForDate(date) {
    const task = tasks.find((task) => task.date === date);
    return task ? task.tasks : [];
  }

  function addTodo(newTodoList) {
    const newTodo = {
      id: Date.now(),
      list: newTodoList,
    };
    setTasks((prevTasks) => [
      ...prevTasks,
      { date: selectedDate, tasks: newTodoList },
    ]);
    //setTodos((prevTodos) => [...prevTodos, newTodo]);
    //console.log('Todo added!', todos);
  }

  function removeTodo(taskIndex) {
    const updatedTasks = tasks.map((taskObj) => {
      if (taskObj.date === selectedDate) {
        return {
          ...taskObj,
          tasks: taskObj.tasks.filter((_, index) => index !== taskIndex),
        };
      }
      return taskObj;
    });

    setTasks(updatedTasks);
    //const updatedTodos = todos.filter((todo) => todo.id !== id);
    //setTodos(updatedTodos);
    //console.log('Todo removed!', updatedTodos);
  }

  function updateTodo(taskIndex, updatedTask) {
    const updatedTasks = tasks.map((taskObj) => {
      if (taskObj.date === selectedDate) {
        return {
          ...taskObj,
          tasks: taskObj.tasks.map((task, index) =>
            index === taskIndex ? updatedTask : task
          ),
        };
      }
      return taskObj;
    });

    setTasks(updatedTasks);
  }

  /*const updatedTodos = todos.map((todo) => {
    //  if (todo.id === id) {
    //    return { ...todo, list: newTodoList };
    //  }
     // return todo;
    });
    setTodos(updatedTodos);
    console.log('Todo updated!', updatedTodos);
  }*/

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {getTasksForDate(selectedDate).map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTodo(index)}>Remove</button>
            <button onClick={() => updateTodo(index, 'Updated Task')}>
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
/*      {todos.map((taskObj) => (
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
}*/
export default TodoComponent;
