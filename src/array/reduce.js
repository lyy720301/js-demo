let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue)
    }
    return accumulator
}, [])

console.log(myOrderedArray)
