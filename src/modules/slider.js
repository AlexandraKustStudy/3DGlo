const slider = (wrapperSlides, slideClass, wrapperDots, activeSlideClass = 'portfolio-item-active', activeDotClass = 'dot-active') => {
	const sliderBlock = document.querySelector(wrapperSlides)
	const slides = document.querySelectorAll(slideClass)
	const wrapDots = document.querySelector(wrapperDots)
	let dots

	let currentSlide = 0
	let interval

	if (!sliderBlock) return console.log('Контейнер слайдера не найден');
	if (!slides.length) return console.log('Не найдено ни одного слайда с таким классом');
	if (!wrapDots) return console.log('Контейнер пагинации не найден');

	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass)
	}
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass)
	}

	const autoSlide = () => {
		prevSlide(slides, currentSlide, activeSlideClass)
		prevSlide(dots, currentSlide, activeDotClass)
		currentSlide++

		if (currentSlide >= slides.length) {
			currentSlide = 0
		}

		nextSlide(slides, currentSlide, activeSlideClass)
		nextSlide(dots, currentSlide, activeDotClass)
	}

	const startSlide = () => {
		interval = setInterval(autoSlide, 2000)
	}

	const stopSlide = () => {
		clearInterval(interval)
	}

	const createDot = (index) => {
		const li = document.createElement('li')
		li.classList.add('dot')
		if (!index) li.classList.add(activeDotClass);

		return li
	}

	const appendDots = () => {
		for (let i = 0; i < slides.length; i++) {
			wrapDots.append(createDot(i))
		}

		dots = document.querySelectorAll('.dot')
	}

	appendDots()
	startSlide()

	sliderBlock.addEventListener('click', (e) => {
		e.preventDefault()

		if (!e.target.matches('.dot, .portfolio-btn')) return;

		prevSlide(slides, currentSlide, activeSlideClass)
		prevSlide(dots, currentSlide, activeDotClass)

		if (e.target.matches('#arrow-right')) {
			currentSlide++
		} else if (e.target.matches('#arrow-left')) {
			currentSlide--
		} else if (e.target.closest('.dot')) {
			dots.forEach((dot, index) => {
				if (dot === e.target) {
					currentSlide = index
				}
			})
		}

		if (currentSlide >= slides.length) {
			currentSlide = 0
		}

		if (currentSlide < 0) {
			currentSlide = slides.length - 1
		}

		nextSlide(slides, currentSlide, activeSlideClass)
		nextSlide(dots, currentSlide, activeDotClass)
	})

	sliderBlock.addEventListener('mouseenter', (e) => {
		if (e.target.matches('.dot, .portfolio-btn')) stopSlide()
	}, true)

	sliderBlock.addEventListener('mouseleave', (e) => {
		if (e.target.matches('.dot, .portfolio-btn')) startSlide()
	}, true)
}

export default slider