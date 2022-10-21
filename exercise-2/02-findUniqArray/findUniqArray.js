/**
 * Описание: найти уникальные числа в массиве чисел
 * Ожидаемый результат: findUniqArray([1, 1, 2, 2, 4, 2, 3, 7, 3]) => [1, 2, 4, 3, 7];
 * @param {Array<number>} arr - Array
 * @returns {Array<number>}
 */
const findUniqArray = arr => {
    let set = new Set()
    let final = []
    for (const number of arr) {
        set.add(number)
    }
    set.forEach(el => final.push(el))
    return final
}
module.exports = findUniqArray;