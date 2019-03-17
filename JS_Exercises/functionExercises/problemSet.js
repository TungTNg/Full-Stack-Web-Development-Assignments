function isEven(num) {
    if (typeof(num) !== "number") {
        return 'This is not a number!';
    } else if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    if (typeof(num) !== "number") {
        return 'This is not a number!';
    } else if (num === 0) {
        return 1;
    } else {
        /* 4!      = 4 * 1 * 2 * 3
        1st loop   = (num * 1) * 2 * 3
        2nd loop   =     (num  * 2) * 3
        3rd loop   =           num   * 3
        num        =                num
        */
        
/*        for (var i = 1; i < num; i++) {
            num = num * i;
        } return num;
    }*/
    
        var factor = num;
        for (var i = 1; i < num; i++) {
            factor = factor * i;
        } return factor;
    }
}

function kebabToSnake(str) {
    if (typeof(str) == "number") {
        return 'This is not a string!';
    } else {
        var newString = str.replace(/-/g, "_");
        return newString;
    }
}