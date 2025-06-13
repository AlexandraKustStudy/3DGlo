const modal = () => {
	const modal = document.querySelector('.popup')
	const closeBtn = modal.querySelector('.popup-close')

	function fadeBlock(block, isFadeIn) {
		let startOpacity = isFadeIn ? 0 : 1;
		let endOpacity = isFadeIn ? 1 : 0;
		const startTime = performance.now();

		function animate(currentTime) {
			const elapsedTime = currentTime - startTime;
			const progress = Math.min(elapsedTime / 500, 1);
			block.style.opacity = startOpacity + (endOpacity - startOpacity) * progress;

			if (progress < 1) {
				requestAnimationFrame(animate);
			} else if (isFadeIn) {
				block.style.display = "block";
			} else {
				block.style.display = "none";
			}
		}

		if (isFadeIn) block.style.display = "block";
		requestAnimationFrame(animate);
	}

	document.addEventListener('click', (e) => {
		const target = e.target

		if (target.closest('.popup-btn')) {
			if (window.innerWidth > 768) {
				fadeBlock(modal, true)
			} else {
				modal.style.display = 'block'
			};
		}

	})

	closeBtn.addEventListener('click', () => {

		if (window.innerWidth > 768) {
			fadeBlock(modal, false)
		} else {
			modal.style.display = ''
		}
	})
}

export default modal