let counterStartNumber = 1;

let counterEndNumber = 10;

while( counterStartNumber <= counterEndNumber){
    console.log(`Current Number is ${counterStartNumber}`);
    counterStartNumber = counterStartNumber + 1;
}


const tableNumber = 2;

let start = 1;

let end = 10;

while ( start <= end){
    const total = tableNumber * start;
    const tableData = `${tableNumber} X ${start} = ${total}`;
    console.log(tableData);
    start++ ;
}