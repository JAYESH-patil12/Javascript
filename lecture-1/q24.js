function sum(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        if (i % 2 === 0) { 
            sum += i;
        }
    }
    return sum;
}

var num = 6;
var result = sum(num);
console.log("The sum of even numbers from 1 to " + num + " is: ")