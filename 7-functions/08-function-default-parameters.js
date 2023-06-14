function welcome( name = "UNKNOW"){
console.log(`Welcome to ${name}`);
};

welcome();
welcome("Kotireddy");


const greatingUser = ( userName = "Unknow User") => {
return `welcome to ${userName}`;
};

const welcome1 = greatingUser("Koti");
console.log(welcome1);