/***************************************************************************

@Program : 
Taking Decisions: if / else Statements

@problem_satement : 

1. If your country's population is greater that 33 million, log a string like this 
to the console: 'Portugal's population is above average'. Otherwise, log a string 
like'Portugal's population is 22 million below average' (the 22 is the average of
33 minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original

********************************************************************************/

let country = 'India'; 
let population=10;
// let population =13;
//let population =130;

if(population > 33){
    console.log(`${country}'s population is above average`)
}
else {
    console.log(`${country}'s population is ${33-population} million below average`);
}


// contributed by @_aj7t