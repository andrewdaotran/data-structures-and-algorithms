// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

const nestedEvenSum = (obj) => {
	let sum = 0

	for (let item in obj) {
		if (typeof obj[item] === 'object') {
			sum += nestedEvenSum(obj[item])
		}
		if (obj[item] % 2 === 0) {
			sum += obj[item]
		}
	}

	return sum
}
