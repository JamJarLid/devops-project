import React, {useEffect} from 'react';

function currentDay() {
	useEffect(() => {
		showCurrentDatetime();
	},[]);

	function showCurrentDatetime() {
		const today = new Date();
		const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

        const dateElement = document.getElementById('current-date');
        const timeElement = document.getElementById('current-time');

        dateElement.textContent = today.toLocaleDateString('sv-SE', dateOptions);
        timeElement.textContent = today.toLocaleTimeString('sv-SE', timeOptions);
  }

	return (
		<div>
			<p id="current-date"></p>
			<p id="current-time"></p>
			</div>
	);


}

export default currentDay
