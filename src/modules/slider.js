const slider = () => {
	const sliderBlock = document.querySelector('.portfolio-content')
	const slides = document.querySelectorAll('.portfolio-item')
	const dots = document.querySelectorAll('.dot')

	let currentSlide = 0

	const prevSlide = (elems, index, strClass) => {
		elems[index].classList.remove(strClass)
	}
	const nextSlide = (elems, index, strClass) => {
		elems[index].classList.add(strClass)
	}

	const autoSlide = () => {
		prevSlide(slides, currentSlide, 'portfolio-item-active')
		prevSlide(dots, currentSlide, 'dot-active')
		currentSlide++

		if (currentSlide >= slides.length) {
			currentSlide = 0
		}

		nextSlide(slides, currentSlide, 'portfolio-item-active')
		nextSlide(dots, currentSlide, 'dot-active')
	}

	const startSlide = () => {
		setInterval(autoSlide, 2000)
	}

	const stopSlide = () => {

	}

	startSlide()

	sliderBlock.addEventListener('click', (e) => {
		e.preventDefault()

		if (!e.target.matches('.dot, .portfolio-btn')) return;

		prevSlide(slides, currentSlide, 'portfolio-item-active')
		prevSlide(dots, currentSlide, 'dot-active')

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

		nextSlide(slides, currentSlide, 'portfolio-item-active')
		nextSlide(dots, currentSlide, 'dot-active')
	})
}

export default slider