const menu = () => {
	const menuBtn = document.querySelector('.menu')
	const menu = document.querySelector('menu')
	const closeBtn = menu.querySelector('.close-btn')
	const menuItems = menu.querySelectorAll('ul>li>a')

	const hundleMenu = () => {
		menu.classList.toggle('active-menu')
	}

	menuBtn.addEventListener('click', hundleMenu)
	closeBtn.addEventListener('click', hundleMenu)

	menuItems.forEach(item => {
		item.addEventListener('click', hundleMenu)
	})

}

export default menu