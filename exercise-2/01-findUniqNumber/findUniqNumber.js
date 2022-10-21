/**
 * Описание: найти уникальное число в массиве чисел
 * Ожидаемый результат: findUniqNumber([ 1, 1, 1, 2, 1, 1 ]) => 2;
 * @param {Array<number>} arr - Array
 * @returns {Number}
 */
const findUniqNumber = arr => {
    return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
    }

module.exports = findUniqNumber;