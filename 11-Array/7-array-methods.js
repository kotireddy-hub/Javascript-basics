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

// [].map;

/*
ReadonlyArray.map<U>(callbackfn: (value: T, index: number, array: readonly T[]) => U, thisArg?: any): U[]
A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.


Calls a defined callback function on each element of an array, and returns an array that contains the results.
*/
/* using forEach it will return undefined value if assign any variable */
const welcome_to_students_using_forEach = students.forEach((student)=>{
const welcomeMessage = `Welcome to ${student}`;
console.log(welcomeMessage);
return welcomeMessage;
});

console.log(`Using ForEach - `,welcome_to_students_using_forEach);


const welcome_to_students_using_map = students.map((student)=>{
    const welcomeMessage_map = `Welcome to ${student}`;
    console.log(welcomeMessage_map);
    return welcomeMessage_map;
});

console.log(`Using Map - `,welcome_to_students_using_map);


function applyDiscount(amount, discountValue = 10){
    const discountAmount = (amount * discountValue) / 100 ;
    return amount - discountAmount;
};

const shoppingPrice = [40,50,60];
const discountPrice = [];
const DISCOUNT = 10;


for(i=0; i < shoppingPrice.length; i++){
    const value = shoppingPrice[i];
    // const discountAmount = (value * DISCOUNT) / 100 ;
    //const finalValue = value - discountAmount
    const finalValue = applyDiscount(value,DISCOUNT)
    discountPrice.push(finalValue);
};

console.log(discountPrice);

const shoppingPrice_discount_using_map = shoppingPrice.map((value)=>{
    const discountFinal = applyDiscount(value,DISCOUNT);
    return discountFinal;
});

console.log(`shoppingPrice_discount_using_map`,shoppingPrice_discount_using_map);

const shoppingPrice_discount_using_map_single_statemt = shoppingPrice.map(value=> applyDiscount(value));

console.log(`shoppingPrice_discount_using_map_single_statemt`,shoppingPrice_discount_using_map_single_statemt);

/*
[].push(123); // [123]

[100, 200].push(300); // [100, 200, 300];

[].forEach( () => {} );

[].forEach( function() {} );

['koti', 'reddy', 'kami'].forEach( (value) => { console.log(`Welcome {value}`) } );

// 'koti' => ('koti') => { console.log(`Welcome koti') }
// 'reddy' => ('reddy') => { console.log(`Welcome reddy`) }
// 'kami'

['A', 'B', 'C'].map(char => char.toLowerCase());

// A => A => A.toLowerCase() ===> a
// B => B => B.toLowerCase() ===> b
// C => C => C.toLowerCase() ===> c
*/