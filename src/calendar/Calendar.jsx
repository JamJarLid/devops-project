import React, { useState } from 'react';
import './calendar.css';
import TodoComponent from '../todo/todo.jsx';
import { initialTodos, removeTodo, updateTodo } from '../todo/todo.js';

const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [tasks, setTasks] = useState([...initialTodos]);
  const [taskInput, setTaskInput] = useState('');

  const setPrevMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const setNextMonth = () => {
    setDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const setDateClick = (day) => {
    setSelectedDate(day);
  };

  const addTodo = (date, taskList) => {
    setTasks((prevTasks) => [...prevTasks, { date, tasks: taskList }]);
  };

  const getTasksForDate = (date) => {
    const task = tasks.find((task) => task.date === date);
    return task ? task.tasks : [];
  };

  const addTask = () => {
    if (taskInput.trim() !== '' && selectedDate) {
      const updatedTasks = tasks.map((task) =>
        task.date === selectedDate
          ? { date: selectedDate, tasks: [...task.tasks, taskInput] }
          : task
      );

      setTasks(updatedTasks);
      setTaskInput('');
    }
  };

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const weekDaysShort = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const currentMonth = months[date.getMonth()];
  const currentYear = date.getFullYear();

  const daysInMonth = new Date(currentYear, date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, date.getMonth(), 0).getDay();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div className="empty-day" key={`empty-${i}`}></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateFull = `${i}${currentMonth}${currentYear}`;
    const taskList = getTasksForDate(dateFull);
    days.push(
      <div
        className={`day ${selectedDate === dateFull ? 'selected' : ''}`}
        key={`day-${i}`}
        onClick={() => setDateClick(dateFull)}
      >
        <div className="day-number">{i}</div>
        <div className="task-count">{taskList.length}</div>
      </div>
    );
  }

  return (
    <div className="calendar-container">
      <div className="calendar-todo">
        <h2 className="calendar-day">{weekDays[date.getDay()]}</h2>
        <h2 className="calendar-date">
          {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
        </h2>
        <h2 className="calendar-time">
          {date.getHours()}:{String(date.getMinutes()).padStart(2, '0')}
        </h2>
      </div>
      <div className="calendar">
        <div className="header">
          <button onClick={setPrevMonth}>&lt;</button>
          <h2>
            {currentMonth} {currentYear}
          </h2>
          <button onClick={setNextMonth}>&gt;</button>
        </div>
        <div className="days">
          {weekDaysShort.map((day) => (
            <div className="weekday" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="dates">{days}</div>
      </div>
      <div className="todo-container">
        {selectedDate && (
          <TodoComponent
            selectedDate={selectedDate}
            tasks={tasks}
            setTasks={setTasks}
          />
        )}
        {selectedDate && (
        <div className="todo-list">
          <h3>{selectedDate}</h3>
          <ul>
            {getTasksForDate(selectedDate).map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => removeTodo(selectedDate, index)}>
                  Remove
                </button>
                <button
                  onClick={() =>
                    updateTodo(selectedDate, index, [
                      'Updated Task 1',
                      'Updated Task 2',
                    ])
                  }
                >
                  Update
                </button>
              </li>
            ))}
          </ul>
          <div className="add-task">
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Calendar;
