const timer = (deadline) => {
	const timerHours = document.getElementById('timer-hours')
	const timerMinutes = document.getElementById('timer-minutes')
	const timerSeconds = document.getElementById('timer-seconds')

	const getTimeRemaining = () => {
		const dateStop = new Date(deadline).getTime()
		const dateNow = new Date().getTime()
		const timeRemaining = (dateStop - dateNow) / 1000

		let days = Math.floor(timeRemaining / 3600 / 24)
		let hours = Math.floor((timeRemaining / 3600) % 24)
		let minutes = Math.floor((timeRemaining / 60) % 60)
		let seconds = Math.floor(timeRemaining % 60)

		return { timeRemaining, hours, minutes, seconds }
	}

	const updateClock = () => {
		let getTime = getTimeRemaining()

		if (getTime.timeRemaining > 0) {
			timerHours.textContent = (getTime.hours).toString().padStart(2, '0')
			timerMinutes.textContent = (getTime.minutes).toString().padStart(2, '0')
			timerSeconds.textContent = (getTime.seconds).toString().padStart(2, '0')

			setInterval(updateClock, 1000)
		} else {
			timerHours.textContent = '00'
			timerMinutes.textContent = '00'
			timerSeconds.textContent = '00'
		}

	}

	updateClock()

}

export default timer