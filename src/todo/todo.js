// Sample data for initial todos
export const initialTodos = [
  { id: 1, list: ['Task 1', 'Task 2'] },
  { id: 2, list: ['Task 3', 'Task 4'] },
];

// Function for adding a new todo
export function addTodo(date, taskList) {
  const newId = initialTodos.length + 1;
  const newTodo = { id: newId, list: newTodoList };
  initialTodos.push(newTodo);
  console.log('Todo added:', newTodo);
}

// Function for removing a todo by id
export function removeTodo(date, taskIndex) {
  const task = initialTodos.find((taskObj) => taskObj.date === date);
  if (task) {
    task.tasks.splice(taskIndex, 1);
    console.log('Todo removed:', task);
  } else {
    console.log('Task not found for date:', date);
  }
}

// Function for updating a todo by id
export function updateTodo(date, taskIndex, updatedTask) {
  const task = initialTodos.find((taskObj) => taskObj.date === date);
  if (task) {
    task.tasks[taskIndex] = updatedTask;
    console.log('Todo updated:', task);
  } else {
    console.log('Task not found for date:', date);
  }
}
