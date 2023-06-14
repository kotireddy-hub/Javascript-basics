//Object literal
const person = {
    name:"kotireddy",
    age:29,
    hobbies:['reading',"listen song"],
    address:{
        street:"4-57,Tangeda",
        city:"Guntur",
        state:"AP",
        pincode:"522414"
    }
};

person.name = "bharathi"
console.log(person);


const newPerson = new Object();
newPerson.name = "kotireddy";
newPerson.age = 29;
newPerson.hobbies = ["reading","listen songs"];
newPerson.address = {
    street:"4-57,Tangeda",
    city:"Guntur",
    state:"AP",
    pincode:"522414"
};
console.log(newPerson)

const personProto = {
    greeting:function(){
        console.log(`Hello + ${this.name}`);
    },
    greetingWithArrow:(name)=>{
        console.log(`Hello personProto + ${name}`);
    }
}


const personData = Object.create(personProto);
personData.name ="kotireddy";
personData.age = 29;
personData.hobbies = ["reading","watching movies"];
personData.address = {
    street:"4-57,Tangeda",
    city:"Guntur",
    state:"AP",
    pincode:"522414"
}
personData.greeting();
personData.greetingWithArrow(personData.name);

function PersonDetails(firstName,lastName,age,hobbies){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.hobbies = hobbies;
    this.getFullName = function(){
    return `${firstName}${lastName}`
    };
};

const person1 = new PersonDetails("koti","reddy",29,["reading","listing songs"]);

console.log(person1.getFullName());

class PersonList {
    constructor(name,age,hobbies){
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    };
    greetingName(){
        console.log(`Hello ${this.name}`);
    };
};

const person2 = new PersonList("kotireddy",29,["reading"]);
person2.greetingName();
console.log(person2);