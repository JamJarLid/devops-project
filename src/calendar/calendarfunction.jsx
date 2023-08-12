import React, { useState } from 'react';

function calendarFunction() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  function viewCalendar(month, year) {
    setSelectedMonth(month);
    setSelectedYear(year);
  }

  function changeMonth(step) {
    setSelectedMonth((prevMonth) => {
      const newMonth = prevMonth + step;
      if (newMonth < 0) {
        setSelectedYear((prevYear) => prevYear - 1);
        return 11;
      }
      if (newMonth > 11) {
        setSelectedYear((prevYear) => prevYear + 1);
        return 0;
      }
      return newMonth;
    });
  }

  return (
    <div>
      <div>
        <h2>Calendar</h2>
        <button onClick={() => changeMonth(-1)}>Previous Month</button>
        <button onClick={() => changeMonth(1)}>Next Month</button>
      </div>
      <div>
        <h3>
          {selectedYear} - {selectedMonth + 1}
        </h3>
      </div>
    </div>
  );
}

export default calendarFunction;
