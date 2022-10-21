/**
 * ВОЗМОЖНО, что тесты будут падать с ошибкой TypeError: Converting circular structure to JSON
 * и указывать на функцию .toEqual(). Не обращаем внимание и тестируем на тех данных, которые приведены в combineObjects.test.js
 *
 * Описание: написать функцию, которая принимает несколько объектов
 * и возвращает новый объект, объединяющий все входные объекты.
 * Все свойства входного объекта - числовые значения.
 * Объекты объединяются вместе, т.е. значения совпадающих ключей складываются вместе.
 * Функция должна быть чистой, т.е. нельзя изменять входные параметры.
 *
 * Ожидаемый результат:
 * const objA = { a: 10, b: 20, c: 30 }
 * const objB = { a: 3, c: 6, d: 3 }
 * combine(objA, objB) => { a: 13, b: 20, c: 36, d: 3 }
 * @returns {Object.<string, number>}
 */
const combineObjects = (arrayOfObj) => {
    let FinalObj = {}
    for (let i = 0; i < arrayOfObj.length; i++) {
        for (let key in arrayOfObj[i]) {
            FinalObj[key] = FinalObj[key] ? FinalObj[key] + arrayOfObj[i][key]: arrayOfObj[i][key]
        }
    }

    return FinalObj;
}

module.exports = combineObjects;