// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

const reverse = (str) => {
	let newStr = ''
	const helper = (str) => {
		if (str.length === 1) return (newStr = newStr + str)
		newStr = newStr + str.substring(str.length - 1)
		helper(str.substring(0, str.length - 1))
	}

	helper(str)

	return newStr
}
