const welcome = document.getElementById('welcome')
const today = document.getElementById('today')
const time = document.getElementById('time')
const dayLeft = document.getElementById('dayLeft')

const getCurrentTime = () => {
	const day = new Date()
	const newYear = '1 january ' + (day.getFullYear() + 1)
	const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']

	let welcome = 'Доброе утро'
	const hours = day.getHours()

	if (hours > 11 && hours < 17) {
		welcome = 'Добрый день'
	} else if (hours >= 17 && hours < 22) {
		welcome = 'Добрый вечер'
	} else if (hours >= 22 && hours < 4) {
		welcome = 'Доброй ночи'
	}

	const weekDay = daysOfWeek[day.getDay() - 1]
	const time = day.toLocaleTimeString()

	const dateStop = new Date(newYear).getTime()
	const dateNow = day.getTime()
	const timeRemaining = (dateStop - dateNow) / 1000
	const dayLeft = Math.floor(timeRemaining / 3600 / 24)

	return { welcome, weekDay, time, dayLeft }
}

const updateClock = () => {
	let getData = getCurrentTime()

	welcome.textContent = getData.welcome
	today.textContent = getData.weekDay
	time.textContent = getData.time
	dayLeft.textContent = getData.dayLeft

	setInterval(updateClock, 1000)
}

updateClock()