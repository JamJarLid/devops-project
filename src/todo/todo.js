// Sample data for initial todos
let todos = [
  { id: 1, list: ['Task 1', 'Task 2'] },
  { id: 2, list: ['Task 3', 'Task 4'] },
];

// Function for adding a new todo
function addTodo(newTodoList) {
  const newId = todos.length + 1;
  const newTodo = { id: newId, list: newTodoList };
  todos.push(newTodo);
  console.log('Todo added:', newTodo);
}

// Function for removing a todo by id
function removeTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  console.log('Todo removed with id:', id);
}

// Function for updating a todo by id
function updateTodo(id, newTodoList) {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todos[todoIndex].list = newTodoList;
    console.log('Todo updated:', todos[todoIndex]);
  } else {
    console.log('Todo not found with id:', id);
  }
}

// Testing the functions
addTodo(['New Task 1', 'New Task 2']);
removeTodo(1);
updateTodo(2, ['Updated Task 3', 'Updated Task 4']);
console.log('Updated Todos:', todos);
