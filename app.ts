console.log("it works");
//  string
let myName = "Cheryln";
// myName = 20;  this gives us an error

//number
let myAge = 44;
//myAge = 'Cheryln'  this gives us an error.

//boolean
let hasHobbies = false;
// hasHobbies = 1;  this is an error even though 1 is true in JS.

//assign types
let myRealAge: number;
myRealAge = 44;
// myRealAge = "27";

// array
let hobbies: any[] = ["Cooking", "Sports"]
hobbies=[100] // this is ok since hobbies is type any.

//  tuples has to follow the layout.  ie) 2 items and first has to be a string and second has to be a number.
let address: [string, number] = ["Sputersreet", 99];

// Enums
enum Color {
    Gray,
    Green = 100,
    Blue = 2
}
let myColor: Color = Color.Blue;
console.log(myColor)

// the assigned type refers to the return value.
function returnMyName(): string{
    return myName
}
console.log(returnMyName())

//void -- this function does not return anything.  If I try to return anything it will error since I told it void.
function sayHello(): void{
    console.log("Hello")
}

// argument types.
function multiply(value1: number, value2: number): number {
    return value1 * value2
}
console.log(multiply(2, 3))

// function as types
// function are types on their own.
// I can define the format that the function must be for this variable to accept it.
let myMultiply: (val1: number, val2: number)=> number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2,3))

// objects
let userData: {name: string, age: number} = {
    name: 'Cheryln', 
    age: 27
}

// complex object
let complex: {data: number[], output: (all: boolean)=>number[]} = {
    data: [1,2,3], 
    output: function (all: boolean): number[] {
        return this.data;
    }
}