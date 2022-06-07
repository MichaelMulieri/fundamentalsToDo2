// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number 
// (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countDown(num){
    arr = []
    for (num = num; num >=0; num--){
        arr.push(num)
    }
    console.log(arr)
    console.log(arr.length)
}

countDown(10)
countDown(15)
countDown(3)

// Given an array, return the sum of the first value in the array, plus the array’s length. 
// What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function sumOfFirst(arr){
    sum = arr[0] + arr.length
    console.log(sum)
}

sumOfFirst([1,2,3,4,5])
sumOfFirst(['what',2,3,4,5])
sumOfFirst([false,2,3,4,5])

// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

arr = [1,3,5,7,9,13];
howManyValues = 0;
for (var i = 0; i < arr.length; i++){
    if (arr[i] > arr[1]){
        howManyValues += 1;
    }
}
console.log(howManyValues)

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. 
// Print how many values this is. What will you do if the array is only one element long?

function greaterThanSecond(arr){
    newArray = [];
    howMany = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr.length < 2){
            console.log("Not enough numbers in the array!");
        return newArray;
        }
        if (arr[i] > arr[1]){
            newArray.push(arr[i])
            howMany += 1;
        }
    }
    console.log(newArray)
    console.log(howMany)
}

greaterThanSecond([1,3,5,7,9,13])
greaterThanSecond([3])
greaterThanSecond([3,2])

// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLengthThatValue(num1, num2){
    if (num1 === num2){
        console.log("Jinx!")
        return num1
    }
    var newArray = [];
    var len = 0;
    while (len < num1){
        newArray.push(num2)
        len++
    }
    console.log(newArray)
    return newArray
}

thisLengthThatValue(10,10)
thisLengthThatValue(1,3)
thisLengthThatValue(6,9)



// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; 
// if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitFirstValue(arr){
        if (arr[0] > arr.length){
            console.log("Too Big!")
        }
        else if (arr[0] < arr.length){
            console.log("Too Small!")
        }
        else{
            console.log("Just Right!")
        }
}

fitFirstValue([5,3,6,7])
fitFirstValue([3,5,6,7,8])
fitFirstValue([6,5,4,3,2,1])

// Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) that accepts a number of degrees in Fahrenheit 
// and returns the equivalent temperature as expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.

function fahrenheitToCelsius(fDegrees){
    cDegrees = Math.round((fDegrees - 32)*5/9)
    console.log(cDegrees)
    return cDegrees
}

fahrenheitToCelsius(70)
fahrenheitToCelsius(56)
fahrenheitToCelsius(30)

