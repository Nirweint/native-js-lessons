
// 1  Выведите с помощью цикла столбец чисел от 1 до 100.
// for (let i = 1; i <= 100; i++) {
// 	console.log(i)
// }

// 2 Выведите с помощью цикла столбец чисел от 100 до 1
// for (let i = 100; i > 0; i--) {
// 	console.log(i)
// }

// 3 Выведите с помощью цикла столбец четных чисел от 1 до 100.
// for (let i = 1; i < 101; i++) {
// 	if (i % 2 === 0) {
// 		console.log(i)
// 	}
// }

// 4 Заполните массив 10-ю иксами с помощью цикла
// let array = []
// for (let i = 0; i < 10; i++) {
// 	array.push('x')
// }
// console.log(array)

// 5 Заполните массив числами от 1 до 10 с помощью цикла.
// let array = []
// for (let i = 1; i <= 10; i++) {
// 	array.push(i)
// }
// console.log(array)

// 6 Заполните массив 10-ю случайными числами (дробями) от 0 до 1 с помощью цикла. Дроби округляйте до двух знаков в дробной части
// let array = []
// for (let i = 1; i <= 10; i++) {
// 	array.push(Math.random().toFixed(2))
// }
// console.log(array)

// 7 Заполните массив 10-ю случайными числами от 1 до 10 с помощью цикла
// let array = []
// for (let i = 0; i < 10; i++) {
// 	array.push(Math.round(Math.random() * 9) + 1)
// }
// console.log(array)

// 8 Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.
// let array = [1, 22, 4, 6, 7546, 103, 32, 9, 10]
// for (let i = 0; i <= array.length; i++) {
// 	if (array[i] < 10 && array[i] > 0) {
// 		console.log(array[i])
// 	}
// }

// 9 Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5. Как только будет найден первый такой элемент - выведите 'Есть' и оборвите цикл. Если такого элемента нет - ничего не выводите
// let array = [1, 22, 4, 6, 7546, 103, 32, 5, 3, 9, 10]
//
// for (let i = 0; i < array.length; i++) {
// 	if (array[i] === 5) {
// 		console.log('Exist')
// 		break
// 	}
// }

// 10 Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.
// let array = [1, 22, 4, 6, 7546, 103, 32, 5, 3, 9, 10]
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
// 	c
// }
// console.log(sum)

// 11 Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.
// let array = [1, 22, 4, 6, 7546, 103, 32, 5, 3, 9, 10]
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
// 	sum += array[i] * array[i];
// }
// console.log(sum)

// 12 Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).
let array = [1, 22, 4, 6, 7546, 103, 32, 5, 3, 9, 10]
let sum = 0;
for (let i = 0; i < array.length; i++) {
	sum += array[i]
}
console.log(sum / array.length)