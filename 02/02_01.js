const arr = [1,56,790,10,465,32]


// bubble sort O(n*2)
for (let j = 0; j < arr.length - 1; j++) {
	for (let i = 0; i < arr.length - 1 - j; i++) {
		if (arr[i] > arr[i + 1]) {
			[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
		}
	}
}
console.log(arr)

// immutableSort homeWork

// sort
const names = ["Bob", "Alex", "Nick", "Donald", "Joe", "999", "!alex", "Юрий", "!юрий"]

const num = [1,56,790,10,465,32]

console.log(names.sort())

// compare function

// const compareFn = (a, b) => {
// 	if (a > b) {
// 		return 666
// 	} else {
// 		return -2
// 	}
// }

const compareFn = (a, b) => a - b // .reverse() - to reverse array

console.log(num.sort(compareFn))

// ---------------------

const students = [
	{
		name: "Bob",
		age: 22,
		isMarried: true,
		scores: 95
	},
	{
		name: "Alex",
		age: 23,
		isMarried: true,
		scores: 89
	},
	{
		name: "alex",
		age: 23,
		isMarried: true,
		scores: 89
	},
	{
		name: "Helge",
		age: 21,
		isMarried: true,
		scores: 89
	},
	{
		name: "Nick",
		age: 20,
		isMarried: false,
		scores: 120
	},
	{
		name: "John",
		age: 19,
		isMarried: false,
		scores: 121
	},
];

console.log(students
	.sort((a,b) => a.scores - b.scores)
	.reverse() // chaining
)

console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1)) // sort by names in objects