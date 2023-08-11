import React, { useState } from 'react';
import './calendar.css';

const Calendar = () => {
  // ... (rest of the code)

  // Function to add a new todo
  const addTodo = (date, task) => {
    const updatedTasks = tasks.map(taskObj => {
      if (taskObj.date === date) {
        return {
          ...taskObj,
          tasks: [...taskObj.tasks, task],
        };
      }
      return taskObj;
    });

    setTasks(updatedTasks);
  };

  // Function to remove a todo
  const removeTodo = (date, taskIndex) => {
    const updatedTasks = tasks.map(taskObj => {
      if (taskObj.date === date) {
        return {
          ...taskObj,
          tasks: taskObj.tasks.filter((_, index) => index !== taskIndex),
        };
      }
      return taskObj;
    });

    setTasks(updatedTasks);
  };

  // Function to update a todo
  const updateTodo = (date, taskIndex, updatedTask) => {
    const updatedTasks = tasks.map(taskObj => {
      if (taskObj.date === date) {
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
  };

  // ... (rest of the code)
};

export default Calendar;

