const yo = "yo!!!";

let hey = yo;
hey = "hey";

console.log(yo) // "yo!!!"
console.log(hey) // "hey"

// ---------------------------
const bob = {  // new Object() Object.assign() Object.create()
	name: 'Bob',
	age: 23,
	isStudent: true,
	friends: ['Ann', "Dimon"]
}

const alex = bob
alex.name = "Alex"

console.log(bob)

// ---------------------------
const a = {} // #456
const b = {} // #687
console.log(a === b) // false так как разные ссылки на обьект

// ---------------------------
const bobKeys = Object.keys(bob) // вернет массив ключей
console.log(bobKeys) // ['name', 'age', 'isStudent']

// ---------------------------

// деструктурирующее присваивание (spread operator)
// const copyBob = {...bob};
const copyBob = {...bob, friends: [...bob.friends]};

// копирование bobKeys в copyBob
// for (let i = 0; i < bobKeys.length; i++) {
// 	copyBob[bobKeys[i]] = bob[bobKeys[i]]
// }
// Object.assign()

console.log(copyBob) // {name: 'Alex', age: 23, isStudent: true}
console.log(bob === copyBob) // false

bob.name = "Bob"
console.log(bob) // {name: 'Bob', age: 23, isStudent: true}
console.log(copyBob) // {name: 'Alex', age: 23, isStudent: true}

// ---------------------------

copyBob.friends.push("Helga");

console.log(bob)
console.log(copyBob)
console.log(bob.friends === copyBob.friends) // false

const students = [
	{
		name: "Bob",
		age: 22,
		isMarried: true,
		scores: 120,
	},
	{
		name: "Alex",
		age: 21,
		isMarried: true,
		scores: 85,
	},
	{
		name: "Michel",
		age: 20,
		isMarried: false,
		scores: 89,
	},
	{
		name: "John",
		age: 19,
		isMarried: false,
		scores: 100,
	},
]

const stToString = st => `Hi! I'm ${st.name}. I have ${st.scores}`

// function stToString(st) {
// 	return `Hi! I'm ${st.name}. I have ${st.scores}`
// }

const strings = students.map(stToString)

console.log(strings)

const copyStudents = students.map(st => ({...st}))

console.log(copyStudents)

console.log(students === copyStudents) // false