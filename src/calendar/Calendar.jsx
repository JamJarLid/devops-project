import React, {useState } from 'react';
import './calendar.css';
const calendar = () => {
  const [date, fixDate] = useState(new Date());
  const handlePrevMonth = () => {
    fixDate(prevDate => {
      let year = prevDate.getFullYear();
      let month = prevDate.getMonth() - 1;
      if (month < 0) {
        month = 11;
        year -= 1;
      }
      return new Date(year, month, 1);
    });
  };

  const fixNextMonth = () => {
    fixDate(prevDate => {
      let year = prevDate.getFullYear();
      let month = prevDate.getMonth() + 1;
      if (month > 11) {
        month = 0;
        year += 1;
      }
      return new Date(year, month, 1);
    });
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const weekDays = [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
        'Sunday'
  ];
  
  const currentMonth = months[date.getMonth()];
  const currentYear = date.getFullYear();

  const daysInMonth = new Date(currentYear, date.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, date.getMonth(), 1).getDay();

  const hourNow = new Date().getHours();
  const minuteNow = new Date().getMinutes();
  const dayNow = new Date().getDay();
  const dateNow = new Date().getDate();
  const monthNow = new Date().getMonth() + 1;
  const yearNow = new Date().getFullYear();

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div className="empty-day" key={`empty-${i}`}></div>);
  }
  for (let i = 1; i <= daysInMonth; i++) {
      days.push(<div className="day" key={`day-${i}`}>{i}</div>);
  }

  return (
    <div className="calendarContainer">
      <div className='calendarTodo'>
        <h2>{weekDays[dayNow]}</h2> <br></br>
        <h2>{dateNow}/{months[monthNow]}/{yearNow}</h2>
        <h2> {hourNow}:{minuteNow}</h2>
      </div>
      <div className="calendar">
                <div className="header">
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <h2>{currentMonth} {currentYear}</h2>
                    <button onClick={handleNextMonth}>&gt;</button>
                </div>
    <div className="days">
      <div className='weekday'>Mon</div>
      <div className='weekday'>Tue</div>
      <div className='weekday'>Wed</div>
      <div className='weekday'>Thu</div>
      <div className='weekday'>Fri</div>
      <div className='weekday'>Sat</div>
      <div className='weekday'>Sun</div>
      </div>
      <div className="dates">
                    {days}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
  
  

