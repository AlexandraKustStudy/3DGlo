const validate = () => {
	const inputsText = document.querySelectorAll('input[type="text"]:not(.calc-item)')
	const inputsEmail = document.querySelectorAll('input[type="email"]')
	const inputsTel = document.querySelectorAll('input[type="tel"]')

	inputsText.forEach(input => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/[^а-яё\s-]/gi, '')
		})
	})

	inputsEmail.forEach(input => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/[^a-z0-9@\-_.!~*']/gi, '')
		})
	})

	inputsTel.forEach(input => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/[^0-9/(/)/-]/gi, '')
		})
	})
}

export default validate