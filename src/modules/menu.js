const menu = () => {
	const menu = document.querySelector('menu')

	const hundleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	document.addEventListener('click', (e) => {
		if (!e.target.closest('menu') && menu.classList.contains('active-menu') || e.target.closest('.menu')) hundleMenu()

		if (e.target.closest('.close-btn') || e.target.closest('a')) hundleMenu()
	})

}

export default menu