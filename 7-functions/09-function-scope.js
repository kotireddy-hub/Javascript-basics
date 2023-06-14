//global scope
const userName = "Kotireddy";

function printDeatils(){
    const city = "Hyd";

    const deatils = {
        "fullName":`${userName}`,
        "location":`${city}`
    }
    console.log(deatils);
};

printDeatils();

console.log(`Name ${userName}`);
console.log(`city ${city}`);