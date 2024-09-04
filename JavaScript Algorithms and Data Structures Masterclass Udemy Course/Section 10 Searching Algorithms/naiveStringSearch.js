const naiveStringSearch = (str, subStr) => {
	let count = 0

	for (let i = 0; i < str.length; i++) {
		if (str[i] === subStr[0]) {
			for (let j = 1; j < subStr.length; j++) {
				if (str[i + j] !== subStr[j]) break
				console.log(str[i + j], subStr[j])
			}
			console.log('COUNTED')
			count++
		}
	}

	return count
}
