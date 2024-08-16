const input = 'кошка,собака,лошадь,корова,кошка,собака,лошадь'

const removeDuplicates = inputString => {
	const initialArray = inputString.split(',') // преобразуем  исходную строку в массив
	const uniqArray = [] // массив для хранения отфильтрованных значений, можно было бы писать их сразу в строку, но так удобнее и код читаемее
	initialArray.forEach(element => {
		// для каждого элемента исходного массива
		if (!uniqArray.includes(element)) uniqArray.push(element) // если в массиве отфильтрованных элементов нет текущего - добавляем
	})

	const uniqString = uniqArray.join(',') // соединяем массив в строку через "," чтобы вывести в таком же виде, как и во входной строке
	return uniqString
}

console.log(removeDuplicates(input))
