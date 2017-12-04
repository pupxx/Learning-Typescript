"use strict";
console.log("it works");
//  string
var myName = "Cheryln";
// myName = 20;  this gives us an error
//number
var myAge = 44;
//myAge = 'Cheryln'  this gives us an error.
//boolean
var hasHobbies = false;
// hasHobbies = 1;  this is an error even though 1 is true in JS.
//assign types
var myRealAge;
myRealAge = 44;
// myRealAge = "27";
// array
var hobbies = ["Cooking", "Sports"];
hobbies = [100]; // this is ok since hobbies is type any.
//  tuples has to follow the layout.  ie) 2 items and first has to be a string and second has to be a number.
var address = ["Sputersreet", 99];
// Enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
// the assigned type refers to the return value.
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void -- this function does not return anything.  If I try to return anything it will error since I told it void.
function sayHello() {
    console.log("Hello");
}
// argument types.
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 3));
// function as types
// function are types on their own.
// I can define the format that the function must be for this variable to accept it.
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 3));
// objects
var userData = {
    name: 'Cheryln',
    age: 27
};
// complex object
var complex = {
    data: [1, 2, 3],
    output: function (all) {
        return this.data;
    }
};
