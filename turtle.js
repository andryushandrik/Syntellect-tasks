// Черепашке нужно забраться на вершину холма. Расстояние от подножия холма до его
// вершины - 100м. Черепашка за день залезает вверх по холму на 50м. Ночью она
// спит и скатывается на 30м вниз. На какие сутки черепашка залезет на столб?

const hillHeight = 100, // высота холма в метрах
	dailyUp = 50, //высота подъема за сутки
	dailyDown = 30 //спуск за ночь

const calculate = (hillHeight, dailyUp, dailyDown) => {
	let currentHeight = 0,
		daysCount = 0

	while (true) {
		daysCount++
		currentHeight += dailyUp
		if (currentHeight >= hillHeight) return daysCount

		currentHeight -= dailyDown
	}
}

const result = calculate(hillHeight, dailyUp, dailyDown)

console.log(result)
