const students = [];

students.push("koti");

students[students.length] = "Reddy";// this speed compare to push 


console.log(students,":: students ");

function returingValue(){
    return 20*1;
};

function withoutReturingValue(){
    const value = 20 * 1;
}

console.log(`returing with value`,returingValue());
console.log(`returing without value`,withoutReturingValue());

[].forEach
/*
(method) Array<undefined>.forEach(
    callbackfn: (value: undefined, index: number, array: undefined[]) => void, 
    thisArg?: any
    ): void
Performs the specified action for each element in an array.

@param callbackfn — A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.

@param thisArg — An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
*/

[].map;

/*
ReadonlyArray.map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.


Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/