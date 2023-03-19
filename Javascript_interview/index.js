Array.prototype.skip = function (arg) {
    let arr = this;//[1,1,2,3,4] and [1,1,2,3,4,5]
    //arg first time it is number and next time function
    if (typeof arr === "function") {
        return arr.filter((num) => !arg(num));
    } else {
        return arr.filter((num) => num !== arg);
    }
}

let res1 = [1, 2, 3, 4, 1].skip(1);
let res2 = [1, 1, 2, 3, 4, 5].skip((num) => num < 3);

console.log(res1);
console.log(res2);

const x = [1, 2, 3, 4, 5];
const y = [5, 2, 1, 4, 3];
x.sort((a, b) => a - b);
console.log(x);
y.sort((a, b) => a - b);
console.log(y);

let res = JSON.stringify(x) === JSON.stringify(y);
console.log(res);

const userData = [
    {
        "name": "kotireddy",
        "age": 29
    },
    {
        "name": "Bharathi",
        "age": 27
    }
];

let payLoad = [];
const obj = {};
userData.map(({ name, age }) => {
    obj[name] = age;
    payLoad = [
        obj,
    ]
})
console.log(payLoad);


const num = [2, 7, 11, 15];
const target = 9;
const output = [];

for (let i = 0; i < num.length - 1; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] + num[j] === target) {
            output.push([i, j]);
        }
    }
};
console.log(...output);

let xx = 7;
let yy = !!xx && !!!xx;
console.log(yy);


let a = 10;
let b = (a, a + 10);
console.log(b);

const aa = [1, 2, 3];
const bb = [...aa];
bb.push(4);
console.log(aa);

let sortData = [31, 2, 8];
sortData.sort();
console.log(sortData);


let aaa = [1, 2, 3];
let bbb = [4, 5, 6];
console.log(aaa + bbb);


let revese = [1, 2, 3, 4];
let [aaaa, ...bbbb] = revese.reverse();
console.log(bbbb, aaaa);



const a1 = [1, 2, 3, 4];
const a2 = [1, 2, 5, 6];
let resa1 = a1.filter((num) => !a2.includes(num));
let resa2 = a2.filter((num) => !a1.includes(num));

console.log([...resa1, ...resa2]);



let a3 = (() => {
    return 9;
});

console.log(a3);



const numbers = [1, 2, 3, 4, 5];
const [y1] = numbers;
console.log(y1);


let pizza = {
    "item": "Pizza",
    "item": "Burger"
};
console.log(pizza["item"]);


let players = [
    {
        "name": "VK",
        "role": "Batsman"
    },
    {
        "name": "HP",
        "role": "All-Rounder"
    },
    {
        "name": "RJ",
        "role": "Boolwer"
    }

];

let results = players.some((player) => {
    return player.role === "Batsman"

});
console.log(results)

const user = {
    "fName": "Koti",
    "lName": "Reddy",
    "email": null
};

let result = Object.values(user).every((val) => val);
console.log(result);

const calc = eval("10*10+5");
console.log(calc);

let pantry = [
    {
        "food":"rice",
        "isvegan":true
    },
    {
        "food":"chickenrice",
        "isvegan":false
    },
    {
        "food":"tomatorice",
        "isvegan":true
    }
];
const veg = pantry.filter(f => f.isvegan).map(f => f.food);
const veg1 = pantry.flatMap(f => f.isvegan ? [f.food] : [])
console.log(veg,veg1);


let xxxx = [3,3];
let yyyy =xxxx[0] + xxxx[1];
console.log(yyyy);

let xxx = true;
let yyy = {};
console.log(xxx,yyy.xxx);

const itemArray = [1,2,3,4];
const itemA = itemArray.map((item) => {if(item > 1) return item});
console.log(itemA);
const flatItem = itemArray.flatMap((item) => item > 1 ? item : []);
console.log(flatItem);


var str = true;
console.log(str + 0);
console.log(str + "xyz");
console.log(str + true);
console.log(str + false);

const newNumber = [1,2,3];
newNumber.push(4);
newNumber.pop();
newNumber.push(4);
console.log(newNumber.length); 


const xxxxx = () =>{
    let y = 4;
    return {
        y:2
    };
};

const z = xxxxx().y;
console.log(z);



let nan = NaN;
console.log(typeof nan);

/*const name = "koti";
if(1){
    name = "bharathi";
}
console.log(name);*/


const obj1 = {a:1,b:{c:2}};
const obj2 = {...obj1};
obj2.b.c = 3;
console.log(obj2.b.c);

let xxxxxx = NaN;
let yyyyyy = NaN;

console.log(xxxxxx == yyyyyy , xxxxxx === yyyyyy);




