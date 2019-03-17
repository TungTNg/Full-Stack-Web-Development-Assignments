// printReverse()

var sample = [1, 2, 3, 4, 5, 6];

function printReverse(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.unshift(sample[i]);
    }
    return newArray;
}


// test printReverse()
console.log(printReverse(sample));

// isUniform()

var sample1 = [1, 1, 1, 10];
var sample2 = [1, 1, 3, 8];

function isUniform(array) {
    var compare = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] !== compare) {
            return false;
        }
    } return true;
}


// test isUniform()

console.log(isUniform(sample1));
console.log(isUniform(sample2));

// sumArray()

function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];   
    }
    return sum;
}

// test sumArray()

console.log(sumArray(sample1));
console.log(sumArray(sample2));

// max()

function max(array) {
    var max = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

// test max()

console.log(max(sample1));
console.log(max(sample2));