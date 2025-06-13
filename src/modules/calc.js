const calc = () => {
	const inputs = document.querySelectorAll('input.calc-item')

	inputs.forEach(input => {
		input.addEventListener('input', () => {
			input.value = input.value.replace(/[^0-9]/g, '')
		})
	})
}

export default calc