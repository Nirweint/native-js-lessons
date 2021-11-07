
const todoListID_1 = "1";
const todoListID_2 = "2";

const todoLists = [
	{
		id: todoListID_1, // '1'
		title: "What to learn",
		filter: "all",
	},
	{
		id: todoListID_2,
		title: "What to buy",
		filter: "all",
	},
]

const tasks = {
	[todoListID_1] : [
		{id: 1, title: "HTML", isDone: false},
		{id: 2, title: "CSS", isDone: false},
		{id: 3, title: "React", isDone: false},
	],
	[todoListID_2] : [
		{id: 1, title: "bread", isDone: false},
		{id: 2, title: "beer", isDone: false},
		{id: 3, title: "milk", isDone: false},
	],
}

console.log(tasks[todoListID_1].filter(t => t.id !== 1))
console.log({...tasks, [todoListID_1] : tasks[todoListID_1].filter(t => t.id !== 1)})
console.log({...tasks, [todoListID_1] : [...tasks[todoListID_1], {id: 4, title: "array", isDone: false}]})
console.log(typeof tasks)

// --------------------------------------
// reduce

const numbers = [1,2,3,4,5,6,7,9];

console.log(numbers.reduce((acc,item) => {
	return acc + item
}, 0))

console.log(numbers.reduce((acc,el) => acc > el ? acc : el)) // find max value in array

let students = [
	{
		name: "Bob",
		age: 22,
		isMarried: true,
		scores: 85
	},
	{
		name: "Alex",
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
		scores: 100
	}
];

console.log(students.reduce((acc, el) => acc + el.scores, 0))

console.log(students.reduce((acc, el) => {// like filter method
	if (el.scores >= 100) {
		acc.push(el)
	}
	return acc
}, []))

console.log(students.reduce((acc, el) => {// like map method to change element in array
	if (el.name === "Nick") {
		let copy = {...el, isMarried: true}
		acc.push(copy)
		return acc
	}
	acc.push(el)
	return acc
}, []))